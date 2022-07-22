const { QueryType } = require('discord-player');
const { QueueRepeatMode } = require('discord-player');
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
    name: 'playlistbackup',
    aliases: [],
    utilisation: '{prefix}playlist [null/link]',
    voiceChannel: true,

    async execute(client, message, args) {
        const avalible = ['comunitaria', 'br', 'rock', 'relax', 'nightcore', 'lollapalooza', 'lofi', 'yuriplaylist', 'tigaplaylist', 'baguncinha', 'tudo1', 'tudo2', 'tudo3',];

        const list = {
            comunitaria: {
                name: 'Playlist Comunitaria',
                description: 'Playlist para jogar com tudo um pouco feito por geral',
                link: 'https://open.spotify.com/playlist/7DcajU2GUlLnEseGfw4dSf?si=3caa3c8dc618414a'
            },
            br: {
                name: 'Musica brasileira',
                description: 'Musicas classicas brasileiras dos anos 80, 90, 2000, e algumas outras aleatórias no meio, contando com estrelas como Tim Maia, Seu Jorge, Charlie Brown, Mamonas Assassinas, entre outros',
                link: 'https://open.spotify.com/playlist/6iQSp2kY6GvApf8KtBrF80?si=282b77497173442a'
            },
            rock: {
                name: 'Playlist de Rock Muito doida',
                description: 'Uma playlist com todo tipo de rock possivel, ROCK ROCK ROCK AND STONE',
                link: 'https://open.spotify.com/playlist/4Acq6YY3Tklm5ztMUemnkb'
            },
            relax: {
                name: 'Musicas para relaxar enquanto joga',
                description: 'Algumas musicas poprock, pop e jazz para jogar tranquilinho',
                link: 'https://open.spotify.com/playlist/6t9HKyDQeOMDDfGjY3MKaH?si=a7617b0e7f39423d'
            }, 
            nightcore: {
                name: 'Nightcore',
                description: 'Musicas Nightcore para agitar a noite',
                link: 'https://www.youtube.com/watch?v=TNQeAhs9biI&list=RDTNQeAhs9biI'
            },
            lollapalooza: {
                name: 'lollapalooza',
                description: 'Musicas do lollapalooza 2022 para agitar a noite',
                link: 'https://open.spotify.com/playlist/1mBudYlX2FkDuuz6S4A7io?si=915b6536ec2745f0'
            },
            lofi: {
                name: 'Lofiizn suave',
                description: 'lofi 24/7 :)',
                link: 'https://open.spotify.com/playlist/37i9dQZF1DWWQRwui0ExPn?si=cbf88962145f4b2d'
            },
            yuriplaylist: {
                name: 'Playlist do Yuri',
                description: 'Playlist doida do Yurão',
                link: 'https://www.youtube.com/watch?v=iWo8RIBFAeo&list=RDiWo8RIBFAeo'
            },
            tigaplaylist: {
                name: 'Playlist do Tiga',
                description: 'Playlist doida do Tiga',
                link: 'https://music.youtube.com/playlist?list=PLXzQQW5WVuSXbui0GjSPHl6e6vLsJYYYb&feature=share'

            },
            baguncinha: {
                name: 'Tudo um pouco',
                description: 'Tem um pouco de todos os generos musicais, mas é mais focado no trap',
                link: 'https://open.spotify.com/playlist/0JJXmdjYryX9vdkwyFFAdv?si=66fa2e9e55a94cf4'
            }
            };


        if (!avalible.includes(args[0]) || args[0] == 'list') return message.reply(`Você usou o comando do jeito errado burrão, tente assim: !playlist [${avalible}] (link/loop/desc)    -- [obrigatório] (opicional)`);
        if(args[0] == 'list') return message.reply(avalible);
        var loopmode = 0;
        var toplay = 'never gonna give you up';
       

        //playlists
        if(args[0] == 'br') toplay = list.br.link; 
        if(args[0] == 'rock') toplay = list.rock.link; 
        if(args[0] == 'relax') toplay = list.relax.link; 
        if(args[0] == 'lofi') toplay = list.lofi.link; 
        if(args[0] == 'yuriplaylist') toplay = list.yuriplaylist.link; 
        if(args[0] == 'tigaplaylist') toplay = list.tigaplaylist.link; 
        if(args[0] == 'nightcore') toplay = list.nightcore.link; 
        if(args[0] == 'baguncinha') toplay = list.baguncinha.link; 
        if(args[0] == 'lollapalooza') toplay = list.lollapalooza.link; 
        //opicionais
        if(args[1] == 'loop' ) loopmode == 2;
        if(args[1] == 'desc') {
            if(args[0] == 'br') return message.reply(`${list.br.description}`)
            if(args[0] == 'rock') return message.reply(`${list.rock.description}`)
            if(args[0] == 'relax') return message.reply(`${list.relax.description}`)
            if(args[0] == 'lofi') return message.reply(`${list.lofi.description}`)
            if(args[0] == 'yuriplaylist') return message.reply(`${list.yuriplaylist.description}`)
            if(args[0] == 'tigaplaylist') return message.reply(`${list.tigaplaylist.description}`)
            if(args[0] == 'nightcore') return message.reply(`${list.nightcore.description}`)
            if(args[0] == 'baguncinha') return message.reply(`${list.baguncinha.description}`)
            if(args[0] == 'lollapalooza') return message.reply(`${list.lollapalooza.description}`)
        }
        if(args[1] == 'link') return message.reply({content:`LINK: ${toplay} `, ephemeral: true});

        if (args[0] != 'tudo1' && 'tudo2' && 'tudo3') {tocar(toplay);} else {

            if(args[0] == 'tudo1') {
                const request = await player.search(list.br.link, {
                    requestedBy: message.member,
                    searchEngine: QueryType.AUTO
                });
                const cqueue = await player.createQueue(message.guild, {
                    QueueRepeatMode: 2,
                    metadata: message.channel
                });
                try {
                    if (!cqueue.connection) await cqueue.connect(message.member.voice.channel);
                } catch {
                    await player.deleteQueue(message.guild.id);
                }
                request.playlist ? cqueue.addTracks(request.tracks) : cqueue.addTrack(request.tracks[0]);
                if (!cqueue.playing) await cqueue.play();


                const request2 = await player.search(list.rock.link, {
                    requestedBy: message.member,
                    searchEngine: QueryType.AUTO
                });
                request2.playlist ? cqueue.addTracks(request2.tracks) : cqueue.addTrack(request.tracks[0]);

                const request3 = await player.search(list.relax.link, {
                    requestedBy: message.member,
                    searchEngine: QueryType.AUTO
                });
                request3.playlist ? cqueue.addTracks(request3.tracks) : cqueue.addTrack(request.tracks[0]);

                const crrmusicall = new MessageEmbed()
                .setColor('GOLD')
                .setTitle(`🎧 | Crregando TODAS playlists.`)
                return await message.channel.send({embeds:[crrmusicall]});
                
            }
        }
        
        if(args[0] == 'tudo2') {
            const request = await player.search(list.yuriplaylist.link, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });
            const cqueue = await player.createQueue(message.guild, {
                QueueRepeatMode: 2,
                metadata: message.channel
            });
            try {
                if (!cqueue.connection) await cqueue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
            }
            request.playlist ? cqueue.addTracks(request.tracks) : cqueue.addTrack(request.tracks[0]);
            if (!cqueue.playing) await cqueue.play();
    
            const request2 = await player.search(list.tigaplaylist.link, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });
            request2.playlist ? cqueue.addTracks(request2.tracks) : cqueue.addTrack(request.tracks[0]);
    
            const request3 = await player.search(list.lollapalooza.link, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });
            request3.playlist ? cqueue.addTracks(request3.tracks) : cqueue.addTrack(request.tracks[0]);
        }

        if(args[0] == 'tudo3') {
            const request = await player.search(list.lofi.link, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });
            const cqueue = await player.createQueue(message.guild, {
                QueueRepeatMode: 2,
                metadata: message.channel
            });
            try {
                if (!cqueue.connection) await cqueue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
            }
            request.playlist ? cqueue.addTracks(request.tracks) : cqueue.addTrack(request.tracks[0]);
            if (!cqueue.playing) await cqueue.play();

            const request2 = await player.search(list.nightcore.link, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });
            request2.playlist ? cqueue.addTracks(request2.tracks) : cqueue.addTrack(request.tracks[0]);

            const request3 = await player.search(list.baguncinha.link, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });
            request3.playlist ? cqueue.addTracks(request3.tracks) : cqueue.addTrack(request.tracks[0]);
        }
        
        async function tocar(toplay) {
            const res = await player.search(toplay, {
                requestedBy: message.member,
                searchEngine: QueryType.AUTO
            });

            if (!res || !res.tracks.length) return message.channel.send({embeds:[embednoresults]});
            const queue = await player.createQueue(message.guild, {
                QueueRepeatMode: loopmode,
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

            const crrmusic = new MessageEmbed()
                .setColor('GOLD')
                .setTitle(`🎧 | Crregando sua ${res.playlist ? 'playlist' : 'faixa'}.`)
                await message.channel.send({embeds:[crrmusic]});

            res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);
            if (!queue.playing) await queue.play();
            return;
        }
    },
};