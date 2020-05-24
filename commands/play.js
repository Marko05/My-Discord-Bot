var Discord = require('discord.js');
var GOOGLE_API_KEY = (`AIzaSyBOmq3QNgtA7gLM-GxzduaZ5bqbC7tJ-2g`);
var YouTube = require("simple-youtube-api");
var ytdl = require(`ytdl-core`)

exports.run = async(client, msg, args) => {

const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();
const searchString = args.slice(1).join(" ");
const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
const voiceChannel = msg.member.voice.channel;
let embed = new Discord.MessageEmbed()



if (!args.length) {
    //IF AUTHOR DIDENT GIVE URL OR NAME
    embed.setAuthor("WRONG SYNTAX : Type `play <URL> or text`")
    return msg.channel.send(embed);
  }

  const { channel } = msg.member.voice;
      
  if (!channel) {
    //IF AUTHOR IS NOT IN VOICE CHANNEL
    embed.setAuthor("YOU NEED TO BE IN VOICE CHANNEL :/")
    return msg.channel.send(embed);
  }

  //WE WILL ADD PERMS ERROR LATER :(

  const targetsong = args.join(" ");
  const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
  const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
  const urlcheck = videoPattern.test(args[0]);

  if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
    embed.setAuthor("I am Unable To Play Playlist for now")
    return msg.channel.send(embed);
  }

  const serverQueue = msg.client.queue.get(msg.guild.id);

  const queueConstruct = {
    textChannel: msg.channel,
    channel,
    connection: null,
    songs: [],
    loop: false,
    volume: 100,
    playing: true
  };
  
  const voteConstruct = {
    vote: 0,
    voters: []
  }

  let songData = null;
  let song = null;

  if (urlcheck) {
    try {
      songData = await ytdl.getInfo(args[0]);
      song = {
        title: songData.title,
        url: songData.video_url,
        duration: songData.length_seconds
      };
    } catch (error) {
      if (msg.include === "copyright") {
        return msg
          .reply("THERE IS COPYRIGHT CONTENT IN VIDEO -_-")
          .catch(console.error);
      } else {
        console.error(error);
      }
    }
  } else {
    try {
      const result = await youtube.searchVideos(targetsong, 1);
      songData = await ytdl.getInfo(result[0].url);
      song = {
        title: songData.title,
        url: songData.video_url,
        duration: songData.length_seconds
      };
    } catch (error) {
      console.log(error)
      if(error.errors[0].domain === "usageLimits") {
        return msg.channel.send("Your YT API limit is over and it will be restored under 24 hours")
      }
    }
  }

  if (serverQueue) {
      if(serverQueue.songs.length > Math.floor(QUEUE_LIMIT - 1) && QUEUE_LIMIT !== 0) {
    return msg.channel.send(`You can not add songs more than ${QUEUE_LIMIT} in queue`)
  }
    serverQueue.songs.push(song);
    embed.setDescription(`\`${song.title}\`, Song Added to queue`)
    embed.setFooter(`${song.duration} Seconds`)
    embed.setThumbnail(client.user.displayAvatarURL())
    
    return serverQueue.textChannel
      .send(embed)
      .catch(console.error);
  } else {
    queueConstruct.songs.push(song);
  }

  if (!serverQueue)
    msg.client.queue.set(msg.guild.id, queueConstruct);
     msg.client.vote.set(msg.guild.id, voteConstruct);
  if (!serverQueue) {
    try {
      queueConstruct.connection = await channel.join();
      play(queueConstruct.songs[0], msg);
    } catch (error) {
      console.error(`Could not join voice channel: ${error}`);
      msg.client.queue.delete(msg.guild.id);
      await channel.leave();
      return msg.channel
        .send({
          embed: {
            description: `😭 | Could not join the channel: ${error}`,
            color: "#ff2050"
          }
        })
        .catch(console.error);
    }
  }
}
