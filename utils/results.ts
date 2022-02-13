import { NPC } from '../data/mockup';
import { NpcStats, NpcResults } from '../types/resluts.interface';

export const dataSum = (data: NpcResults[]): NpcResults => {

    const sum: NpcResults = {

        envy: data.map(item => item.envy).reduce((prev, curr) => prev + curr, 0),
        job: data.map(item => item.job).reduce((prev, curr) => prev + curr, 0),
        will: data.map(item => item.will).reduce((prev, curr) => prev + curr, 0),
        happy: data.map(item => item.happy).reduce((prev, curr) => prev + curr, 0)
    }

    return sum;
}

export function results(npc: NPC[]): NpcResults {

    const data = npc.map(item => {

        const res: NpcResults = item.stats;
        return res;
    });

    const ok = dataSum(data);

    return ok;
}