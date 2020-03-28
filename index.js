const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
const cooldowns = new Discord.Collection();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

     //console.log(commandName);

    if (!client.commands.has(commandName)) return;
    
    const command = client.commands.get(commandName);

    



    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    console.log(now);
    const timestamps = cooldowns.get(command.name);
    console.log(timestamps);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    console.log(cooldownAmount);

    
    if (timestamps.has(message.author.id)) {
        // ...
    }
    
	try {
       // console.log(command);
        // client.commands.get(command).execute(message, args);
        command.execute(message,args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);




















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