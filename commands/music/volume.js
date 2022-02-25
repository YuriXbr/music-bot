const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`Não tem musicas tocando ${message.author}, tente novamente ❌`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`O volume atual é ${queue.volume} 🔊\n*Você pode alterar o volume entre **1** e **${maxVol}**.*`);

        if (queue.volume === vol) return message.channel.send(`Este já é o volume atual ${message.author}. ❌`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`O volume atual não é valido, coloque algo entre **1** e **${maxVol}** ${message.author}. ❌`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `O volume foi colocado em **${vol}**/**${maxVol}**% 🔊` : `algo deu errado ${message.author}. ❌`);
    },
};