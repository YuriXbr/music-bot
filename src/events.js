const chalk = require('chalk');
const c = chalk;
const alerta = c.yellowBright.bold;
const verde = c.greenBright;
const perr = c.redBright.bold('[PLAYER ERROR]: ');
const psuss = c.cyanBright.bold('[PLAYER LOG]: ')
const palert = c.yellow.bold('[PLAYER ALERT:]: ')
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const fs = require('fs');
const { traceDeprecation } = require('process');
var today = new Date();
var data = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();


var logger = fs.createWriteStream('./logs/log.txt', {
    flags: 'a'
})

player.on('error', (queue, error) => {
    if (error.message === '[DestroyedQueue] Cannot use destroyed queue') return;
    const erro = new MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('❌ | OCORRU UM ERRO, POR MOTIVOS DE SEGURANÇA A FILA FOI PAUSADA')
            .setDescription(`${error}`)
            .addField('queueError', `${error.message}`)
            .setTimestamp()
    queue.metadata.send({embeds:[erro]});
    console.log(perr + alerta(`ERRO --> `) + verde.bold(`${error.message}`));
    logger.write(`<<---------------- NEW ERROR ----------------->>\n`);
    logger.write(`>> ERROR TRIGGER:  player.on  error\n`);
    logger.write(`>> ERROR CHANNEL:  ${queue.connection.channel.name}\n`)
    logger.write(`>> ERROR MESSAGE:  ${error.message}\n`);
    logger.write(`>> ERROR GENERAL:  ${error}\n`)
    logger.write(`\n`)
    queue.setPaused(true);
});

player.on('connectionError', (queue, error) => {
    const erro = new MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('❌ | OCORRU UM ERRO, POR MOTIVOS DE SEGURANÇA A FILA FOI PAUSADA')
            .setDescription(`${error}`)
            .addField('connectionError', `${error.message}`)
            .setTimestamp()
    queue.metadata.send({embeds:[erro]});
    console.log(perr+ alerta(`ERRO --> `) + verde(`${error.message}`));
    logger.write(`<<---------------- NEW ERROR ----------------->>\n`);
    logger.write(`>> ERROR TRIGGER:  player.on connection error\n`);
    logger.write(`>> ERROR CHANNEL:  ${queue.connection.channel.name}\n`)
    logger.write(`>> ERROR MESSAGE:  ${error.message}\n`);
    logger.write(`>> ERROR GENERAL:  ${error}\n`)
    logger.write(`\n`)
});

    player.on('trackStart', (queue, track) => {
        if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
        const trackStart = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`🎧 | Tocando agora ${track.title} em **${queue.connection.channel.name}**`)
        //queue.metadata.send({embeds:[trackStart]})
    console.log(psuss + alerta(`Tocando agora `) + verde.italic(`${track.title} `) + alerta(`em `) + verde.bold(`${queue.connection.channel.name}.`));
    logger.write(`${data} INFO: [TrackStart] Musica ${track} começou a tocar no canal ${queue.connection.channel.name}\n`);
});

player.on('trackAdd', (queue, track) => {
    const trackAdd = new MessageEmbed()
            .setColor('GREEN')
            .setTitle(`✅ | A musica **${track.title}** foi adicionada a fila`)
            queue.metadata.send({embeds:[trackAdd]});
    console.log(psuss + alerta(`A musica `) + verde.italic(`${track.title} `) + alerta(`foi adicionada a fila.`));
    logger.write(`${data} INFO: [TrackAdd] musica ${track.title} foi adicionada na fila\n`);    
});

player.on('botDisconnect', (queue) => {
    const botDisconnect = new MessageEmbed()
            .setColor('RED')
            .setTitle(`❌ | Fui desconectado do canal, limpando a fila.`)
            queue.metadata.send({embeds:[botDisconnect]});
    console.log(palert + alerta('Fui desconectado do canal, limpando a fila.'));
    logger.write(`${data} INFO: [botDisconnect] O BOT FOI DESCONECTADO.\n`);    
});

player.on('channelEmpty', (queue) => {
    const channelEmpty = new MessageEmbed()
            .setColor('RED')
            .setTitle(`❌ | O canal esta vazio, saindo`)
            queue.metadata.send({embeds:[channelEmpty]});
    console.log(palert + alerta('O canal esta vazio, saindo'));
    logger.write(`${data} INFO: [ChannelEmpty] O CANAL ${queue.connection.chnnael.name} ESTAVA VAZIO, O BOT FOI DESOCNECTADO\n`);    
});

player.on('queueEnd', (queue) => {
    console.log(psuss + alerta('Fila finalizada'));
    logger.write(`${data} INFO: [QueueEnd] FILA FINALIZADA PELO USUARIO.\n`);    
});