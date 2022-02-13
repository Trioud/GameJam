import {Cards, NPC} from "../data/mockup"; 
// import magician from '../assets/tarot_de_marseilles_major_arcana/01_magician.png'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function card_creator(name: string, num: number) : Cards {
    var card: Cards = {
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
        const rate = getRandomInt(100)
        if (rate == 100) {
            cards.push(card_creator("the judgment", id));
            id ++;
        }
        else if (devil == true) {
            cards.push(card_creator("the devil", id));
            id ++;
        }
        else if (envy == 10 && job == 10 && will == 10 && happy == 10) {
            cards.push(card_creator("the sun", id));
            id ++;
        }
    }
    else {
        if (envy >= 3 && will >= 3) {
        cards.push(card_creator("magician", id));
        id ++;
        }
        if (will >= 7) {
            cards.push(card_creator("the high priestess", id));
            id ++;
        }
        if (happy == 10) {
            cards.push(card_creator("the empress", id));
            id ++;
        }
        if (job == 10) {
            cards.push(card_creator("the emperor", id));
            id ++;
        }
        if (envy >= 2 && job >= 2 && will >= 2 && happy >= 2) {
            cards.push(card_creator("the pope", id));
            id ++;
        }
        if (job == 0 && happy >= 8) {
            cards.push(card_creator("the lovers", id));
            id ++;
        }
        if (job <= 4 && happy <= 4 && will >= 9) {
            cards.push(card_creator("the hermit", id));
            id ++;
        }
        if (happy == 10) {
            cards.push(card_creator("the wheel of fortune", id));
            id ++;
        }
        if (will >= 9 && envy <= 6 && job <= 6 && happy <= 6) {
            cards.push(card_creator("the strenght", id));
            id ++;
        }
        if (will <= 3 && happy <= 3 && job >= 8) {
            cards.push(card_creator("the hanged man", id));
            id ++;
        }
        if (will == 10) {
            cards.push(card_creator("death", id));
            id ++;
        }
        if (envy >= 3 && envy <= 6 && job >= 3 && job <= 6 && will >= 3 && job <= 6 && happy >= 3 && happy <= 6) {
            cards.push(card_creator("temperance", id));
            id ++;
        }
        if (will >= 8 && happy <= 2) {
            cards.push(card_creator("the tower", id));
            id ++;
        }
        if (happy >= 6 && job <= 6) {
            cards.push(card_creator("the star", id));
            id ++;
        }
        if (job >= 4 && will >= 2) {
            cards.push(card_creator("the moon", id));
            id ++;
        }
        if (envy == 5 && job == 5 && will == 5 && happy == 5) {
            cards.push(card_creator("the world", id));
            id ++;
        }
        if (envy == 1 && job == 1 && will == 1 && happy == 1) {
            cards.push(card_creator("the gorilla", id));
            id ++;
        }
    }
    return cards;
}

function check_cards(array: Array<any>): Array<any> {
    let len = array.length;
    console.log(len);
    if (len < 5) {
        while (len != 5) {
            array.push(card_creator("the gorilla", len + 1));
            len ++;
        }
    }
    return array;
}

function reset_id(array: Array<any>): Array<any> {
    let len = array.length;
    let i = 1;
    let j = 0;
    console.log("salut")
    while (i <= len) {
        console.log(i);
        array[j].id = i;
        i ++;
        j ++;
    }
    return (array);
}

function create_npc(): void {
    let npc: NPC = {
        name: "salut",
        stats: {
            envy: getRandomInt(10),
            job: getRandomInt(10),
            will: getRandomInt(10),
            happy: getRandomInt(10),
            devil: false,
            angel: false,
        }
    }
    npc.cards = create_cards(npc.stats.envy, npc.stats.job, npc.stats.will, npc.stats.happy, npc.stats.devil, npc.stats.angel);
    console.log(npc.cards);
    npc.cards = check_cards(npc.cards);
    npc.cards = shuffle(npc.cards);
    console.log(npc.cards);
    npc.cards = reset_id(npc.cards);
    console.log(npc.cards);
}

create_npc();