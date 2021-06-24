module.exports = {
    name: 'ban',
    description: 'Bans a user from the server',
    async execute(message, args, Discord, client){
        const member = message.mentions.users.first();
        if(message.member.hasPermission("BAN_MEMBERS")){
            const member = message.mentions.users.first();
            if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                const msg = await message.channel.send(`${member} has been **banned** from the server.`);
                memberTarget.ban().catch(err => msg.edit(`${member} has higher permissions than me. If that is not true, there might be an error.`));
            }
            else{
                message.channel.send("That member is not in this guild/server. Please try another user, **that is in the guild/server!**");
            }
        }
        else{
            message.channel.send("You couldn't ban :( Do you have the permissions `BAN_MEMBERS`? If not, you cannot run this command in this guild/server.");
        }
    }
}