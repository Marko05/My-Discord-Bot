const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

 bot.on("ready", function (){
    console.log(`${bot.user.username} successfully logged in!`)
});

bot.login(process.env.token);