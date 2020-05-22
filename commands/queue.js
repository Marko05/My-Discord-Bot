var Discord = require('discord.js');
var prefix = `*`
let queue = {};

exports.run = async(client, msg, args) => {
const serverQueue = msg.client.queue.get(msg.guild.id);
    if (!serverQueue) return msg.channel.send('There is nothing playing.');
    return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
    `);
}


