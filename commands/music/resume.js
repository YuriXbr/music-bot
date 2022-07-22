const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const embednmusic = new MessageEmbed()
    .setTitle('RESUME')
    .setColor('DARK_RED')
    .setDescription('❌ | Não existe musicas tocando.')

module.exports = {
    name: 'resume',
    aliases: ['rs', 'retomar'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send({embeds:[embednmusic]});

        const success = queue.setPaused(false);

        const embedsuccessful = new MessageEmbed()
        .setTitle('RESUME')
        .setColor(success ? 'GREEN' : 'DARK_RED')
        .setDescription(success ? ` ✅ | A musica tocando: ${queue.current.title} foi despausada.` : `❌ | Algo deu errado.`)
        
        message.channel.send({embeds:[embedsuccessful]});
        message.delete();
        return;
    },
};