const Discord = require('discord.js');
const Client = require('discord.js');
const MessageEmbed = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    name: 'avatar',
    aliases: [''],
    utilisation: '{prefix}avatar',
        
        async execute(client, message, args) {
            let user = message.mentions.users.first();
            if (!user) user = message.author;
          
          let avatar = user.displayAvatarURL({size: 1024, dynamic: true})
        
          const embed = new Discord.MessageEmbed()
          .setTitle(`Avatar de ${user}`)
          .setImage(avatar)
          .setColor("BLACK")
          message.channel.send({ embeds: [embed]})
        
        
    },
};