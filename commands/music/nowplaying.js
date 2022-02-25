const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np', 'tocandoagora'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'infinito' ? 'infinito (live)' : track.duration;

        embed.setDescription(`Volume **${queue.volume}**%\nDuração **${trackDuration}**\nModo de repetição: **${methods[queue.repeatMode]}**\nPedido de: ${track.requestedBy}`);

        embed.setTimestamp();
        embed.setFooter('A musica vem primeiro');

        const saveButton = new MessageButton();

        saveButton.setLabel('Salve esta musica');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};