import {Cards, NPC} from "../data/mockup";
import fool from '../assets/tarot_de_marseilles_major_arcana/00_fool.png'
import magician from '../assets/tarot_de_marseilles_major_arcana/01_magician.png'
import hp from '../assets/tarot_de_marseilles_major_arcana/02_high_priestess.png'
import empress from '../assets/tarot_de_marseilles_major_arcana/03_empress.png'
import emperor from '../assets/tarot_de_marseilles_major_arcana/04_emperor.png'
import pope from '../assets/tarot_de_marseilles_major_arcana/05_pope.png'
import lovers from '../assets/tarot_de_marseilles_major_arcana/06_lovers.png'
import chariot from '../assets/tarot_de_marseilles_major_arcana/07_chariot.png'
import justice from '../assets/tarot_de_marseilles_major_arcana/08_justice.png'
import hermit from '../assets/tarot_de_marseilles_major_arcana/09_hermit.png'
import wof from '../assets/tarot_de_marseilles_major_arcana/10_wheel_of_fortune.png'
import strength from '../assets/tarot_de_marseilles_major_arcana/11_strength.png'
import h_man from '../assets/tarot_de_marseilles_major_arcana/12_hanged_man.png'
import death from '../assets/tarot_de_marseilles_major_arcana/13_death.png'
import temp from '../assets/tarot_de_marseilles_major_arcana/14_temperance.png'
import devil_image from '../assets/tarot_de_marseilles_major_arcana/15_devil.png'
import tower from '../assets/tarot_de_marseilles_major_arcana/16_tower.png'
import star from '../assets/tarot_de_marseilles_major_arcana/17_star.png'
import moon from '../assets/tarot_de_marseilles_major_arcana/18_moon.png'
import sun from '../assets/tarot_de_marseilles_major_arcana/19_sun.png'
import jud from '../assets/tarot_de_marseilles_major_arcana/20_judgment.png'
import wor from '../assets/tarot_de_marseilles_major_arcana/21_world.png'
import sinj from '../assets/tarot_de_marseilles_major_arcana/22_sinj.png'
import legobmii from '../assets/tarot_de_marseilles_major_arcana/legobmii.png'


var name_npc = ["Acelin", "Amaury", "Anselme", "Anthiaume", "Arthaud", "Aubert", "Audibert", "Aymeric", "Edmond", "Enguerrand", "Ernaut", "Galaad", "Garin", "Gauvain", "Gauvain", "Gibouin", "Hugues", "Jehan", "Lancelot", "Merlin", "Perceval", "Raymond", "Roland", "Tancrède", "Tristan", "Yvain", "Aliénor", "Alix", "Aremburge", "Artémise", "Astride", "Berthe", "Blanche", "Diane", "Gallendis", "Grisélidis", "Hélix", "Héloïse", "Hersende", "Léonor", "Mélissande", "Morgane", "Viviane"];
var example_card = [fool, magician, hp, empress, emperor, pope, lovers, chariot, hermit, wof, strength, h_man, death, temp, tower, star, moon, wor, sinj];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function card_creator(name: any, num: number) : Cards {
    var card: Cards = {
        image: name,
        id: num,
    };
    card.image = name;
    console.log(`${name} added.`)
    return card;
}

function shuffle(array: Array<any>) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function fill_card(array: Array<any>) {
    var test = shuffle(example_card);
    var i = 0;
    var j = 2;
    while (i != 4) {
        array.push(card_creator(test[i], 2));
        i ++;
        j ++;
    }
    return array;
}

