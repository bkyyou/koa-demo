async function clone(repo, desc) {
  const { promisify } = require('util');
  const download = promisify(require('download-git-repo'));
  const ora = require('ora');
  const process = ora(`正在下载 ${repo}`);
  
  process.start();
  try {
    await download(repo, desc);
    process.succeed()
  } catch (error) {
    process.fail();
  }
}

module.exports = clone;