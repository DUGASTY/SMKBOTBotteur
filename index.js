const Discord = require('discord.js');
const bot = new Discord.Client();


var prefix = ('/');

//JEU DU BOT 

    bot.on('ready', () => {
    bot.user.setPresence({ game: {name: 'Veiller sur les SMK', type: 0}})
    });

//LOG

    bot.login('MzkyNDE2NTQxODkyOTM1Njgz.DRsq3A.6GwsTJTcfF2I0aZ2dzKP8iR7DME');


//MESSAGE DESTINÉ AU BOT PAR LES UTILISATEURS 

    bot.on('message', (message) => {

        if(message.content == 'bonjour bot') {

            message.reply('Salut à toi ! Ravi que tu te soucie de moi, je sais en prendre bonne note !'); 
        }

        if(message.content == 'bonjour le botteur') {

            message.reply('Hey petit asticot !'); 
        }

        if(message.content == 'mention') {
            var AdminRole = message.channel.server.roles.get('name', 'Admin');
    
            //bot.sendMessage(message, AdminRole.mention() + 'is anyone here?');

            var adjoint_embed = new Discord.RichEmbed()
            .setColor('#E32416')
            .addField('Vous avez demandé un Administrateur du serveur, merci de patienter !', 'Vous pouvez déjà vous rendre dans le salon #Probleme_membre pour y exposer votre soucis !')
            .addField('Désolé pour la gêne que vous avez rencontré', 'Nous allons faire notre possible pour y remédier !')
            .setFooter('Merci de votre compréhension')
            message.channel.sendEmbed(adjoint_embed, AdminRole.mention()); 

//TEST POUR LE RANDNUM 

/*if(message.content == 'chiffre') {
    random();

    if (rand == 1) {
        message.reply('1');
    }

    if (rand == 2) {
        message.reply('2');
    }

    if (rand == 3) {
        message.reply('3');
    }

    if (rand == 4) {
        message.reply('4');
    }

    if (rand == 5) {
        message.reply('5');
    }

    if (rand == 61) {
        message.reply('6');
    }

    if (rand == 7) {
        message.reply('7');
    }

    if (rand == 81) {
        message.reply('8');
    }

    if (rand == 9) {
        message.reply('9');
    }

    if (rand == 10) {
        message.reply('10');
    }
}*/

//ADJOINT REQUEST TEST
bot.on('message', msg => {
    if(msg.content == 'mention') {
        var AdminRole = msg.channel.server.roles.get('name', 'Admin');

        // All of these three produce the same output
        // 1
        bot.sendMessage(msg, AdminRole.mention() + 'is anyone here?');
        // 2
        //bot.sendMessage(msg, hereRole.toString() + '' is anyone here?'');
        // 3
        //bot.sendMessage(msg, hereRole + ' is anyone here?');
    }
});






//ADJOINT REQUEST

     if(message.content == prefix + 'Adjoint') {
        var adjoint_embed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .addField('Vous avez demandé un Adjoint du clan', 'ne bougez pas, on va le faire venir !')
        message.channel.sendEmbed(adjoint_embed); 
        console.log('attente adjoint');
     }

//ADMIN REQUEST

     if(message.content == prefix + 'Admin') {
        var adjoint_embed = new Discord.RichEmbed()
            .setColor('#E32416')
            .addField('Vous avez demandé un Administrateur du serveur, merci de patienter !', 'Vous pouvez déjà vous rendre dans le salon #Probleme_membre pour y exposer votre soucis !')
            .addField('Désolé pour la gêne que vous avez rencontré', 'Nous allons faire notre possible pour y remédier !')
            .setFooter('Merci de votre compréhension')
        message.channel.sendEmbed(adjoint_embed); 
        console.log('attente admin');
     }

});


//MESSAGE DE BIENVENUE

    bot.on('guildMemberAdd', member => {
        let role = member.guild.roles.find('name', 'Membre');
        random();
        if(rand == 0){
            member.guild.channels.find('name', 'test-bot').send(':underage: Bienvenue ${member.user.username} Je suis ton ami, mais me fais pas trop chier non plus je reste un robot capricieux :smiling_imp: ');
        }

        if(rand == 1){
            member.guild.channels.find('name', 'test-bot').send(':nail_care:  Bienvenue ${member.user.username} Dis bonjour quand tu me croise, tu as interêt.. parce que je suis un fou moi, UN DÉGLINGO !!! je suis capable du pire... DU PIIIIIIRE !!!!!!  :baby_bottle:');
        }

        if(rand == 2){
            member.guild.channels.find('name', 'test-bot').send(':poop: WOOOOOOAAAAAAAAWWWWWW, classe ta collection de poupée russe gabonaise ${member.user.username} dis.... tu fais quoi mercredi prochain ? je fais un petit dîner entre amis.... :innocent: :innocent: :champagne_glass: ');
        }

        if(rand == 3){
            member.guild.channels.find('name', 'test-bot').send(':ambulance: Bienvenue ${member.user.username} met toi à ton aise, je répondrais au mieux à tes attentes... mais reste tranquil mon gars, je suis un simple robot mais je peux te mettre une belle volée !!! ...... bah quoi faut pas avoir peur... rhoo on peut plus rigoler jme casse ! :persevere:' );
        }

        if(rand == 4){
            member.guild.channels.find('name', 'test-bot').send(':grin: Mesdames et Messieurs les gens, veuillez accueillir comme il se doit ${member.user.username} YOUHOUUUUUUU :underage: :tropical_drink: :champagne: :beers: ');
        }

        if(rand == 5){
            member.guild.channels.find('name', 'test-bot').send(':tongue: Ouaaiiii de la chaire fraîche !!!! je peux jouer avec toi ? dis ${member.user.username} tu veux être mon ami ? dis oui :heart_eyes: :heart_eyes: stppp dis ouiiiii :heart_eyes: :innocent:');
        }

        member.addRole(role)
        
    });
  
    function random(min, max) {
        min = Math.ceil(0);
        max = Math.floor(5);
        rand = Math.floor(Math.random() * (max - min +1) + min);
    }
  
    

