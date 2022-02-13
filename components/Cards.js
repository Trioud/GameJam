"use strict";
exports.__esModule = true;
var name_npc = ["Acelin", "Amaury", "Anselme", "Anthiaume", "Arthaud", "Aubert", "Audibert", "Aymeric", "Edmond", "Enguerrand", "Ernaut", "Galaad", "Garin", "Gauvain", "Gauvain", "Gibouin", "Hugues", "Jehan", "Lancelot", "Merlin", "Perceval", "Raymond", "Roland", "Tancrède", "Tristan", "Yvain", "Aliénor", "Alix", "Aremburge", "Artémise", "Astride", "Berthe", "Blanche", "Diane", "Gallendis", "Grisélidis", "Hélix", "Héloïse", "Hersende", "Léonor", "Mélissande", "Morgane", "Viviane"];
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
function shuffle(array) {
    var _a;
    var currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        _a = [array[randomIndex], array[currentIndex]], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
    }
    return array;
}
function create_cards(envy, job, will, happy, devil, angel) {
    var cards = [];
    var id = 1;
    console.log("".concat(envy, ", ").concat(job, ", ").concat(will, ", ").concat(happy, ", ").concat(devil, ", ").concat(angel));
    if (devil == true || angel == true) {
        var rate = getRandomInt(5);
        if (rate == 5) {
            cards.push(card_creator("the judgment", id));
            id++;
        }
        else if (devil == true) {
            cards.push(card_creator("the devil", id));
            id++;
        }
        else if (envy == 10 && job == 10 && will == 10 && happy == 10) {
            cards.push(card_creator("the sun", id));
            id++;
        }
    }
    else {
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
        if (envy == 5 && job == 5 && will == 5 && happy == 5) {
            cards.push(card_creator("the world", id));
            id++;
        }
        if (envy == 1 && job == 1 && will == 1 && happy == 1) {
            cards.push(card_creator("the gorilla", id));
            id++;
        }
    }
    return cards;
}
function check_cards(array) {
    var len = array.length;
    if (len < 5) {
        while (len != 5) {
            array.push(card_creator("the fool", len + 1));
            len++;
        }
    }
    return array;
}
function reset_id(array) {
    var len = array.length;
    var i = 1;
    var j = 0;
    while (i <= len) {
        array[j].id = i;
        i++;
        j++;
    }
    return (array);
}
function create_npc(name) {
    var npc = {
        name: name,
        stats: {
            envy: getRandomInt(10),
            job: getRandomInt(10),
            will: getRandomInt(10),
            happy: getRandomInt(10),
            devil: false,
            angel: false
        }
    };
    var rate = getRandomInt(50);
    if (rate == 25) {
        npc.stats.devil = true;
    }
    else if (rate == 50) {
        npc.stats.angel = true;
    }
    npc.cards = create_cards(npc.stats.envy, npc.stats.job, npc.stats.will, npc.stats.happy, npc.stats.devil, npc.stats.angel);
    // console.log(npc.cards);
    npc.cards = check_cards(npc.cards);
    npc.cards = shuffle(npc.cards);
    // console.log(npc.cards);
    npc.cards = reset_id(npc.cards);
    // console.log(npc.cards);
    return npc;
}
function create_all_npc() {
    var i = 0;
    var all_npc = [];
    name_npc = shuffle(name_npc);
    while (i != 30) {
        all_npc.push(create_npc(name_npc[i]));
        i++;
    }
    console.log(all_npc);
    return all_npc;
}
create_all_npc();
