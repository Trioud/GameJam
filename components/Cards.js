"use strict";
exports.__esModule = true;
// import magician from '../assets/tarot_de_marseilles_major_arcana/01_magician.png'
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function card_creator(name, num) {
    var card = {
        id: num
    };
    card.image = name;
    console.log("".concat(name, " added."));
    return card;
}
function create_cards(envy, job, will, happy, devil, angel) {
    var cards = [];
    var id = 1;
    console.log("".concat(envy, ", ").concat(job, ", ").concat(will, ", ").concat(happy, ", ").concat(devil, ", ").concat(angel));
    if (envy >= 3 && will >= 3) {
        cards.push(card_creator("magician", id));
        id++;
    }
    if (will >= 7) {
        cards.push(card_creator("the high priestess", id));
        id++;
    }
    if (happy == 10) {
        cards.push(card_creator("the empress", id));
        id++;
    }
    if (job == 10) {
        cards.push(card_creator("the emperor", id));
        id++;
    }
    if (envy >= 2 && job >= 2 && will >= 2 && happy >= 2) {
        cards.push(card_creator("the pope", id));
        id++;
    }
    if (job == 0 && happy >= 8) {
        cards.push(card_creator("the lovers", id));
        id++;
    }
    if (job <= 4 && happy <= 4 && will >= 9) {
        cards.push(card_creator("the hermit", id));
        id++;
    }
    if (happy == 10) {
        cards.push(card_creator("the wheel of fortune", id));
        id++;
    }
    if (will >= 9 && envy <= 6 && job <= 6 && happy <= 6) {
        cards.push(card_creator("the strenght", id));
        id++;
    }
    if (will <= 3 && happy <= 3 && job >= 8) {
        cards.push(card_creator("the hanged man", id));
        id++;
    }
    if (will == 10) {
        cards.push(card_creator("death", id));
        id++;
    }
    if (envy >= 3 && envy <= 6 && job >= 3 && job <= 6 && will >= 3 && job <= 6 && happy >= 3 && happy <= 6) {
        cards.push(card_creator("temperance", id));
        id++;
    }
    if (devil == true) {
        cards.push(card_creator("the devil", id));
        id++;
    }
    if (will >= 8 && happy <= 2) {
        cards.push(card_creator("the tower", id));
        id++;
    }
    if (happy >= 6 && job <= 6) {
        cards.push(card_creator("the star", id));
        id++;
    }
    if (job >= 4 && will >= 2) {
        cards.push(card_creator("the moon", id));
        id++;
    }
    if (envy == 10 && job == 10 && will == 10 && happy == 10) {
        cards.push(card_creator("the sun", id));
        id++;
    }
    if (devil == true || angel == true) {
        cards.push(card_creator("the judgment", id));
        id++;
    }
    if (envy == 5 && job == 5 && will == 5 && happy == 5) {
        cards.push(card_creator("the world", id));
        id++;
    }
    if (envy == 1 && job == 1 && will == 1 && happy == 1) {
        cards.push(card_creator("the gorilla", id));
        id++;
    }
    return cards;
}
function create_npc() {
    var npc = {
        name: "salut",
        stats: {
            envy: getRandomInt(10),
            job: getRandomInt(10),
            will: getRandomInt(10),
            happy: getRandomInt(10),
            devil: false,
            angel: false
        }
    };
    npc.cards = create_cards(npc.stats.envy, npc.stats.job, npc.stats.will, npc.stats.happy, npc.stats.devil, npc.stats.angel);
    console.log(npc.cards);
}
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
create_npc();
