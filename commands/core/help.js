const Discord = require('discord.js');
const Client = require('discord.js');
const MessageEmbed = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');
const { pagination } = require('reconlx');

module.exports = {
    name: 'help',
    aliases: ['h', 'ajuda'],
    utilisation: '{prefix}help',

    async execute(client, message, args) {
        const pageone = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Utilidade')
        .addField('`help (ajuda)`', "Mostra os comandos")
        .addField('`ping (ms)`', "Mede o tempo de resposta do bot")
        .addField('`avatar`', "Mostra o avatar de alguem")
        .addField('**INFO:**', "Prefixo: !   |   Versão: 2.1.0   |   OpenSource ❌")
        .setFooter('')
        .setTimestamp()

        const pagetwo = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Interação')
        .addField('`attack (atacar)`', 'realiza um ataque de força maxima contra alguem')
        .addField('`dance (dançar, dança)`', 'dança com alguem')
        .addField('`headpat (cafune)`', 'faz cafuné em alguem')
        .addField('`hug (abraço)`', 'abraça alguem')
        .addField('`kiss (beijar)`', 'Beija alguem')
        .addField('`smile (sorrir)`', 'Sorri =)')
        .addField('`punch (socar)`', 'SOCA ALGUEM')
        .setFooter('')
        .setTimestamp()

        const pagethree = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Musica')
        .addField('`play`', 'Inicia a tocar uma musica ou playlist')
        .addField('`back`', 'Volta uma musica na lista de reprodução')
        .addField('`clear`', 'Limpa a fila de reprodução')
        .addField('`filter`', 'Ativa os filtros, escreva !filter help para ver os filtros')
        .addField('`loop`', 'ativa o loop, pode usar (queue ou track) para ativar o loop apenas em uma musica/fila')
        .addField('`nowplaying`', 'Mostra a musica que esta tocando no momento')
        .addField('`progress`', 'Mostra a barra de progresso da musica')
        .addField('`queue`', 'Mostra a fila de reprodução')
        .addField('`save`', 'Salva o titulo da musica')
        .addField('`resume`', 'Remove o pause da musica')
        .addField('`search`', 'Pesquisa algo')
        .addField('`seek`', 'vai para uma parte especifica da musica')
        .addField('`shuffle`', 'embaralha as musicas na fila')
        .addField('`skip`', 'Pula a musica que estiver tocando')
        .addField('`stop`', 'Para as musicas e limpa a fila de reprodução')
        .addField('`volume`', 'Altera o Volume entre 1 e 100')
        .setFooter('')
        .setTimestamp()

        const pagefour = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Moderação')
        .addField('`Em Breve`', 'Em Desenvolvimento')
        .setFooter('')
        .setTimestamp()

        const pagefive = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Administrativo')
        .addField('`Em Breve`', 'Em Desenvolvimento')
        .setFooter('')
        .setTimestamp()

        const pagesix = new Discord.MessageEmbed()
        .setColor('#ff66fc')
        .setTitle('@#$# ノー ERROR 404 ゲー @#$$@#')
        .addField('`incoming message.... unknown sender`', 'a Dis$oa@$ surprise ...')
        .setFooter('')
        .setTimestamp()
        
        const embedlist = [pageone, pagetwo, pagethree, pagefour, pagefive, pagesix];
        const embedlist2 = [pageone, pagetwo, pagethree, pagefour, pagefive, ];

        if (message.author.id == "755853297507631249" || message.author.id == "412752258665807872" || message.author.id == "300635904308150272" || message.author.id == "828679012079108107" || message.guild.id == "627565386119905290") {
            pagination({
                embeds: embedlist2,
                channel: message.channel,
                author: message.author,
                time: 120000
            })
        } else {
            pagination({
                embeds: embedlist,
                channel: message.channel,
                author: message.author,
                time: 120000,
                fastSkip: true,
                pageTravel: true,
                button: [
                    {
                     name: 'first',
                     emoji: '',
                     style: 'SUCCESS'
                    },
                    {
                        name: 'next',
                        emoji: '',
                        style: 'SUCCESS'
                    },
                    {
                        name: 'previous',
                        emoji: '',
                        style: 'SUCCESS'
                    },
                    {
                        name: 'previous',
                        emoji: '',
                        style: 'SUCCESS'
                    },
                    {
                        name: 'last',
                        emoji: '',
                        style: 'SUCCESS'
                    }

                ]
            })
        }
    },
};