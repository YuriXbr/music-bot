const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [''],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}. ? ❌`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`o tempo indicado é maior que o tempo total da musica ${message.author}... Tente novamente ❌\n*Tente um tempo valido como **5s, 10s, 20 seconds, 1m**...*`);

        await queue.seek(timeToMS);

        message.channel.send(`o Tempo foi colocado em: **${ms(timeToMS, { long: true })}** ✅`);
    },
};