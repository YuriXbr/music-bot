const { QueryType } = require('discord-player');
const { discord } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const embedinvalidmusic = new MessageEmbed()
    .setTitle('PLAY')
    .setColor('DARK_RED')
    .setDescription('❌ | Insira uma musica valida. (é necessário escrever o nome/link da musica após o comando)')
const embednoresults = new MessageEmbed()
    .setTitle('PLAY')
    .setColor('DARK_RED')
    .setDescription('❌ | Sem Resultados para a busca especificada (tente colocar o nome do autor, ou remover virgulas e traços)')

module.exports = {
    name: 'play',
    aliases: ['p', 'tocar'],
    utilisation: '{prefix}play [musica/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send({embeds:[embedinvalidmusic]});
        
        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send({embeds:[embednoresults]});

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            const chnerr = new MessageEmbed()
            .setTitle('PLAY')
            .setColor('DARK_RED')
            .setTitle('❌ | PARECE QUE NÃO CONSIGO ENTRAR NESTE CANAL :/')
            return message.channel.send({embeds:[chnerr]});
        }

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing){
            await queue.shuffle();
            await queue.play();  
        } 
    },
};