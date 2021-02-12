const fs = require('fs');
const Discord = require('discord.js');
const { ErelaClient, Utils } = require('erela.js');
const prefix = "_";
//const {  token } = require('./config.json');

const client = new Discord.Client();

//console.log(nodes);
const nodes = [
    {
        host: "localhost",
        port: 8333,
        password: "youshallnotpass",
    }
]

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');

    // client.music = new ErelaClient(client, nodes);

    // client.music.on("nodeConnect", () => console.log("created a new node"));
    // console.log("1");
    // client.music.on("nodeError", console.log);
    // console.log("2");
    // client.music.on("trackStart", ({ textChannel }, { title, duration }) => textChannel.send(`Now playing:**${title}** \` ${Utils.formatTime(duration, true)}\` `));
    // console.log("3");
    // client.music.on("queueEnd", player => {
    //     player.textChannel.send("Queue has ended")
    //     return client.music.players.destroy(player.guild.id);
    // });
    // console.log("4");

    // client.levels = new Map()
    //     .set("none", 0.0)
    //     .set("low", 0.10)
    //     .set("medium", 0.15)
    //     .set("high", 0.25);

    // process.on('uncaughtException', function (err) {
    //     console.log(err);
    // });

});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    //console.log(commandName);

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);


    try {
        // console.log(command);
        // client.commands.get(command).execute(message, args);
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


//music





client.login(process.env.TOKEN);




















// const fs = require('fs');
// const Discord = require('discord.js');
// const {prefix,token} = require('./config.json');

// const client = new Discord.Client();

// //const guild = new Discord.Guild(client);
// client.commands = new Discord.Collection();
// const cooldowns = new Discord.Collection();

// const commandFiles = fs.readdirSync('./commands').filter( file => file.endsWith('.js'));


// for(const file of commandFiles){

//   const command = require(`./commands/${file}`);
//   client.commands.set(command.name,command);

// }



// client.once('ready',()=>{
// console.log("ready");
// })

// //console.log(client.guilds.get(345973914108952578));


// //guild.members.fetch().then(member=>console.log(member)).catch(err=>console.log(err));

// client.on('message',message=>{
//     if (!message.content.startsWith(prefix) || message.author.bot) return;
//     console.log(message.guild.id);

//     // if(message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])){

//         if(message.content.startsWith(`${prefix}nikal`)){
//             client.commands.get('kick').execute(message);
//         }

//         if(message.content.startsWith(`${prefix}hello`)){
//       client.commands.get('assignRole').execute(message);
//         }



//    // }
// })

// client.login(token).catch(err=>console.log("change token"));