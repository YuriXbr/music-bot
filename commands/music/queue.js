const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q', 'fila', 'lista'],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        if (!queue.tracks[0]) return message.channel.send(`Esta é a unica musica tocando ❌`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('Blue');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`Fila de reprodução de: - ${message.guild.name} ${methods[queue.repeatMode]}`);

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (Pedido por : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `e **${songs - 5}** outras musicas...` : `Na fila: **${songs}** musicas`;

        embed.setDescription(`Atualmente ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('A musica vem primeiro');

        message.channel.send({ embeds: [embed] });
    },
};