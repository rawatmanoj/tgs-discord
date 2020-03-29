const {Utils} = require('erela.js');
const {RichEmbed} = require('discord.js');

module.exports = {
    config:{
	name: 'play',
    description:"play a song",
    category:"music",
    accessableby:"Members",
    aliases:["p","pplay"]
    },
    run: async (client,message,args)=>{

        console.log('5rfwefbefbeubbujbveuifgfvuefbue');
             
          const {voiceChannel} = message.member;
          if(!voiceChannel) return message.channel.send("voice channel mai aa");

          const permissions = voiceChannel.permissionsFor(client.user);
          if(!permissions.has("CONNECT")) return message.channel.send(" cant connect");
          if(!permissions.has("SPEAK")) return message.channel.send(" cant connect");

          if(!args[0]) return message.send("proide link");

          const player = bot.music.player.spawn({
              guild:message.guild,
              textChannel:message.channel,
              voiceChannel
          });

          client.music.search(args.join(" ").message.author).then(async res=>{
              switch (res.loadType){
                  case "TRACK_LOADED":
                  player.queue.add(res.tracks[0]);
                  message.channel.send(`Enqueing \`${res.tracks[0].title}\` \`${Utils.formatTime(res.tracks[0].duration,true)} `);
                  
                  if(!player.playing)player.play();
                      break;
                  
                      case "SEARCH_RESULT":
                          let index = 1;
                          const tracks = res.tracks.slice(0,5);
                          const embed = new RichEmbed()
                          .setAuthor("Song Selection",message.author.displayAvatarURL)
                          .setDescription(tracks.map(video => `**${index++} -** ${video.title}`))
                          .setFooter("your response time next 30 secs");

                          await message.channel.send(embed);

                          const collector = message.channel.createMessageCollector(m=>{
                              return m.author.id === message.author.id && new RegExp(`^([1-5]|cancel)$`,"i").test(m.content)
                          },{time:3000,max:1});

                          collector.on("collect",m=>{
                              if(/cancel/i.test(m.content)) return collector.stop("cancelled")

                              const track = tracks[Number(m.content) - 1];
                              player.queue.add(track)
                              message.channel.send(`Enqueing \`${track.title}\` \`${Utils.formatTime(track.duration,true)} `);
                              if(!player.playing) player.play();

                          });

                          collector.on("end",(_, reason)=>{
                              if(["time","cancelled"].includes(reason)) return message.channel.send("cancelled selection")
                          });
                          break;


                          case "PLAYLIST_LOADED":
                              res.playlist.tracks.forEach(track=>player.queue.add(track));
                              const duration = util.formatTime(res.playlist.tracks.reduce((acc,cur)=>({duration:acc.duration + cur.duration})).duration,true);
                              message.channel.send(`Enqueing \`${track.title}\` \`${Utils.formatTime(track.duration,true)} `);
                              if(!player.playing) player.play()
                              break;

              }
          }).catch(err=>message.channel.send(err.message))
    }
};