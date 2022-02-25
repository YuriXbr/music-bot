const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const list = require('./listas/listhug.json');
module.exports = {
    name: 'hug',
    aliases: ['abracar', 'abraçar', 'abraco', 'abraço'],
    utilisation: '{prefix}hug',
        async execute(client, message, args) {
            if (message.author.id == "755853297507631249" || message.author.id == "412752258665807872" || message.author.id == "300635904308150272" || message.author.id == "828679012079108107") {
                message.reply("Em Desenvolvimento"); 
                return;
            }
            var user = message.mentions.members.first();
            if(!user) { message.reply("mencione alguem."); return; }
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            var colors = [
                0xffffff,
                0x000000,
                0x0000ff,
                0xff0000,
                0x7a7a7a,
                0x00ffff,
                0xffd700,
                0x4b0082
            ]
            var randomgif = list[Math.floor(Math.random()*list.length)]
            
                const embed = new MessageEmbed()
                .setDescription(`${message.author} abraçou ${user}`)
                .setColor(colors[Math.floor(Math.random() * colors.length)])
                .setImage(randomgif)
                message.channel.send({ embeds: [embed]})

        },
    };