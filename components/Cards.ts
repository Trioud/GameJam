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


var name_npc = ["Acelin", "Amaury", "Anselme", "Anthiaume", "Arthaud", "Aubert", "Audibert", "Aymeric", "Edmond", "Enguerrand", "Ernaut", "Galaad", "Garin", "Gauvain", "Gauvain", "Gibouin", "Hugues", "Jehan", "Lancelot", "Merlin", "Perceval", "Raymond", "Roland", "Tancrède", "Tristan", "Yvain", "Aliénor", "Alix", "Aremburge", "Artémise", "Astride", "Berthe", "Blanche", "Diane", "Gallendis", "Grisélidis", "Hélix", "Héloïse", "Hersende", "Léonor", "Mélissande", "Morgane", "Viviane"];

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

function create_cards(envy: number, job: number, will: number, happy: number,  devil: boolean, angel: boolean): Array<Cards> {
    var cards = []
    var id = 1;
    console.log(`${envy}, ${job}, ${will}, ${happy}, ${devil}, ${angel}`);
    if (devil == true || angel == true) {
        const rate = getRandomInt(5)
        if (rate == 5) {
            cards.push(card_creator(jud, id));
            id ++;
        }
        else if (devil == true) {
            cards.push(card_creator(devil_image, id));
            id ++;
        }
        else if (envy == 10 && job == 10 && will == 10 && happy == 10) {
            cards.push(card_creator(sun, id));
            id ++;
        }
    }
    else {
        if (envy >= 3 && will >= 3) {
        cards.push(card_creator(magician, id));
        id ++;
        }
        if (will >= 7) {
            cards.push(card_creator(hp, id));
            id ++;
        }
        if (happy == 10) {
            cards.push(card_creator(empress, id));
            id ++;
        }
        if (job == 10) {
            cards.push(card_creator(emperor, id));
            id ++;
        }
        if (envy >= 2 && job >= 2 && will >= 2 && happy >= 2) {
            cards.push(card_creator(pope, id));
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
        if (happy == 10) {
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
        if (envy == 1 && job == 1 && will == 1 && happy == 1) {
            cards.push(card_creator(sinj, id));
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
            envy: getRandomInt(10),
            job: getRandomInt(10),
            will: getRandomInt(10),
            happy: getRandomInt(10),
            devil: false,
            angel: false,
        }
    }
    const rate = getRandomInt(50);
    if (rate == 25) {
        npc.stats.devil = true;
    }
    else if (rate == 50) {
        npc.stats.angel = true
    }
    npc.cards = create_cards(npc.stats.envy, npc.stats.job, npc.stats.will, npc.stats.happy, npc.stats.devil, npc.stats.angel);
    npc.cards = check_cards(npc.cards);
    npc.cards = shuffle(npc.cards);
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