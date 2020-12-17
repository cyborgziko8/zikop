const Discord = require('discord.js')
const bot = new Discord.Client();
var prefix = "=";
const fs = require('fs')
bot.commands = new Discord.Collection()

const config = require('./config.json');


fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);
    console.log('${files.length}commands');
    let jsfile = files.filter(f =>f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log('Commands Not Found');
        return;
    }
})

bot.on('ready', function() {
    console.log("I am ready")
})

bot.on('message', async message => {


    bot.emit('checkMessage'. message);

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0]
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    if(commandFile) commandsFile.run(bot, message, args, Args)


    if(message.content === prefix + "cyborg"){
        message.reply("This Person Is So Good")
    }
    if(message.content === prefix + "info"){
        message.reply("New Server I Also New Bot Ok")
    }
})

  

bot.login(process.env.TOKEN)