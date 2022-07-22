const Discord = require('discord.js');
const Client = require('discord.js');
const { MessageEmbed } = require('discord.js');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'test',
    aliases: ['t'],
    utilisation: '{prefix}teste',
        
        async execute(client, message, args) {
            

       dead = false;
       vidadecay = false;
       vida = 1000;
       fome = 500;
       diversao = 1000;
       energia = 1000;
       vidabarra = "[❤❤❤❤]";
       fomebarra = "[🍗🍗🍗🍗]";
       diversaobarra = "[🤣🤣🤣🤣]";
       energiabarra = "[🔋🔋🔋🔋🔋]";
            

            
       if (vida <= "750") vidabarra = "[❤❤❤-]"
       if (vida <= "500") vidabarra = "[❤❤--]"
       if (vida <= "250") vidabarra = "[❤---]"
       
       if (fome <= "750") fomebarra = "[🍗🍗🍗-]"
       if (fome <= "500") fomebarra = "[🍗🍗--]"
       if (fome <= "250") fomebarra = "[🍗---]"
       


       if (diversao <= "750") diversaobarra = "[🤣🤣🤣-]"
       if (diversao <= "500") diversaobarra = "[🤣🤣--]"
       if (diversao <= "250") diversaobarra = "[🤣---]"

       if (energia <= "750") energiabarra = "[🔋🔋🔋-]"
       if (energia <= "500") energiabarra = "[🔋🔋--]"
       if (energia <= "250") energiabarra = "[🔋---]"
       
    
        if(dead == false) {
            fome--;
        }
            if (fome <= "0") vidadecay = true;
            console.log(`${fome}`);
            
            if(dead == false && vidadecay == true) {
                vida--;
                console.log(`${fome} -- ${vida}`);
            }
            if(vida <= 0) dead = true;
            console.log('morreu')
        


        const MENU = new  MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('ircozinha')
            //.setLabel('IR DAR UMA COMIDA')
            .setEmoji('🍴')
            .setStyle('PRIMARY'),
            new MessageButton()
            .setCustomId('irlab')
            //.setLabel('IR PRO LABORATÓRIO')
            .setEmoji('🧪')
            .setStyle('PRIMARY'),
            new MessageButton()
            .setCustomId('irjogos')
            //.setLabel('JOGOS DIVERTIDOS')
            .setEmoji('🎈')
            .setStyle('PRIMARY'),
            new MessageButton()
            .setCustomId('ircama')
            //.setLabel('TIRAR UMA SONEQUINHA')
            .setEmoji('😴')
            .setStyle('PRIMARY')
        );        
        const VOLTAR = new  MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('voltar')
            .setEmoji('◀')
            .setStyle('SECONDARY')
        )

        const barraembed = new MessageEmbed()
        .setTitle('BARRAS')
        .addField('bara de vida:',`${vidabarra}`)
        .addField('barra de fome:', `${fomebarra}`)
        .addField('barra de diversão:', `${diversaobarra}`)
        .addField('barra de energia:', `${energiabarra}`)

        const principalembed = new MessageEmbed()
        .setTitle('POU GAME')
        .setImage('https://play-lh.googleusercontent.com/xToRFw-mqA18HtizgutV0K1IouakfR8iJ3PW75u-1n1oxbP7hVfBMlgHWIwuUYKKS_s=s180-rw')
        

        const morteembed = new MessageEmbed()
        .setTitle('POU MORREU!!!')
        .setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGMKuzSDQcPlbvpwFUAyGTn81lfhTfEMC7Q&usqp=CAU')
        
        const cozinhaembed = new MessageEmbed()
        .setTitle('POU GAME')
        .setDescription('Alimente seu Pou:')
        .setImage('https://play-lh.googleusercontent.com/xToRFw-mqA18HtizgutV0K1IouakfR8iJ3PW75u-1n1oxbP7hVfBMlgHWIwuUYKKS_s=s180-rw')
        .addField('barra de fome:', `${fomebarra}`)
        .addField('valor da fome:', `${fome}`)
        
        const labembed = new MessageEmbed()
        .setTitle('POU GAME')
        .setImage('https://play-lh.googleusercontent.com/xToRFw-mqA18HtizgutV0K1IouakfR8iJ3PW75u-1n1oxbP7hVfBMlgHWIwuUYKKS_s=s180-rw')
        const jogosembed = new MessageEmbed()
        .setTitle('POU GAME')
        .setImage('https://play-lh.googleusercontent.com/xToRFw-mqA18HtizgutV0K1IouakfR8iJ3PW75u-1n1oxbP7hVfBMlgHWIwuUYKKS_s=s180-rw')
        const camaembed = new MessageEmbed()
        .setTitle('POU GAME')
        .setImage('https://play-lh.googleusercontent.com/xToRFw-mqA18HtizgutV0K1IouakfR8iJ3PW75u-1n1oxbP7hVfBMlgHWIwuUYKKS_s=s180-rw')

        const barras = await message.channel.send({embeds:[barraembed]});
        await message.channel.send({ embeds: [principalembed], components: [MENU]});



            const filtro = i => i.customId != '' && i.user.id === message.author.id;
            const collector = message.channel.createMessageComponentCollector({
                filtro,
                //max: 2,
            });


            collector.on('collect', async i => {
                if (i.customId === 'voltar') {
                    await i.update({embeds: [principalembed], components: [MENU]});

                }
                if (i.customId === 'ircozinha') {
                    await i.update({ embeds: [cozinhaembed], components: [VOLTAR, MENU] });


                }
                if (i.customId === 'irlab') {
                    await i.update({ embeds: [labembed], components: [VOLTAR, MENU] });


                }
                if (i.customId === 'irjogos') {
                    await i.update({ embeds: [morteembed], components: [VOLTAR, MENU] });


                }
                if (i.customId === 'ircama') {
                    await i.update({ embeds: [camaembed], components: [VOLTAR, MENU] });


                }

                
            });

            




            
            collector.on('end', (collected) => { 
                console.log(`Collected ${collected.size} items`)
                row.components[0].setDisabled(true)
            });


            
            
        

        
    },
    
};