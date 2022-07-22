const { QueueRepeatMode } = require('discord-player');
const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const embednmusic = new MessageEmbed()
    .setTitle('CLEAR')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas tocando.')
    
// vvvvvvvvvvvvvvvvvvvvvvvvv
// EMBEDS EM DESENVOLVIMENTO
// ^^^^^^^^^^^^^^^^^^^^^^^^^

module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat', 'repetir'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send({embeds:[embednmusic]});

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`Você precisa primeiro desativar a modo de loop atual (${client.config.app.px}loop) ${message.author}. ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo de repitção: **${queue.repeatMode === 0 ? 'desativo' : 'ativo'}** A fila inteira sera repetida infinitamente 🔁` : `Algo deu errado ${message.author}. ❌`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`Você precisa rimeiro desativar a fila atual do loop (${client.config.app.px}loop queue) ${message.author}. ❌`);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Modo de repitção: **${queue.repeatMode === 0 ? 'desativo' : 'ativo'}** A musica atual sera repetida infinitamente (Você pode deixar a fila inteira em loop com a opção <queue>) 🔂` : `Algo deu errado ${message.author}. ❌`);
        };
    },
};