const translate = require('@iamtraction/google-translate');
const {Client, message, MessageEmbed} = require('discord.js');
const { randomInt } = require('mathjs');
const math = require('mathjs');
const { reset } = require('nodemon');

module.exports = {
    name: 'translate',
    aliases: [],
    utilisation: '{prefix}translate',
    
    async execute(client, message, args) {
        const avalible = ['af', 'ar', 'bg', 'bn', 'bs', 'ca', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'gu', 'hi', 'hr', 'hu', 'id', 'is', 'it', 'iw', 'ja', 'jw', 'km', 'kn', 'ko', 'la', 'lv', 'ml', 'mr', 'ms', 'my', 'ne', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'si', 'sk', 'sq', 'sr', 'su', 'sv', 'sw', 'ta', 'te', 'th', 'tl', 'tr', 'uk', 'ur', 'vi', 'zh-CN']
        const list = 'af, ar, bg, bn, bs, ca, cs, da, de, el, en, es, et, fi, fr, gu, hi, hr, hu, id, is, it, iw, ja, jw, km, kn, ko, la, lv, ml, mr, ms, my, ne, nl, no, pl, pt, ro, ru, si, sk, sq, sr, su, sv, sw, ta, te, th, tl, tr, uk, ur, vi, zh-CN';
        
        if (args[0] == 'list') return message.reply(list);
        const query = args.slice(1).join(" "); 
        if (!query) return message.reply('Indique um texto para ser traduzido')
        if (args[0] != 'hyper') {
            translate(query, {from: 'auto', to: args[0]}).then(res => {
                message.reply(res.text);
                return;
            }).catch(err => {
                console.error(err);
            });
        } 
        if (args[0] == 'hyper') {
            var hypertranslate = query;
            var replyed = false;
            const msg = await message.channel.send('processando (tempo estimado: 10s)...'); 
            t = 0;
             while(t < 20) {
                var tolang = avalible[math.randomInt(0, 30)]
                var translated = await translate(hypertranslate, {from: 'auto', to: tolang});
                    hypertranslate = translated.text;
                t ++;
            }
            var translated = await translate(hypertranslate, {from: 'auto', to: 'pt'});
            msg.edit(translated.text);
            return;
        }
    },
};