var Discord = require('discord.js');
var db = require(`quick.db`)
var ms = require(`parse-ms`)

exports.run = async(client, msg, args) => {

    let daily = await db.fetch(`daily_${msg.author.id}`);
    let amount = 100
    let timeout = 86400000

    if (daily != null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));
        msg.channel.send(`You already collected your daily reward! You can come back in **${time.hours}h ${time.minutes}m ${time.seconds}s!**`)


    } else {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Daily`, msg.author.displayAvatarURL)
        .setColor("GREEN")
        .setDescription(`**Daily Rewards**`)
        .addField(`Collected`, amount)
        msg.channel.send(embed)
        
        
        db.add(`money_${msg.author.id}`, amount)
        db.add(`daily_${msg.author.id}`, Date.now())
    }
}
