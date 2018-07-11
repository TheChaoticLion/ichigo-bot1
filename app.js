const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = 'process.env.BOT_TOKEN';
const PREFIX = '/';
bot.on('ready', () => {
    console.log('Ready')

bot.user.setStatus('Online')

bot.user.setGame('with A Sibling | /help')

//bot.user.setGame('with My Darling~ <3', 'https://www.twitch.tv/thechaoticlion');

});

bot.on('message', function(message) {

    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "info":
            message.channel.sendMessage('Best Darling In The Franxx bot by TheChaoticLion');
            break;
        case "ping":
            message.channel.sendMessage("Pong!")
            break;
        //to be determined on what to do with this
        // https://discord.js.org/#/docs/main/stable/class/RichEmbed?scrollTo=image
        case "embed":
            var embed = new Discord.RichEmbed()
                .setDescription(" ")
            message.channel.sendEmbed(embed);
            break;
        case "play":
            message.channel.sendMessage('sure whatever');
            break;
        case "rundown":
            message.channel.sendMessage("you know what it means bro? you know what it means?")
            break;
        case "summon":
            message.channel.sendMessage("on my way!")
            break;
            case "help":
            message.channel.sendMessage("here!")
            break;
        case "queue":
        message.channel.sendMessage("Tada!")
            break;
        case "np":
            message.channel.sendMessage("Tada!")
            break;
        case "skip":
            message.channel.sendMessage("on it!")
            break;
        case "skip f":
            message.channel.sendMessage("i'll do it for you!")
            break;
        case "search":
            message.channel.sendMessage("hmmmm")
            break;
        case "Shuffle":
            message.channel.sendMessage("here you go!")
            break;
        case "clear":
            message.channel.sendMessage("Cleaning!")
            break;
        case "pause":
            message.channel.sendMessage("stoppin")
            break;
        case "resume":
            message.channel.sendMessage("gatcha")
            break;
        case "volume":
            message.channel.sendMessage("higher!")
            break;
        case "clean":
            message.channel.sendMessage("on it!")
            break;
        case "karaoke":
            message.channel.sendMessage("Lets Sing!")
            break;
        case "disconnect":
            message.channel.sendMessage("bye! bye!")
            break;
        case "remove":
            message.channel.sendMessage("okay!")
            break;
        case "quere":
            message.channel.sendMessage("heres's the list!")
            break; 
        default:
            message.channel.sendMessage("Invalid command");
    }
});

bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    //if (message.content == 'Zero Two') {
       // message.channel.sendMessage('Darling!');
    //}
});
bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;

    if (message.content == 'lemmie give you the rundown of finna nut') {
        message.channel.sendMessage('you know what it means bro? you know what it means?');
    }
});


bot.login(TOKEN);
