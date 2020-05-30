const {MessageEmbed} = require('discord.js')

var Discord = require('discord.js');

exports.run = async(client, msg, args) => {
        let Emojis="";
        let EmojisAnimated="";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return client.emojis.cache.get(id).toString()
        } 
        msg.guild.emojis.cache.forEach(emoji=>{
            OverallEmojis++;
            if(emoji.animated){
                Animated++;
                EmojisAnimated+=Emoji(emoji.id)
            }else{
                EmojiCount++;
                Emojis+=Emoji(emoji.id)
            }
        })
        let Embed = new MessageEmbed()
        .setTitle(`Emojis in ${msg.guild.name}.`)
        .setDescription(`**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}\n\n**All emojis [${OverallEmojis}]**`)
        .setColor(`RANDOM`)
        msg.channel.send(Embed)
    }
