module.exports = {
    name: 'help',
    description: 'This Command Shows All The Commands Registered and Coded into this Bot',
    execute(message, args, Discord){
        let exampleEmbed = new Discord.MessageEmbed()
        .setTitle("Commands")
        .setDescription("`n!help` - This Command Shows All The Commands Registered and Coded into this Bot\n`n!ping` - Shows the bot\'s Latency\n`n!test` - Test to see if the bot is working correctly\n`n!info` - Gives some info about this bot\n`n!ban [user]` - Bans a user from the guild/server **ATTENTION: THIS COMMAND ONLY WORKS IF THIS BOT HAS BAN PERMISSIONS AND WOULD ONLY WORK IF YOU HAVE ADMIN. I COULD ONLY BAN USERS BELOW MY ROLE. In an easier way, I cannot ban admins that have more permissions than this bot.**\n`n!kick [user]` - Kicks a user from the guild/server. **ATTENTION: THIS COMMAND ONLY WORKS IF THIS BOT HAS KICK PERMISSIONS AND WOULD WORK ONLY IF YOU HAVE ADMIN. THIS BOT COULD ONLY KICK USERS BELOW MY ROLE. In an easier way, I cannot kick admins that have more permissions than this bot.**\n`n!clear [num]` - Purges a specific amount of messages in a text channel\n`n!mute [user]` - Mutes a user in the guild/server **ATTENTION: Make sure you have a role called Member & Muted. If you do not, this command will not work properly**\n`n!unmute [user]` - Unmutes a user that has been muted. **ATTENTION: Make sure you have a role called Member & Muted. If you do not, this command will not work properly**\n`n!meme` - Shows memes that might make you laugh! :laughing: :rofl:\n`n!invites` - Shows how any invites somebody has!\n`n!avatar` - Shows you profile picture.\n`n!pfp` - Turns your profile picture into a link! \n`n!say [msg]` - Says a messages that a user states.\n`n!hello` - Bot says hi :D")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter("These are all the commands!")
        message.channel.send(exampleEmbed);
    }
}