const Discord = require("discord.js")    //Sixie 
const client = new Discord.Client();      //Sixie 
const fs = require("fs");   //Sixie 
const jimp = require("jimp");    //Sixie 
const moment = require("moment"); //Sixie 
const express = require("express"); //Sixie 
const app = express();  //Sixie 
const ayarlar = require('./ayarlar.json') //Sixie 
const db = require('quick.db')          //Sixie 
require('./util/Loader.js')(client);    //Sixie 

client.commands = new Discord.Collection(); //Sixie 
client.aliases = new Discord.Collection(); //Sixie 
fs.readdir("./komutlar/", (err, files) => { //Sixie 
  if (err) console.error(err); //Sixie 
  console.log(`${files.length} komut yüklenecek.`); //Sixie 
  files.forEach(f => { //Sixie 
    let props = require(`./komutlar/${f}`); //Sixie 
    console.log(`Yüklenen komut: ${props.help.name}.`); //Sixie 
    client.commands.set(props.help.name, props); //Sixie  
    props.conf.aliases.forEach(alias => { //Sixie  
      client.aliases.set(alias, props.help.name); //Sixie 
    });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////Kayıt Mesajı

client.on("guildMemberAdd", async member => {
  let girişmesajsixie = db.fetch(`girişmesajı_${member.guild.id}`)
  client.channels.cache.get(girişmesajsixie).send(new Discord.MessageEmbed()
  .setFooter('Sixie Register Altyapısı')
  .setThumbnail(member.user.avatarURL())
  .setDescription(`**Birisi Sunucuya Ayak Bastı Hoşgeldin!**
  **${member} Sunucuda Bulunan Kurallar Kısmını Okumayı Unutma!**
  **<@&KAYITYETKİLİİD> Rolündeki Arkadaşlar Seninle İlgilenecektir.**
  **Sesli Odaya Girip Bekleyebilirsin!**
  **İyi Eğlenceler...**
  **Sevgilerimle Sixie**
  `)); //NOT: Bu Mesajı İstediğiniz Gibi Ayarlayabilirsiniz. !  Sixie ✘#0001
});

///////////////Kayıt Mesajı

client.login(ayarlar.token);