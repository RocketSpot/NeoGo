module.exports = {
    name: 'kick',
    description: 'Kicks a user from the server',
    async execute(message, args, Discord, client){
        const member = message.mentions.users.first();
        if(message.member.hasPermission("KICK_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                const msg = await message.channel.send(`${member} has been **kicked** from the server!`);
                memberTarget.kick().catch(err => msg.edit(`${member} has admin permissions or a higher role than me. Therefore, I cannot kick that user/bot.`));
            }
            else{
                message.channel.send("That member is not in this guild/server. Try another user, **a user that is IN THIS GUILD/SERVER**");
            }
        }
        else{
            message.channel.send("Looks like you or I do not have enough permissions! Do you or I have the permissions `KICK_MEMBERS`? If not, make sure to add them!");
        }
    }
}