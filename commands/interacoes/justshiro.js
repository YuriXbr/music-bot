const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const list = require('./listas/justshiro.json');
module.exports = {
    name: 'justshiro',
    aliases: ['js', '<3'],
    showHelp: false,
    utilisation: '{prefix}justshiro',
        async execute(client, message, args) {
            if (message.author.id == "755853297507631249" || message.author.id == "412752258665807872" || message.author.id == "300635904308150272" || message.author.id == "828679012079108107") return;
            
            if(message.author.id != "297905031171145751") {
                message.reply("você não tem o PODER para invocar a Shiro!")
                return;
            }
            var user = message.mentions.members.first();
            var randomgif = list[Math.floor(Math.random()*list.length)]
            
            if(!user) {
                const embed = new MessageEmbed()
                .setDescription(`É A SHIRO PORRA!`)
                .setColor('#ff66fc')
                .setImage(randomgif)
                message.channel.send({ embeds: [embed]})
                return;
            } else {
                const embed2 = new MessageEmbed()
                .setDescription(`${message.author} ESTA FALANDO PARA ${user} QUE É A SHIRO PORRA`)
                .setColor('#ff66fc')
                .setImage(randomgif)
                message.channel.send({ embeds: [embed2]})
                return;
            }

        },
    };