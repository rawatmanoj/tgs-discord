const fs = require('fs');
const Discord = require('discord.js');
const { ErelaClient, Utils } = require('erela.js');
require('dotenv').config();
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


client.once('ready', () => {
    console.log('Ready!');
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