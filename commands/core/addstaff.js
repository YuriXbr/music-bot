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
        if(args[2] >= '4' || args[2] <= '-1') return message.reply('Valor para staff invalido')
        if(!member)  return message.reply('Mencione um usuario')
        if(args[1] == '1') _dj = 'Ativo';
        if(args[1] == '0') _dj = 'Desativo';
        if(args[2] == '1') _stt = 'Moderador';
        if(args[2] == '2') _stt = 'Administrador';
        if(args[2] == '3') _stt = 'Owner';
        if(args[2] == '0') _stt = 'Membro';
        
        await connection.query(
            `INSERT IGNORE INTO staffid VALUES('${message.mentions.users.first().id}', '${args[1]}', '${args[2]}', null)`
        )

        await connection.query(
            `UPDATE staffid SET id = '${message.mentions.users.first().id}', dj = '${args[1]}', permissionlevel= '${args[2]}' WHERE id = '${message.mentions.users.first().id}'`
        )
        
       
        message.reply(`Usuario ${member} com os seguintes cargos: \n  DJ: ${_dj} \n  Staff Level: ${_stt}`);
    },
};