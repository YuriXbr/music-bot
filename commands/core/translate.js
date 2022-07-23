const translate = require('@iamtraction/google-translate');
const {Client, message, MessageEmbed} = require('discord.js');
const { randomInt, number } = require('mathjs');
const math = require('mathjs');

module.exports = {
    name: 'translate',
    aliases: [],
    utilisation: '{prefix}translate',
    
    async execute(client, message, args) {
        const avalible = ['af', 'sq', 'am', 'ar', 'hy', 'az', 'eu', 'be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'co', 'hr', 'cs', 'da', 'nl', 'en', 'eo', 'et', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'gu', 'ht', 'ha', 'haw', 'he', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'kn', 'kk', 'km',, 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'ny', 'or', 'ps', 'fa', 'pl', 'pt', 'pa', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tl', 'tg', 'ta', 'tt', 'te', 'th', 'tr', 'uk', 'ur', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu']
        const list = 'af, sq, am, ar, hy, az, eu, be, bn, bs, bg, ca, ceb, co, hr, cs, da, nl, en, eo, et, fi, fr, fy, gl, ka, de, el, gu, ht, ha, haw, he, hi, hmn, hu, is, ig, id, ga, it, ja, kn, kk, km, ko, ku, ky, lo, la, lv, lt, lb, mk, mg, ms, ml, mt, mi, mr, mn, my, ne, no, ny, or, ps, fa, pl, pt, pa, ro, ru, sm, gd, sr, st, sn, sd, si, sk, sl, so, es, su, sw, sv, tl, tg, ta, tt, te, th, tr, uk, ur, uz, vi, cy, xh, yi, yo, zu';
        const _limit = avalible.length;

        if (args[0] == 'list') return message.reply(list);''
        if (args[0] != 'hyper') {
            const query = args.slice(1).join(" "); 
            if (!query) return message.reply('Indique um texto para ser traduzido')
            translate(query, {from: 'auto', to: args[0]}).then(res => {
                message.reply(res.text);
                return;
            }).catch(err => {
                console.error(err);
            });
        } 
        if (args[0] == 'hyper') {
            const query = args.slice(2).join(" "); 

            if (!isNaN(args[1])) {
                if(args[1] >= '501' || args[1] <= '0') return('valor invalido, deve ser maior que 0 e menor ou igual a 500')
                _qnt = args[1];
            } else return message.reply('Informe a quantia de numeros de traduções')

            if (!query) return message.reply('Indique um texto para ser traduzido')
            var hypertranslate = query;
            var replyed = false;
            const msg = await message.channel.send(`processando (tempo estimado: ${_qnt/2}s)...`); 
            t = 0;
             while(t < _qnt) {
                var num = math.randomInt(0, 103);
                var translated = await translate(hypertranslate, {from: 'auto', to: avalible[num]});
                    hypertranslate = translated.text;
                t ++;
                console.log(t);
            }
            var translated = await translate(hypertranslate, {from: 'auto', to: 'pt'});
            msg.edit(translated.text);
            return;
        }
    },
};