function create_cards(envy: number, job: number, will: number, happy: number,  devil: boolean, angel: boolean): Array<Cards> {
    var cards = []
    var id = 1;
    console.log(`${envy}, ${job}, ${will}, ${happy}, ${devil}, ${angel}`);
    if (devil == true || angel == true) {
        if (envy == 10 && job == 10 && will == 10 && happy == 10) {
            const rate = getRandomInt(2)
            if (rate == 1) {
                cards.push(card_creator(jud, id));
                cards = fill_card(cards);
                id ++;
            } else {
                cards.push(card_creator(sun, id));
                cards = fill_card(cards);
                id ++;
            }
        }
        if (envy == 0 && job == 0 && will == 0 && happy == 0) {
            const rate = getRandomInt(2)
            if (rate == 1) {
                cards.push(card_creator(jud, id));
                fill_card(cards);
                id ++;
            }
            else {
                cards.push(card_creator(devil_image, id));
                fill_card(cards);
                id ++;
            }
        }
    } else {

        if (envy >= 3 && will >= 3) {
        cards.push(card_creator(magician, id));
        id ++;
        }
        if (will >= 7) {
            cards.push(card_creator(hp, id));
            id ++;
        }
        if (happy == 6) {
            cards.push(card_creator(empress, id));
            id ++;
        }
        if (job == 8) {
            cards.push(card_creator(emperor, id));
            id ++;
        }
        if (envy >= 2 && job >= 2 && will >= 2 && happy >= 2) {
            cards.push(card_creator(pope, id));
            id ++;
        }
        if (job > 6) {
            cards.push(card_creator(justice, id));
            id ++;
        }
        if (will > 6) {
            cards.push(card_creator(chariot, id));
            id ++;
        }
        if (job == 0 && happy >= 8) {
            cards.push(card_creator(lovers, id));
            id ++;
        }
        if (job <= 4 && happy <= 4 && will >= 9) {
            cards.push(card_creator(hermit, id));
            id ++;
        }
        if (happy > 6 && envy < 3) {
            cards.push(card_creator(wof, id));
            id ++;
        }
        if (will >= 9 && envy <= 6 && job <= 6 && happy <= 6) {
            cards.push(card_creator(strength, id));
            id ++;
        }
        if (will <= 3 && happy <= 3 && job >= 8) {
            cards.push(card_creator(h_man, id));
            id ++;
        }
        if (will == 10) {
            cards.push(card_creator(death, id));
            id ++;
        }
        if (envy >= 3 && envy <= 6 && job >= 3 && job <= 6 && will >= 3 && job <= 6 && happy >= 3 && happy <= 6) {
            cards.push(card_creator(temp, id));
            id ++;
        }
        if (will >= 8 && happy <= 2) {
            cards.push(card_creator(tower, id));
            id ++;
        }
        if (happy >= 6 && job <= 6) {
            cards.push(card_creator(star, id));
            id ++;
        }
        if (job >= 4 && will >= 2) {
            cards.push(card_creator(moon, id));
            id ++;
        }
        if (envy == 5 && job == 5 && will == 5 && happy == 5) {
            cards.push(card_creator(wor, id));
            id ++;
        }
        if (happy > 4 && envy > 4) {
            cards.push(card_creator(sinj, id));
            id ++;
        }
        if (happy > 8 && envy > 8 && will > 8 && job < 5) {
            cards.push(card_creator(legobmii, id));
            id ++;
        }
    }
    return cards;
}

function check_cards(array: Array<any>): Array<any> {
    let len = array.length;
    if (len < 5) {
        while (len != 5) {
            array.push(card_creator(fool, len + 1));
            len ++;
        }
    }
    if (len > 5 ){
        while (len != 5) {
            array.pop();
            len --;
        }
    }
    return array;
}

function reset_id(array: Array<any>): Array<any> {
    let len = array.length;
    let i = 1;
    let j = 0;
    while (i <= len) {
        array[j].id = i;
        i ++;
        j ++;
    }
    return (array);
}

function create_npc(name:string): NPC {
    let npc: NPC = {
        name: name,
        stats: {
            envy: getRandomInt(11),
            job: getRandomInt(11),
            will: getRandomInt(11),
            happy: getRandomInt(11),
            devil: false,
            angel: false,
        }
    }
    const rate = getRandomInt(19);
    if (rate == 10) {
        npc.stats.devil = true;
        npc.stats.envy = 0;
        npc.stats.job = 0;
        npc.stats.will = 0;
        npc.stats.happy = 0;
    }
    else if (rate == 19) {
        npc.stats.angel = true
        npc.stats.envy = 10;
        npc.stats.job = 10;
        npc.stats.will = 10;
        npc.stats.happy = 10;
    }
    npc.cards = create_cards(npc.stats.envy, npc.stats.job, npc.stats.will, npc.stats.happy, npc.stats.devil, npc.stats.angel);
    npc.cards = shuffle(npc.cards);
    npc.cards = check_cards(npc.cards);
    npc.cards = reset_id(npc.cards);
    return npc;
}

function create_all_npc() : Array<NPC> {
    var i = 0;
    var all_npc = []
    name_npc = shuffle(name_npc);
    while (i != 30) {
        all_npc.push(create_npc(name_npc[i]));
        i ++;
    }
    console.log(all_npc);
    return all_npc;
}

export {create_all_npc}