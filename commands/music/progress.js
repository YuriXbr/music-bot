module.exports = {
    name: 'progress',
    aliases: ['pbar', 'progresso'],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinito') return message.channel.send(`O que esta tocando é uma live, não é possivel calcular o progresso. ❌`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};