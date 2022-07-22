const chalk = require('chalk');
const c = chalk;
const earrow = c.magenta.bold('[ERROR]: ')
const alerta = c.yellowBright.bold;
const verde = c.greenBright;
const { Client, message, MessageEmbed, Guild, MessageActionRow, MessageButton } = require('discord.js');
const { inspect } = require('util');
client.config = require('../../config.js');
configchn = (client.config.app.errorsalert);

//Assets
const { QueryType } = require('discord-player');
const { QueueRepeatMode } = require('discord-player');
const prefix = client.config.app.px;
const DJ = client.config.opt.DJ;
const { readdirSync } = require('fs');
const { Collection } = require('discord.js');
const maxVol = client.config.opt.maxVol;
const ms = require('ms');
const { Snake } = require("discord-gamecord")




module.exports = {
    name: 'eval',
    aliases: [],
    utilisation: '{prefix}eval',
        
        async execute(client, message, args) { // eslint-disable-line no-unused-vars
            const queue = player.getQueue(message.guild.id); 

            if(message.author.id != "297905031171145751") return;

            const code = args.join(" ");
            if (!code) return message.reply("Você precisa inserir um código valido.");

            try{
                const result = await eval(code);
                output = result;
                if (typeof result !== "string") {
                    output = inspect(result);
                }
                
                const succ = new MessageEmbed()
                .setTitle('✔  |  Código executado com sucesso')
                .addField(`Código Solicitado: `, `${code}`)
                .addField('Rsponse Output:', `${output}`)
                .addField(`AUTOR`, `${message.author.id}`)
                .setColor('GREEN')
                .setTimestamp()

                message.channel.send({embeds:[succ]});

            } catch (error) {
                const embed = new MessageEmbed()
                .setTitle('❌  |  Ocorreu um problema na execução do código.')
                .addField(`ERRO: `,`${error}`)
                .addField(`Código Solicitado: `, `${code}`)
                .addField(`AUTOR`, `${message.author.id}`)
                .setColor('DARK_RED')
                .setTimestamp()
                console.log(earrow + c.redBright(error + c.cyan.italic("   <<<COMANDO: EVAL>>>   ")));
                message.reply({embeds:[embed]});
            }
        
        
        
        
        
    },
};