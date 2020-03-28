module.exports = {
	name: 'nikal',
    description: 'Tag a member and kick them.',
    guildOnly: true,
	execute(message) {
       // console.log( message.mentions.members.first());
		if (!message.mentions.users.size) {
			return message.reply('you need to tag a user in order to kick them!');
		}

       // const taggedUser = message.mentions.users.first();
       const taggedUser = message.mentions.members.first();
        
        taggedUser.kick().then((member)=>{
 
         message.channel.send("nikal lawde "+ member.displayName);
                             
        })
        .catch(err=>{
                         
        message.channel.send("Baap ko kick krega?");
        
        });

		//message.channel.send(`You wanted to kick: ${taggedUser.username}`);
	},
};
// const {prefix} = require('../config.json');

// module.exports={

//     name:'kick',
//     description:"kick member",
//     execute(message){
   
       

//             let member = message.mentions.members.first();
 
//              member.kick().then((member)=>{
 
//                  message.channel.send("nikal lawde "+ member.displayName);
                 
//              })
//              .catch(err=>{
             
//                  message.channel.send("Baap ko kick krega?");
//              });
             
         
         

//     }
// }