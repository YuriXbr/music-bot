const Discord = require('discord.js');
const Client = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
require('dotenv').config();

module.exports = {
    name: 'addstaff',
    aliases: [''],
    utilisation: '{prefix}addstaf',

        async execute(client, message, args) {

            member = message.mentions.users.first();
        if(message.author.id != '297905031171145751') return;
        connection = await require('../../database/db');
        if(!args[0]) return message.reply('insira o usuario para ser promovido');
        if(args[1] != '1' && args[1] != '0') return message.reply('Valor para DJ invalido');
        if(args[2] >= '4' || args[2] <= '0') return message.reply('Valor para staff invalido')
        if(!member)  return message.reply('Mencione um usuario')

        
        await connection.query(
            `INSERT IGNORE INTO staffid VALUES('${message.mentions.users.first().id}', '${args[1]}', '${args[2]}', null)`
        )

        await connection.query(
            `UPDATE staffid SET id = '${message.mentions.users.first().id}', dj = '${args[1]}', permissionlevel= '${args[2]}' WHERE id = '${message.mentions.users.first().id}'`
        )
        

        
        
        
    },
};