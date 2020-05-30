var Discord = require('discord.js');

exports.run = async(client, msg, args) => {

    if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("**:x: | You can't use this command!**");
    
    if(!args[0]) return msg.channel.send("**Specify how many messages you want to delete.**");
    msg.delete();
    msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send(":x: | You can only delete 100 messages at once.")});
    msg.channel.send(`:white_check_mark: | Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
}
