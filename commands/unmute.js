const { RoleManager } = require("discord.js");

module.exports = {
    name: 'unmute',
    description: 'Unmutes a user on the server',
    execute(message, args, Discord, client){
        if(message.member.hasPermission("MANAGE_ROLES")){
            const target = message.mentions.users.first();
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been **unmuted**`);
            }
            else{
                message.channel.send("That member is not in this guild/server. Try again with a user that **is IN THIS GUILD/SERVER**");
            }
        }  
        else{
            message.channel.send("Either you or I do not have the permission `MANAGE_ROLES`. Add them so this command can work.")
        }  
    }
}