var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    let score;
    if (msg.guild) {
        score = client.getScore.get(msg.author.id, msg.guild.id);
        if (!score) {
            score = {
                id: `${msg.guild.id}-${msg.author.id}`,
                user: msg.author.id,
                guild: msg.guild.id,
                points: 0,
                level: 1,
            };
        }
        const xpAdd = Math.floor(Math.random() * 10) + 50;
        const curxp = score.points;
        const curlvl = score.level;
        const nxtLvl = score.level * 5000;
        score.points = curxp + xpAdd;
        if (nxtLvl <= score.points) {
            score.level = curlvl + 1;
            const lvlup = new MessageEmbed()
                .setAuthor(
                    `Congrats ${msg.author.username}`,
                    msg.author.displayAvatarURL()
                )
                .setTitle('You have leveled up!')
                .setThumbnail('https://i.imgur.com/lXeBiMs.png')
                .setColor(color)
                .addField('New Level', curlvl + 1);
            msg.channel.send(lvlup).then(msg => {
                msg.delete({
                    timeout: 10000,
                });
            });
        }
        client.setScore.run(score);
}
}