const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const embednmusic = new MessageEmbed()
    .setTitle('PAUSE')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas tocando.')

module.exports = {
    name: 'pause',
    aliases: ['pausar'],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send({embeds:[embednmusic]});

        const success = queue.setPaused(true);

        const embedsuccessful = new MessageEmbed()
        .setTitle('PAUSE')
        .setColor(success ? 'GREEN' : 'DARK_RED')
        .setDescription(success ? ` ✅ | A musica tocando: ${queue.current.title} foi pausada.` : `❌ | Algo deu errado.`)
        
        message.channel.send({embeds:[embedsuccessful]});
        message.delete();
        return;
    },
};