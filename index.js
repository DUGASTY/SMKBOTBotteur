const Discord = require('discord.js');
const bot = new Discord.Client();

//var getRandomIntInclusive = getRandomIntInclusive();

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
        let role = member.guild.roles.find('name', 'test-bot');

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
        //member.guild.channels.find('name', 'general').send(':underage: Bienvenue ${member.user.username} Je suis ton ami, mais me fais pas trop chier non plus je reste un robot capricieux :smiling_imp: ')
    });

    function generateRandomNumber (){
        var rand = Math.floor(Math.random() * 5) + 1 ;
        return rand;
    }


    //var getRandom = 
       /* function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min +1)) + min;
      }*/

    