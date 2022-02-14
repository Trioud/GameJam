import { NpcResults } from '../types/resluts.interface';


interface tags {

    tag: 'envy' | 'job' | 'will' | 'happy' | 'null',
}

interface stats {

    moy: number,
    closest: number,
    closestTag: tags
}

let goal: number;

const averrage = (npcData: number[]) => npcData.reduce((prev, curr) => prev + curr, 0) / npcData.length;
const closest = (npcData: number[]) => npcData.reduce((prev, curr) => Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);

const magicStats = (data: NpcResults): stats => {

    const Statis: stats = {

        moy: averrage([data.envy, data.happy, data.job, data.will]),
        closest: closest([data.envy, data.happy, data.job, data.will]),
        closestTag: { tag: 'null' }
    }

    if (Statis.closest === data.envy)
        Statis.closestTag.tag = 'envy';
    else if (Statis.closest === data.happy)
        Statis.closestTag.tag = 'happy';
    else if (Statis.closest === data.job)
        Statis.closestTag.tag = 'job';
    else if (Statis.closest === data.will)
        Statis.closestTag.tag = 'will'

    return Statis;
}

export function resultTranslator(resData: NpcResults): String {


    const { tag } = magicStats(resData).closestTag;

    if ( tag === 'envy'){

        if (resData.envy < 50)
            return 'Beaucoup de jaloux pullulent dans votre cité prenez gardes !';
        return 'Une Cité des plus complaisante tous se pousseront vers le haut'
    } else if (tag === 'happy') {

        if (resData.happy > 70)
            return 'Beaucoup de fetes sont à predire j\'espere que votre royaume possede les ressources necessaire !';
        return 'Une Perte provoquera une tres grande tristesse qui vous affecteras vous et votre royaume, il ne s\'en sortira jamais et vous aussi'
    } else if (tag === 'job') {

        if (resData.job > 50)
            return 'La culture et l\'epanouissement seront les mots d\'ordre de votre royaume !';
        return 'Seul la famine y regnera, aucun homme n\'aura les epaules pour l\'agriculture ou bien la securité !'
    } else if (tag === 'will') {

        if (resData.will > 50)
            return 'Le Plus long regne est avenir, un avenir de paix et de bienfaisance tout ce que dont reve le peuple';
        return 'Meme le regne de Louis XVII aura ete plus long';
    }

    return 'kaka';
}
