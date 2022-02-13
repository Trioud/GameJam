// import fool from '../assets/tarot_de_marseilles_major_arcana/fool.png'

interface Cards {
    image?: string,
    tooltip?: string,
    open?: boolean,
    id: number,
}
interface NPC {
	name: string,
	stats: {
		envy: number,
		job: number,
		will: number,
		happy: number,
		angel: boolean,
		devil: boolean,
	}
	cards?: Array<Cards>
}

const mockup_cards:Array<Cards> = [
	{
		image : "lol",
		tooltip : "lol",
		id: 1,
	},
	{
		image : "lol",
		tooltip : "lol",
		id: 2,
	},
	{
		image : "lol",
		tooltip : "lol",
		id: 3,
	},
	{
		image : "lol",
		tooltip : "lol",
		id: 4,
	},
	{
		image : "lol",
		tooltip : "EMPEREUR",
		id: 5,
	},
]

const mockup_cards2:Array<Cards> = [
	{
		image : "lol",
		tooltip : "lol",
		id: 1,
	},
	{
		image : "lol",
		tooltip : "lol",
		id: 2,
	},
	{
		image : "lol",
		tooltip : "lol",
		id: 3,
	},
	{
		image : "lol",
		tooltip : "lol",
		id: 4,
	},
	{
		image : "lol",
		tooltip : "XD",
		id: 40,
	},
]

const mockup:Array<NPC> = [
	{
		name: "Henri",
		stats: {
			envy: 3,
			job: 4,
			will: 10,
			happy: 5,
			angel: false,
			devil: false,
		},
		cards: mockup_cards
	},
	{
		name: "Angelo",
		stats: {
			envy: 3,
			job: 4,
			will: 10,
			happy: 5,
			angel: false,
			devil: false,
		},
		cards: mockup_cards2
	},
]

export type {Cards, NPC}

export {mockup};