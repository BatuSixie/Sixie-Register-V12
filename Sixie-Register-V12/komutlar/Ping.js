const Discord = require('discord.js');

exports.run = async (client, message, args,) => {
  const ping2 = new Discord.MessageEmbed()
  .setColor('0x36393E')
  .setDescription(`✅ Pingim : **${client.ws.ping}** Ms`)
  const ping = new Discord.MessageEmbed() 
  .setColor('0x36393E')
  .setDescription(`⏱️ Pingimi Ölçüyorum....`) 
  message.channel.send(ping).then(m => {
      setTimeout(() => {
          m.edit(ping2) 
      }, 5000); 
  })
  
      }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Gecikme süresini gösterir.',
  usage: '!ping'
};