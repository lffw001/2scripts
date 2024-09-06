function printLogo() {console.log(`                  _         _  _        
  ___  _   _   __| |  ___  (_)(_)  __ _ 
 / __|| | | | / _\` | / _ \\ | || | / _\` |
 \\__ \\| |_| || (_| || (_) || || || (_| |
 |___/ \\__,_| \\__,_| \\___/_/ ||_| \\__,_|
                         |__/           \n`);}function printScriptInfo(script, author, home, currentVersion, newVersion) {console.log(`【脚本作者】${author}`);console.log(`【脚本地址】${home}`);console.log(`【TG-频道】https://t.me/IiiiOOiiiiOO`);console.log(`【TG-群组】https://t.me/v_script`);console.log(`【当前版本】v${currentVersion}\n【最新版本】v${newVersion}`);console.log(`【最近更新】${script.changelog.date}`);console.log(`【更新内容】${script.changelog.changes}`);}module.exports = {printLogo, printScriptInfo};
