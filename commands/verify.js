var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if(msg.author.bot) return;
    if(msg.channel.id === '714230187876941924')
        await msg.delete();
    if(msg.content.toLowerCase() === '*verify' && msg.channel.id === '714230187876941924')
    {   
        await msg.delete().catch(err => console.log(err));
        const role = msg.guild.roles.cache.get('714507149564182538');
        const otherole = msg.guild.roles.cache.get('714509482520215555');
        if(role) {
            try {
                await msg.member.roles.add(role);
                msg.author.send("**:white_check_mark: | Succesfully Verified. **");

                await msg.member.roles.remove(otherole);

            }
            catch(err) {
                console.log(err);
            }
        }
    }
}


