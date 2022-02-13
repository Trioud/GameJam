import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import { mockup } from '../data/mockup'
import fool from '../assets/tarot_de_marseilles_major_arcana/fool.png'
import Image from 'next/image'
import { create_all_npc } from '../components/Cards'
import { results } from '../components/Results'

const Cards_left = ({ lives, people, place }) => {
	return (
		<section>
			<h4 style={{ textAlign: 'right' }}>
				You can reveal {lives} cards
			</h4>
			<h4 style={{ textAlign: 'right' }}>
				{people} candidates left
			</h4>
			<h4 style={{ textAlign: 'right' }}>
				{place} places left
			</h4>
		</section>
	);
}

const Card = ({ setLives, lives, item, reload, treload }) => {
	const [stop, setStop] = useState(false);

	useEffect(() => {
		console.log('RELOAD ?');
		setStop(true);
		const elem = document.getElementsByClassName("card");
		for (var i = elem.length - 1; i >= 0; --i) {
			elem[i].className = "card";
		}
		setTimeout(() => {
			setStop(false);
		}, 1000);
	}, [reload, treload])

	const ClickCard = (e) => {
		const item = e.currentTarget.classList;
		if (lives > 0 && item.length === 1 /* FIX DECATHLON TIER */) {
			e.currentTarget.classList.toggle('is-flipped');
			setLives(lives - 1);
		}
	}

	return (
		<div className="scene">
			<div className="card" onClick={ClickCard} id="card">
				<div className="card__face card__face--front">{item.id}</div>
				<div className="card__face card__face--back" >{!stop && <Image src={item.image} layout="fill" />} </div>
			</div>
		</div>
	)
}

const Card_Manager = ({ setLives, lives, data, index, setIndex, people, reload, setReload }) => {
	const [disable, setDisable] = useState({ left: true, right: false });

	useEffect(() => {
		if (index === 0)
			setDisable({ left: true, right: false });
		else if (index + 1 > people - 1)
			setDisable({ left: false, right: true });
		else
			setDisable({ left: false, right: false });
	}, [reload, index]);

	const Card_Creator = (data) => {
		return data.cards.map((item, index) => {
			return <Card setLives={setLives} lives={lives} item={item} key={index} reload={index} treload={reload} />;
		})
	}

	function changeIndex(nb: number) {
		setReload(!reload);
		setIndex(index + nb);
	}

	const goLeft = () => {
		changeIndex(-1);
	}

	const goRight = () => {
		changeIndex(1)
	}

	return (
		<>
			<h3 style={{ textAlign: 'center' }}>{data?.name}</h3>
			<section className={styles.container}>
				<button onClick={goLeft} disabled={disable.left}>LEFT</button>
				{Card_Creator(data)}
				<button onClick={goRight} disabled={disable.right}>RIGHT</button>
			</section>
		</>
	)
}

const Home: NextPage = () => {

	const [secret, setSecret] = useState({ verb: "?", envy: "?", job: "?" });
	const [lives, setLives] = useState(3);
	const [index, setIndex] = useState(0);
	const [people, setPeople] = useState(mockup.length);
	const [place, setPlace] = useState(15);
	const [data, setData] = useState(create_all_npc());
	const [reload, setReload] = useState(true);
	const [habitants, setHabitants] = useState([]);
	const [end, setEnd] = useState(false);

	useEffect(() => {
		if (place === 0) {
			setEnd(!end);
		}
	}, [place]);

	const Header = () => {
		return (
			<header>
				<h1>The God Game</h1>
			</header>
		)
	}

	const SecretSentence = ({ verb, envy, job }) => {
		return `I ${verb} ${envy} ${job}`;
	}

	const Moveon = () => {
		let rest = data.splice(index, 1);
		habitants.push(rest[0]);
		setLives(lives + 3);
	}

	const onAccept = () => {
		if (index === people - 1)
			setIndex(index - 1);
		Moveon();
		setPeople(people - 1);
		setPlace(place - 1);
		setReload(!reload);
	}

	const onReject = () => {
		if (index === people - 1)
			setIndex(index - 1);
		setReload(!reload);
		setPeople(people - 1);
		Moveon();
	}

	const Displayresult = () => {
		console.log('LOL');
		return habitants.map((item) => {
			return <div>{item.name}</div>
		})
	}

	const DisplayStats = () => {
		const result = results(data);
		return (
			<div>
				<div>
					ENVY : {result.envy} / 150
				</div>
				<div>
					JOB : {result.job} / 150
				</div>
				<div>
					WILL : {result.will} / 150
				</div>
				<div>
					HAPPY : {result.happy} / 150
				</div>
			</div>
		)
	}

	return (
		<>
			<div hidden={end}>
				<Header />
				{index}
				<Cards_left lives={lives} people={people} place={place} />
				<Card_Manager setLives={setLives} lives={lives} data={data[index]} index={index} setIndex={setIndex} people={people} reload={reload} setReload={setReload} />
				<h2 style={{ textAlign: 'center' }}>WHAT HE WILL ACCOMPLISH</h2>
				<h3 style={{ textAlign: 'center' }}> {SecretSentence(secret)}</h3>
				<div className={styles.buttons}>
					<button onClick={onAccept}>ACCEPT</button>
					<button onClick={onReject}>REJECT</button>
				</div>
			</div>
			<div hidden={!end}>
				RESULTS:
				{Displayresult()}
				{DisplayStats()}
			</div>
		</>
	);
}

export default Home
