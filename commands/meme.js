const fetch = require('node-fetch')

module.exports = {
    name: 'meme',
    description: "Shows memes that might make you laugh!",
    async execute(message, args, Discord){
        fetch('https://meme-api.herokuapp.com/gimme')
            .then(res => res.json())
            .then(async json => {
                let msg = await message.channel.send("Getting visible laughs...");
                const memeEmbed = new Discord.MessageEmbed()
                .setTitle(json.title)
                .setImage(json.url)
                .setTimestamp()
                .setColor("RANDOM")
                .setFooter(`Link: ${json.postLink} | Subreddit: ${json.subreddit}`);
                msg.edit(memeEmbed);
            });
    }
}