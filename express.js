/**
 * GitHub 仓库使用示例代码（模拟）
 * 通过注释和函数，帮助你熟悉常用操作流程
 */

// 1. 克隆仓库（Clone）
// git clone https://github.com/username/repository.git

function cloneRepository(repoUrl) {
  console.log(`克隆仓库：git clone ${repoUrl}`);
}

// 2. 创建新分支（Branch）
// git checkout -b new-branch

function createBranch(branchName) {
  console.log(`创建并切换到新分支：git checkout -b ${branchName}`);
}

// 3. 查看当前分支（Branch）
// git branch

function showCurrentBranch() {
  console.log('查看当前分支：git branch');
}

// 4. 添加修改文件（Add）
// git add filename

function addFile(filename) {
  console.log(`添加文件到暂存区：git add ${filename}`);
}

// 5. 提交修改（Commit）
// git commit -m "commit message"

function commitChanges(message) {
  console.log(`提交修改：git commit -m "${message}"`);
}

// 6. 推送到远程仓库（Push）
// git push origin branch-name

function pushToRemote(branchName) {
  console.log(`推送分支到远程仓库：git push origin ${branchName}`);
}

// 7. 拉取远程更新（Pull）
// git pull origin branch-name

function pullFromRemote(branchName) {
  console.log(`拉取远程分支更新：git pull origin ${branchName}`);
}

// 8. 查看状态（Status）
// git status

function showStatus() {
  console.log('查看仓库状态：git status');
}

// 9. 合并分支（Merge）
// git merge branch-name

function mergeBranch(branchName) {
  console.log(`合并分支：git merge ${branchName}`);
}

// 10. 查看提交日志（Log）
// git log

function showLog() {
  console.log('查看提交日志：git log');
}

// 使用示例
cloneRepository('https://github.com/username/repository.git');
createBranch('feature/new-feature');
showCurrentBranch();
addFile('index.js');
commitChanges('添加首页功能');
pushToRemote('feature/new-feature');
pullFromRemote('main');
showStatus();
mergeBranch('feature/new-feature');
showLog();
