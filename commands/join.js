var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
            voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
    })
}