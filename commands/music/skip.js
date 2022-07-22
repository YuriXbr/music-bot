const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'skip',
    aliases: ['sk', 'pular', 'proximo', 'next'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const success = queue.skip();

        const sussembed = new MessageEmbed()
            .setTitle('SKIP')
            .setColor('DARK_BLUE')
            .setTitle(`✅ | A musica ${queue.current.title} foi pulada`)
        const errorembed = new MessageEmbed()
            .setTitle('SKIP')
            .setColor('DARK_RED')
            .setTitle('❌ | ALGO DEU ERRADO')
        return message.channel.send(success ? {embeds: [sussembed]} : {embeds: [errorembed]});
    },
};