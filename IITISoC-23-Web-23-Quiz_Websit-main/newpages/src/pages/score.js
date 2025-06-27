// Score.js

import React, { Component } from 'react';
import './quiznew.css'
import "./score.css"

class Score extends Component {
	render() {
		const { score, onNextQuestion } = this.props;

		return (


			
			<div className='score'>
				<h1>Results</h1>
				
					
				
				<h2><b>Your score: {score}</b></h2>
			</div>
		);
	}
}



export default Score;
