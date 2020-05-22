var Discord = require('discord.js');
const serverQueue = msg.client.queue.get(message.guild.id);

exports.run = async(client, msg, args) => {
if (serverQueue && serverQueue.playing) {
    serverQueue.playing = false;
    serverQueue.connection.dispatcher.pause();
    return msg.channel.send('⏸ Paused the music for you!');
}
return msg.channel.send('There is nothing playing.');

}
