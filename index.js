const Discord = require('discord.js');
const prefix = '*';
const {MessageEmbed} = require('discord.js');
const token = `NzA1OTA3NjQ2NDgxNDMyNjA4.XsGduw.GiONOVLJmEZVhaNQZfJ7kAjcd7I`;
const r = "RANDOM";
const bot = new Discord.Client();
const client = new Discord.Client();
const queue = new Map();
const api = require(`covidapi`)
const ms = require (`parse-ms`)
const randomPuppy = require (`random-puppy`)






client.on('message', async message => {



 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('*help', ({type: "PLAYING"}))
 

});


bot.on('message', message => {
    let msg = message;
    let args = msg.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
    let cmd = command;
 
    if (!message.content.startsWith(prefix)) return;

});
    if (command === 'help') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Aperace')
        .setDescription (`**Commands**`)
        .setThumbnail (`https://yt3.ggpht.com/a/AGF-l7-DFNiazt0LkaZXQZ-SWKm7BvooPsXjkgQtMQ=s800-c-k-c0xffffffff-no-rj-mo`)
        .addField('**General**', `**${prefix}help - Shows this message.\n${prefix}random - Shows a random number from <Args> to <args 2>.\n${prefix}user-info - Shows your Username and your ID.\n${prefix}avatar <user> - Shows the Avatar of the user.\n${prefix}youtube - Shows Magg´s and Demian´s Youtube Channel.\n${prefix}server-info - Give you some Informations about the Server.**`)
        .addField(`**Administrator**`, `**${prefix}ban <user> <reason> - Ban a user from the Discord Server.\n${prefix}kick <user> <reason> - Kick a user from the Discord Server.\n${prefix}clear | purge <amount of messages> - Clears a amount of messages.(Max. 100)**`)
        .setColor(0xff0000)
        .setFooter(`Created by Magg#0001`, `https://media.giphy.com/media/fGGV7FeScq2s/giphy.gif`)
        msg.channel.send(embed);
    }
});
    client.on('message', async message => {
    if (command === 'random') {
        if(!args[0]) return msg.reply("**You didn't specify args 1**")
        if(!args[1]) return msg.reply("**You didn't specify args 2**")
        msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
    }
});
    client.on('message', async message => {
    if (cmd === 'clear' || cmd === 'purge'){
        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("**:x: You can't use this command!**");
        if(!args[0]) return msg.channel.send("**Specify how many messages you want to delete.**");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`**:white_check_mark: Successfully deleted \`${args[0]} messages\`**`).then(m => m.delete({ timeout: 5000 }));
    }
});
    client.on('message', async message => {
    if(cmd === 'kick'){
        if(!msg.member.hasPermission('KICK_MEMBERS')) return msg.channel.send("**:x: You don't have permission to kick members.**");
        let toKick = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('**Please mention someone to kick.**');
        if(!toKick) return msg.channel.send(`**${args[0]} is not a member.**`);
        if(!reason) return msg.channel.send('**Specify a reason.**');
 
        if(!toKick.kickable){
            return msg.channel.send(':x: I cannot kick someone that is mod/admin.');
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
});
    client.on('message', async message => {
    if(cmd === 'ban'){
        if(!msg.member.hasPermission("BAN_MEMBERS")) return msg.channel.send("**:x: You don't have permission to ban members.**");
        let toBan = msg.mentions.members.first();
        let reason = args.slice(1).join(" ");
        if(!args[0]) return msg.channel.send('**Please mention someone to ban.**');
        if(!toBan) return msg.channel.send(`**${args[0]} is not a member.**`);
        if(!reason) return msg.channel.send('**Specify a reason.**');
 
        if(!toBan.bannable){
            return msg.channel.send(':x: I cannot ban someone that is mod/admin.');
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
});
    client.on('message', async message => {
    if (command === 'avatar') {
        if (!message.mentions.users.size) {
            return message.channel.send(`**Your avatar:** <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `**${user.username}'s avatar:** <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
    
        // send the entire array of strings as a message
        // by default, discord.js will `.join()` the array with `\n`
        message.channel.send(avatarList);
    }
});
    
    
    
    client.on('message', async message => {
    if (command === 'fruits') {
        message.react('🍎');
        message.react('🍊');
        message.react('🍇');
        message.react('🍉');
        message.react('🍌');
        message.react('🍍');

    }
});
    client.on('message', async message => {
    if (command === `youtube`) {
        return message.channel.send(`**Magg´s Youtube Channel:** https://www.youtube.com/channel/UCHf1Yjz6tH1Kni3jFuBWM3Q?view_as=subscriber\n**Demian´s Youtube Channel:** https://www.youtube.com/channel/UC4JLBKiDHvWbFVvKFVsO0Yg`)
        
    }
    });
    client.on('message', async message => {
    if (message.content === `${prefix}server-info`) {
        let embed = new Discord.MessageEmbed()
        .setTitle("__Server-Information__")
        .setColor("0ED4DA")
        .setThumbnail(`https://th.bing.com/th/id/OIP._hDMcU-MRjBRaTNRuURVmAHaFj?w=224&h=168&c=7&o=5&pid=1.7`)
        .addField('**Server-Name**', `**${message.guild.name}**`, true)
        .addField('**Server-Owner:**', `**${message.guild.owner.user.tag}**`, true)
        .addField("**Member-Count:**", `**${message.guild.memberCount}**`, true)
        
      
        message.channel.send(embed);
    }
    else if (message.content === `${prefix}user-info`) {

    }
    client.on('message', async message => {
        if (command === `meme`) {
                const subReddits = ["dankmeme", "meme", "memes"]
                const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        
                let img = await randomPuppy(random);
                let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setImage(img)
                .setTitle(`From r/${random}`)
                .setURL(`https://reddit.com/r/${random}`);
                message.channel.send(embed)
    
    
    }
});
        
          
    
    
});

    
bot.login(token);