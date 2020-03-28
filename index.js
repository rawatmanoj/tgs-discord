const Discord = require('discord.js');
const {prefix,token} = require('./config.json');
const client = new Discord.Client();
//const guild = new Discord.GuildMember(client,data,guild);

client.once('ready',()=>{
console.log("ready");
})

// client.on("guildMemberAdd",(member)=>{
//     member.send("Namste");
//     let memberRole = member.guild.roles.find('name','Member');
//         member.addRole(memberRole);
// });

client.on('message',message=>{

    // if(message.member.hasPermission(['KICK_MEMBERS','BAN_MEMBERS'])){

        if(message.content.startsWith(`${prefix}nikal`)){

            let member = message.mentions.members.first();

            member.kick().then((member)=>{

                message.channel.send("nikal lawde "+ member.displayName);
                
            })
            .catch(err=>{
            
                message.channel.send("Baap ko kick krega?");
               //console.log(err);
            });
            
        
        }

        if(message.content.startsWith(`${prefix}hello`)){

            

          //message.member.send("Namaste");
           
        //   let memberRole = message.member.guild.roles.find('name','Member');
        //   message.member.addRole(memberRole);

        let role = message.member.guild.roles.cache.find(r => r.id == "692015624477737081");
       

      
          message.member.roles.add(role);
     
          //console.log(message.member.mentions);
      
        message.channel.send(`Hi ${message.member}, now you can use our gaming channels and mingle with others. Don't be shy to connect with our welcoming community :slight_smile:\nTake this place like your local tavern, a perfect place to simmer down, lay back and brag about those sweet headshots you just got :beers:`);
        }

   // }
})

client.login(token);