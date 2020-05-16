const Discord = require('discord.js');
const client = new Discord.Client();
const token = `NzA1OTA3NjQ2NDgxNDMyNjA4.XsAHqA.CkCaTIa-gZq0iXwUFrzAsX8f-Zw`;

client.on("ready", () => {
  console.log('Online.')
})

client.on('message', async message => {
  if (message.author.bot) return;
  let prefix = '*'; // customized. you can change it whatever you want.
  if (!message.content.startsWith(prefix)) return; // use this. so your bot will be only executed with prefix.
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  if (msg.startsWith(prefix + 'ping')) {
    message.channel.send('pong.'); // results.
  } // easy way.
  
  if (msg.startsWith(prefix + 'hello')) {
    message.channel.send('hewwo'); // results.
  }
});

client.login.token // Put your token into the .env
// Make sure to lock your project. Go to the your name project and click "Make This Project Private"