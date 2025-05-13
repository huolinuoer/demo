// apache-check.js
const http = require('http')
const https = require('https')
const url = require('url')

function checkApache(urlString) {
  return new Promise((resolve, reject) => {
    const parsedUrl = url.parse(urlString)
    const lib = parsedUrl.protocol === 'https:' ? https : http

    const options = {
      method: 'HEAD', // 只请求头部，快速检测
      host: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.path || '/'
    }

    const req = lib.request(options, (res) => {
      // Apache服务器一般会返回200-399的状态码表示可用
      if (res.statusCode >= 200 && res.statusCode < 400) {
        resolve({ available: true, statusCode: res.statusCode })
      } else {
        resolve({ available: false, statusCode: res.statusCode })
      }
    })

    req.on('error', (err) => {
      resolve({ available: false, error: err.message })
    })

    req.end()
  })
}

// 使用示例
const testUrl = 'http://localhost' // 替换为你的Apache服务器地址

checkApache(testUrl).then(result => {
  if (result.available) {
    console.log(`Apache服务器可用，响应状态码：${result.statusCode}`)
  } else if (result.error) {
    console.log(`无法连接Apache服务器，错误信息：${result.error}`)
  } else {
    console.log(`Apache服务器响应异常，状态码：${result.statusCode}`)
  }
})
