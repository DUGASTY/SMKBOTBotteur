const Discord = require('discord.js');
const bot = new Discord.Client();
const chalk = require('chalk');

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


    //CLEAR CHAT

    let cont = message.content.slice(prefix.length).split(' ');
    let args = const.slice(1);

    if(message.startWith(prefix + 'Suppr')) {

        async function purge() {
            message.delete();

        if(!message.member.roles.find('name', 'Admin')) {
            message.channel.send('Seul les \`Admin\` ont le droit de clear le Chat !');
            return;
        }

        if(isNaN(args[0])){
            message.channel.send('Si tu me dis pas combien de messages... je risque pas de t`aider mon petit pote !')
        }

            const fetched = await message.channel.fetchMessage({limit: args[0]});

            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`));
        }

    purge();
    }


//REGLES 
if(message.content == prefix + 'regles00') {
    var regles00_embed = new Discord.RichEmbed()
    .setTitle('__**Bienvenue sur le serveur SMK Sniper`s, voici les quelques règles à connaître !**__ ')
    .setColor('#0033cc')
    .addBlankField(true)
    .addField('Pas de pubs pour d`autres clans ou team', 'Possibilité d`invité des joueurs non presents dans le clan')
    .addField('Lisez le descriptif de chaque salon et vérifiez que vous êtes dans le bon en postant', 'Sinon un moderateur vous mettra le bon salon ou poster avec #general par exemple')
    .addField('N`utilisez la mention @ everyvone que si nécessaire', 'privilegiez @Adjoint, @Admin ou @joueurConcerné')
    .addField('Le serveur Discord est un endroit publique, on évite ainsi tout ce qui est :', '```Troll / Flamming / Spamming / Flood / Insultes / Menaces \nPropos racistes / Sexistes / Politiques / Violent \nHacking / Cracking / Fishing...```')
    message.channel.sendEmbed(regles00_embed); 
}    
   
if(message.content == prefix + 'regles01') {
    var regles01_embed = new Discord.RichEmbed()
    .setTitle('__**INDEX**__')
    .setDescription('**NOS SALONS / CHANNELS**')
    //.addBlankField(true)
    .setColor('#0033cc')
    message.channel.sendEmbed(regles01_embed); 
}


        
 if(message.content == prefix + 'regles02') {
    var regles02_embed = new Discord.RichEmbed()
    .setDescription('**GENERAL**')
    .setColor('#0033cc')
    .addField('#general', 'Tout le flux qui ne demande pas de salon approprié doit passer par là !')
    .addField('#regles_discord', 'Récapitule le tout')
    .addField('#regles', 'Récapitule les règles en vigueurs dans le clan SMK sur COC uniquement !')
    .addField('#nouveautes_coc', 'Annonce les news COC, notamment avec les vidéos Clash Of Clans Officiel ou Lordval, ainsi que vos trouvailles personnels')
    .setFooter('Le salon VOCAL General est libre à tous', 'https://www.cjoint.com/doc/17_12/GLCt7Rw32yM_microphone-2104091-640.png')
    message.channel.sendEmbed(regles02_embed); 
 }    

 if(message.content == prefix + 'regles03') {
    var regles03_embed = new Discord.RichEmbed()
    .setDescription('**STAFF**')
    .setColor('#0033cc')
    .addField('#probleme_membre','Si vous rencontrez un soucis sur le serveur Discord, dans le clan sur COC, ou un soucis personnel')
    .addField('#probleme_avec_un_membre','Problème direct ou indirect avec un autre membre de la team, quel qu`il soit !')
    .addField('#table_ronde','Channel privé réservé au STAFF du clan')
    .addField('#admin','Channel privé réservé au STAFF du serveur Discord')
    .addField('#test-bot','Salon d`étude du petit monstre')
    .setFooter('Le Salon VOCAL Réunion Adjoint est réservé aux adjoints du clan', 'https://www.cjoint.com/doc/17_12/GLCt7Rw32yM_microphone-2104091-640.png')
    message.channel.sendEmbed(regles03_embed); 
 }    

 if(message.content == prefix + 'regles04') {
    var regles04_embed = new Discord.RichEmbed()
    .setDescription('**GDC**')
    .setColor('#0033cc')
    .addField('#strat_gdc','Salon réservé au Chef de Guerre pour y déployer sa stratégie du jour')
    .addField('#demandes_gdc','Channel de posts de demandes pour la guerre')
    .addField('#discussion_cibles_gdc','Afin de négocier une stratégie que vous ne sentez pas à titre personnel')
    .addField('#villages_gdc','Channel dédié aux posts de villages de guerre')
    .addField('#compos_gdc','Posts de compos personnelles ou trouvailles du net pour des compos de guerre')
    message.channel.sendEmbed(regles04_embed); 
 }   

 if(message.content == prefix + 'regles05') {
    var regles05_embed = new Discord.RichEmbed()
    .setDescription('**VIE DU CLAN - FARM**')
    .setFooter('Application en cours pour | SMK Sniper`s | DISCORD | 2018 ', 'https://www.cjoint.com/doc/17_12/GLCayf37qLM_SMK-Snip-logo-youtube.png')
    .setColor('#0033cc')
    .addField('#test_villages','Villages personnels uniquement, pour le test et la critique d`un nouveau village')
    .addField('#propositions_nouveautes_du_clan','Channel réservé à vos idées personnelles, pour améliorer le clan')
    .addField('#graphisme_dev','Tout ce qui touche à l`univers du graphisme ou de la programmation, venez nous en parler')
    .addField('#absence-longue-duree','Channel dédié pour vous assurer le fait d`avoir mit au courant le clan')
    .addBlankField(true)
    .addField('#compos_farm','Posts de compos personnelles ou trouvailles du net pour des compos de farm ou loisir')
    message.channel.sendEmbed(regles05_embed); 
 }   

// ADJOINT REQUEST

     if(message.content == prefix + 'Adjoint') {
        var adjoint_embed = new Discord.RichEmbed()
        .setColor('#FFFF00')
        .addField('Vous avez demandé un Adjoint du clan', 'ne bougez pas, on va le faire venir !')
        message.channel.sendEmbed(adjoint_embed); 
     }


//ADMIN REQUEST

     if(message.content == prefix + 'Admin') {
        var admin_embed = new Discord.RichEmbed()
            .setColor('#E32416')
            .addField('Vous avez demandé un Administrateur du serveur, merci de patienter !', 'Vous pouvez déjà vous rendre dans le salon #Probleme_membre pour y exposer votre soucis !')
            .setFooter('Merci de votre compréhension')
        message.channel.sendEmbed(admin_embed); 
     }


//TEST
//if (message.mentions.users.size < 1) return message.reply ('message test mention');





});

