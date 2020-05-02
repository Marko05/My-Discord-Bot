const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
const token = 'NzA1OTA3NjQ2NDgxNDMyNjA4.Xq32Kg.XBSLuMox9fiYO2-MCSPbBNwLJBg';
const r = "RANDOM";
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('!help', ({type: "LISTENING"}))
})
 
bot.on('message', message => {
    let msg = message;
    let args = msg.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
    let cmd = command;
 
    if (command === 'help') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('General', `${prefix}**help - Shows this message.\n${prefix}random - Shows a random number from <Args> to <args 2>**`)
        .setColor(0xff0000);
        msg.channel.send(embed);
    }
    if (command === 'random') {
        if(!args[0]) return msg.reply("You didn't specify args 1")
        if(!args[1]) return msg.reply("You didn't specify args 2")
        msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
    }
    if (cmd === 'clear' || cmd === 'purge'){
        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
    }
})
 
bot.login(token);