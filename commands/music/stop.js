module.exports = {
    name: 'stop',
    aliases: ['dc', 'disconnect', 'desconectar', 'sair'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        queue.destroy();

        message.channel.send(`A musica foi parada, até a proxima :) ✅`);
    },
};