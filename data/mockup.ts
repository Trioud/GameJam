import fool from '../assets/tarot_de_marseilles_major_arcana/01_magician.png'
import sun from '../assets/tarot_de_marseilles_major_arcana/19_sun.png'

interface Cards {
	image?: StaticImageData,
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
		image: sun,
		tooltip : "lol",
		id: 1,
	},
	{
		image: sun,
		tooltip : "lol",
		id: 2,
	},
	{
		image: sun,
		tooltip : "lol",
		id: 3,
	},
	{
		image: sun,
		tooltip : "lol",
		id: 4,
	},
	{
		image: sun,
		tooltip : "EMPEREUR",
		id: 5,
	},
]

const mockup_cards2:Array<Cards> = [
	{
		image: fool,
		tooltip : "lol",
		id: 1,
	},
	{
		image: fool,
		tooltip : "lol",
		id: 2,
	},
	{
		image: fool,
		tooltip : "lol",
		id: 3,
	},
	{
		image: fool,
		tooltip : "lol",
		id: 4,
	},
	{
		image: fool,
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
		name: "2",
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
    {
		name: "3",
		stats: {
			envy: 3,
			job: 4,
			will: 10,
			happy: 5,
			angel: false,
			devil: false,
		},
		cards: mockup_cards2
	},	{
		name: "4",
		stats: {
			envy: 3,
			job: 4,
			will: 10,
			happy: 5,
			angel: false,
			devil: false,
		},
		cards: mockup_cards2
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
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
	},	{
		name: "LAST",
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