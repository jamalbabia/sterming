const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`help |^^invite^^`,'https://www.twitch.tv/By:A7MD');
  console.log('BOT ONLINE');
});


client.login(process.env.TOKEN);
