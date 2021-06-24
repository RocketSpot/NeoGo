[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/RocketSpot/NeoGo)

![logo](https://cdn.discordapp.com/attachments/856961686786146334/857625889477885992/e1fffbe0de1c60a3edd251c3ce628a70.jpg)

# 🤖 NeoGo (Discord Utilities Bot)
> NeoGo is a Discord Utilities Bot built with discord.js & uses Command Handler from [discordjs.guide](https://discordjs.guide)

## Requirements

1. Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
2. Node.js v14.0.0 or newer

## 🚀 Getting Started

If deploying to Heroku make sure to create env variables

```
git clone https://github.com/RocketSpot/NeoGo.git
cd NeoGo
npm install
```

After installation finishes you can use `node index.js` to start the bot.

## 📝 Features & Commands

> Note: The default prefix is 'n!' and cannot be changed

* n!help - This Command Shows All The Commands Registered and Coded into this Bot
* n!ping - Shows the bot's Latency
* n!test - Test to see if the bot is working correctly
* n!info - Gives some info about this bot
* n!ban [user] - Bans a user from the guild/server (ATTENTION: THIS COMMAND ONLY WORKS IF THIS BOT HAS BAN PERMISSIONS AND WOULD ONLY WORK IF YOU HAVE ADMIN. I COULD ONLY BAN USERS BELOW MY ROLE. In an easier way, I cannot ban admins that have more permissions than this bot.)
* n!kick [user] - Kicks a user from the guild/server. (ATTENTION: THIS COMMAND ONLY WORKS IF THIS BOT HAS KICK PERMISSIONS AND WOULD WORK ONLY IF YOU HAVE ADMIN. THIS BOT COULD ONLY KICK USERS BELOW MY ROLE. In an easier way, I cannot kick admins that have more permissions than this bot.)
* n!clear [num] - Purges a specific amount of messages in a text channel
* n!mute [user] - Mutes a user in the guild/server (ATTENTION: Make sure you have a role called Member & Muted. If you do not, this command will not work properly)
* n!unmute [user] - Unmutes a user that has been muted. (ATTENTION: Make sure you have a role called Member & Muted. If you do not, this command will not work properly)
* n!meme - Shows memes that might make you laugh!
* n!invites - Shows how any invites somebody has!
* n!avatar - Shows you profile picture.
* n!pfp - Turns your profile picture into a link!
* n!say [msg] - Says a messages that a user states.
* n!hello - Bot says hi :D

## 🤝 Contributing

1. [Fork the repository](https://github.com/RocketSpot/NeoGo/fork)
2. Clone your fork: `git clone https://github.com/your-username/NeoGo.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request

## 📝 Credits

[@RocketSpot](https://github.com/RocketSpot) because he coded this whole entire bot.
