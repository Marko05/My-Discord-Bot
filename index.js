const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';

 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('!test', ({type: "PLAYING"}))
})
 
bot.on('message', message => {
    let msg = message;
    if(msg.content === 'hi'){
        msg.channel.send(`Hello ${message.author.tag}`)
    }
    if(msg.content === `${prefix}test`){
        msg.author.send('**Hello User, Whats up?**')
        msg.channel.send('**Check DM**')
    }
})
 
bot.login(process.env.token);