//MESSAGE DE BIENVENUE

    bot.on('guildMemberAdd', member => {
        let role = member.guild.roles.find('name', 'Membre');
        let guild = member.guild;
        random();
        if(rand == 0){
            guild.channels.find('name', 'general').sendMessage(`:underage: Bienvenue ${member.user.username} Je suis ton ami, mais me fais pas trop chier non plus je reste un robot capricieux :smiling_imp: `);
        }

        if(rand == 1){
            guild.channels.find('name', 'general').sendMessage(`:nail_care:  Bienvenue ${member.user.username} Dis bonjour quand tu me croise, tu as interêt.. parce que je suis un fou moi, UN DÉGLINGO !!! je suis capable du pire... DU PIIIIIIRE !!!!!!  :baby_bottle:`);
        }

        if(rand == 2){
            guild.channels.find('name', 'general').sendMessage(`:poop: WOOOOOOAAAAAAAAWWWWWW, classe ta collection de poupée russe gabonaise ${member.user.username} dis.... tu fais quoi mercredi prochain ? je fais un petit dîner entre amis.... :innocent: :innocent: :champagne_glass:`);
        }

        if(rand == 3){
            guild.channels.find('name', 'general').sendMessage(`:ambulance: Bienvenue ${member.user.username} met toi à ton aise, je répondrais au mieux à tes attentes... mais reste tranquil mon gars, je suis un simple robot mais je peux te mettre une belle volée !!! ...... bah quoi faut pas avoir peur... rhoo on peut plus rigoler jme casse ! :persevere:` );
        }

        if(rand == 4){
            guild.channels.find('name', 'general').sendMessage(`:grin: Mesdames et Messieurs les gens, veuillez accueillir comme il se doit ${member.user.username} YOUHOUUUUUUU :underage: :tropical_drink: :champagne: :beers: `);
        }

        if(rand == 5){
            guild.channels.find('name', 'general').sendMessage(`:tongue: Ouaaiiii de la chaire fraîche !!!! je peux jouer avec toi ? dis ${member.user.username} tu veux être mon ami ? dis oui :heart_eyes: :heart_eyes: stppp dis ouiiiii :heart_eyes: :innocent:`);
        }

        member.addRole(role)
        
    });
  

//FONCTION RANDOM PHRASES ALEATOIRES

    function random(min, max) {
        min = Math.ceil(0);
        max = Math.floor(5);
        rand = Math.floor(Math.random() * (max - min +1) + min);
    }