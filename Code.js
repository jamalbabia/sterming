const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`help |^^invite^^`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});
client.login("NTQ1MDA2MjM0NjI2MDMxNjE4.D0cMHw.mSjIlEblNOFincgUaeIw6-tX6oA");