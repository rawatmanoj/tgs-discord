const {prefix} = require('../config.json');

module.exports={

    name:'hello',
    description:"assigning role",
    execute(message){
   
   

        let role = message.member.guild.roles.cache.find(r => r.id == "692015624477737081");
       
        message.member.roles.add(role);
    
        message.channel.send(`Hi ${message.member}, now you can use our gaming channels and mingle with others. Don't be shy to connect with our welcoming community :slight_smile:\nTake this place like your local tavern, a perfect place to simmer down, lay back and brag about those sweet headshots you just got :beers:`);

        

    }
}
