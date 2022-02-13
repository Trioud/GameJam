import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import {mockup} from '../data/mockup'
import {fool} from '../public/tarot_de_marseilles_major_arcana/00_fool.png'

const Cards_left = ({lives, people}) => {
	return (
		<section>
			<h4 style={{textAlign: 'right'}}>
				You can reveal {lives} cards
			</h4>
			<h4 style={{textAlign: 'right'}}>
				Only {people} places left
			</h4>
		</section>
	);
}

const Card = ({setLives, lives, item}) => {

	const [stop, setStop] = useState(false);

	useEffect(() => {
		console.log('HELLO !');
		setStop(true);
		const elem = document.getElementsByClassName("card");
		for(var i = elem.length - 1; i >= 0; --i)
		{
			elem[i].className = "card";
		}
		setTimeout(() => {
			setStop(false);
		}, 1500);
	}, [item])
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
				<div className="card__face card__face--back" >{stop === false && item.tooltip}</div>
			</div>
		</div>		
	)
}

const Card_Manager = ({setLives, lives, data}) => {
	const Card_Creator = (data) => {
		return data.cards.map((item, index) => {
			return <Card setLives={setLives} lives={lives} item={item} key={index}/>;
		})
	}

	return (
		<>
			<h3 style={{textAlign: 'center'}}>{data?.name}</h3>
			<section className={styles.container}>
				{Card_Creator(data)}
			</section>
		</>
	)
}

const Home: NextPage = () => {

	const [secret, setSecret] = useState({verb: "?", envy: "?", job: "?"});
	const [lives, setLives] = useState(3);
	const [index, setIndex] = useState(0);
	const [people, setPeople] = useState(30);

	const Header = () => {
		return (
			<header>
				<h1>The God Game</h1>
			</header>
		)
	}

	const SecretSentence = ({verb, envy, job}) => {
		return `I ${verb} ${envy} ${job}`;
	}

	const Moveon = () => {
		setIndex(index + 1);
		setLives(lives + 3);
	}

	const onAccept = () => {
		Moveon();
		setPeople(people - 1);
	}

	const onReject = () => {
		Moveon();
	}

  	return (
		  <>
		  	<Header />
			<Cards_left lives={lives} people={people}/>
			<Card_Manager setLives={setLives} lives={lives} data={mockup[index]}/>
			<h2 style={{textAlign: 'center'}}>WHAT HE WILL ACCOMPLISH</h2>
			<h3 style={{textAlign: 'center'}}> {SecretSentence(secret)}</h3>
			<div className={styles.buttons}>
				<button onClick={onAccept}>ACCEPT</button>
				<button onClick={onReject}>REJECT</button>
			</div>
		  </>
  );
}

export default Home
