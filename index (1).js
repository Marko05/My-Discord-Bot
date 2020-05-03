const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = '*';
const token = '';
const r = "RANDOM";
 
bot.on('ready', () => {
    console.log(`${bot.user.tag} successfully logged in!`)
    bot.user.setActivity('*help', ({type: "PLAYING"}))
})
 
bot.on('message', message => {
    let msg = message;
    let args = msg.content.slice(prefix.length).split(/ +/);
    let command = args.shift().toLowerCase();
    let cmd = command;
    let user = message.mentions.users.first();
 	if (msg.member.hasPermission("ADMINISTRATOR")) {
 		if(command === 'kick') {
 			if (user) {
 			// Now we get the member from the user
 			const member = message.guild.member(user);
 			// If the member is in the guild
 			if (member) {
	 			/**
	 			  * Kick the member
	 			  * Make sure you run this on a member, not a user!
	 			  * There are big differences between a user and a member
	 			*/
	 			member.kick('Optional reason that will display in the audit logs').then(() => {
	 				// We let the message author know we were able to kick the person
	 				message.reply(`Successfully kicked ${user.tag}`);
	          	}).catch(err => {
		            // An error happened
		            // This is generally due to the bot not being able to kick the member,
		            // either due to missing permissions or role hierarchy
		            message.reply('I was unable to kick the member');
		            // Log the error
		            console.error(err);
	          	});
         	} else {
	          	// The mentioned user isn't in this guild
	        	message.reply("That user isn't in this guild!");
        	}
	      // Otherwise, if no user was mentioned
	    } else {
	    		message.reply("You didn't mention the user to kick!");
	    	}
	    }
	    if(command === "ban") {
	    	const user = message.mentions.users.first();
		    // If we have a user mentioned
		    if (user) {
		    	// Now we get the member from the user
		    	const member = message.guild.member(user);
		      	// If the member is in the guild
		     	if (member) {
			     	/**
			         * Ban the member
			         * Make sure you run this on a member, not a user!
			         * There are big differences between a user and a member
			         * Read more about what ban options there are over at
			         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
			         */
			         member.ban({
			         	reason: 'They were bad!',
			         }).then(() => {
		            	// We let the message author know we were able to ban the person
		            	message.reply(`Successfully banned ${user.tag}`);
		          	}).catch(err => {
			            // An error happened
			            // This is generally due to the bot not being able to ban the member,
			            // either due to missing permissions or role hierarchy
			            message.reply('I was unable to ban the member');
			            // Log the error
			            console.error(err);
		          	});
		      	} else {
			        // The mentioned user isn't in this guild
			        message.reply("That user isn't in this guild!");
		      	}
		      } else {
		      	// Otherwise, if no user was mentioned
		      	message.reply("You didn't mention the user to ban!");
		      }
		  }
 	}
    if (command === 'help') {
        const embed = new Discord.MessageEmbed()
        .setTitle('Commands')
        .addField('General', `**${prefix}help - Shows this message.\n${prefix}random - Shows a random number from <Args> to <args 2>**`)
        .setColor(0xff0000);
        msg.channel.send(embed);
    }
    if (command === 'random') {
        if(!args[0]) return msg.reply("You didn't specify args 1")
        if(!args[1]) return msg.reply("You didn't specify args 2")
        msg.channel.send("Your random number is: " + Math.floor(Math.random() * args[1] + args[0]));
    }
    if (cmd === 'clear' || cmd === 'purge'){
        if(!msg.member.hasPermission("MANAGE_MESSAGES")) return msg.channel.send("You can't use this command!");
        if(!args[0]) return msg.channel.send("Specify how many messages you want to delete.");
        msg.delete();
        msg.channel.bulkDelete(args[0]).catch(e => { msg.channel.send("You can only delete 100 messages at once.")});
        msg.channel.send(`Successfully deleted \`${args[0]} messages\``).then(m => m.delete({ timeout: 5000 }));
    }
})
 
bot.login(token);