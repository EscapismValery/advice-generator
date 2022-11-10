import React, { useState } from 'react';
import axios from "axios";
import './App.scss';

function App() {
	const [advices, setAdvices] = useState({
		id: "1",
		advice: "Click on the dice button"
	});

	function getRandomInt(max) {
		return Math.floor(Math.random() * max + 1);
	}
	async function getAll() {
		const adviceId = getRandomInt(200);
		const response = await axios.get(`https://api.adviceslip.com/advice/${adviceId}`, {});
		return response;
	}
	const getAdviceSlip = async () => {
		const response = await getAll();
		setAdvices(response.data.slip);
	}

	return (
		<div className="app">
			<div className="advice">
				<h1 className='advice__title'>ADVICE #{advices?.id ? advices.id : "1"}</h1>
				<h2 className='advice__item'>"{advices?.advice ? advices.advice : "Click on the dice button"}"</h2>
				<div className='advice__divider'>
					<span className='advice__divider-line line-left'></span>
					<div className='advice__divider-container'>
						<span className='advice__divider-center center-left'></span>
						<span className='advice__divider-center center-right'></span>
					</div>
					<span className='advice__divider-line line-right'></span>
				</div>
				<button onClick={getAdviceSlip} className='advice__button'>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
						<path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" />
					</svg>
				</button>
			</div>
		</div>
	);
}

export default App;
