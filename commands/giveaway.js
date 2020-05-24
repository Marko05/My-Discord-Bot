const {MessageEmbed} = require('discord.js')
const ms = require('ms');

exports.run = async(client, msg, args) => {

    if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.reply('**You can\'t use that! :x:**');
    
    if(!args[0]) return msg.channel.send(`:x: **Please specify your time!**`)
    if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return msg.channel.send(`**You did not use the correct formatting for the time.**`)
    if(isNaN(args[0][0])) return msg.channel.send(`:x: **That is not a number!**`)
    
    let channel = msg.mentions.channels.first()
    if(!channel) return msg.channel.send(`:x: **Please select a Channel.**`)
    
    let prize = args.slice(2).join(" ")
    if(!prize) return msg.channel.send(`**Please specify a price.**`)
    msg.channel.send(`**Giveaway created in ${channel}.**`)
    
    let Embed = new MessageEmbed()
    .setTitle(`**🎉 GIVEAWAY 🎉**`)
    .setDescription(`**${prize}**`)
    .setTimestamp(Date.now()+ms(args[0]))
    .setColor(`BLUE`)
    let m = await channel.send(Embed)
    m.react("🎉")
    setTimeout(() => {
        if(m.reactions.cache.get("🎉").count<=1){
            msg.channel.send(`Reactions: ${m.reactions.cache.get("🎉").count}`)
            return msg.channel.send(`Not enough people reacted for me to start draw a winner!`)
        }
        
        let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
        channel.send(`The winner of the giveaway for **${prize}** is **${winner}**`)
    }, ms(args[0]));
}
