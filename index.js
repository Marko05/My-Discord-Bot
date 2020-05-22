var Discord = require('discord.js');
var client = new Discord.Client();
var token = `NzA1OTA3NjQ2NDgxNDMyNjA4.XsfFgg.pvPfOQUVVf1CboPwYkdNa7a1Gug`;
var prefix = `*`


client.on('ready', async() => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('commands', ({type: "PLAYING"}))

});

client.on('message', async(msg) => {
    if(msg.author.bot) return;
    if(!msg.guild) return;

    
    if(!msg.content.toLowerCase().startsWith(prefix)) return;

    var args = msg.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, msg, args);
    } catch(err) {
        console.warn(err);
    }
});

client.login(token)