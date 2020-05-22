var Discord = require('discord.js');
var serverQueue = msg.client.queue.get(msg.guild.id);

exports.run = async(client, msg, args) => {

    if (!serverQueue) return msg.channel.send('There is nothing playing.');
return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);

}