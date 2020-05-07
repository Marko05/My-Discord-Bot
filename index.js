const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '!';
const token = `NzA1OTA3NjQ2NDgxNDMyNjA4.XrQZwA.G9lawU5iFv0lOivCdVbZjU4g-Ps`
const r = "RANDOM";
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('the commands', ({type: "LISTENING"}))
})
 
bot.on('message', message => {
    let msg = message;
    let args = msg.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
    let cmd = command;
 
    if (command === 'help') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('General', `${prefix}help - Shows this message.\n${prefix}random - Shows a random number from <Args> to <args 2>`)
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
    if(cmd === 'kick'){
        if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("You don't have permission to kick members.");
        let toKick = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('Please mention someone to kick');
        if(!toKick) return msg.channel.send(`${args[0]} is not a member.`);
        if(!reason) return msg.channel.send('Specify a reason.');
 
        if(!toKick.kickable){
            return msg.channel.send(':x: I cannot kick someone that is mod/admin. :x:');
        }
 
        if(toKick.kickable){
            let x = new Discord.MessageEmbed()
            .setTitle('Kick')
            .addField('Member Kicked', toKick)
            .addField('Kicked by', msg.author)
            .addField('Reason', reason)
            .addField('Date', msg.createdAt)
            .setColor(r);
 
            msg.channel.send(x);
            toKick.kick();
        }
    }
    if(cmd === 'ban'){
        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("You don't have permission to ban members.");
        let toBan = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('Please mention someone to bann');
        if(!toBan) return msg.channel.send(`${args[0]} is not a member.`);
        if(!reason) return msg.channel.send('Specify a reason.');
 
        if(!toBan.bannable){
            return msg.channel.send(':x: I cannot ban someone that is mod/admin. :x:');
        }
 
        if(toBan.bannable){
            let x = new Discord.MessageEmbed()
            .setTitle('Ban')
            .addField('Member Banned', toBan)
            .addField('Banned by', msg.author)
            .addField('Reason', reason)
            .addField('Date', msg.createdAt)
            .setColor(r);
 
            msg.channel.send(x);
            toBan.ban();
        }
    }
})
 
bot.login(token);