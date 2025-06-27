
import React, { Component } from "react";
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./question";
import qBank from "./Questionbank";
import Score from "./score";
import Interval from "./time";
import "./quiznew.css";

class Quiznew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questionBank: qBank,
			currentQuestion: 0,
			selectedOption: "",
			score: 0,
			quizEnd: false,
		};
	}
	

 Counter = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {

		
		const interval = setInterval(() => {
			setCount(count + 1);
		}, 1000);

		
		return () => clearInterval(interval);
	}, [count]);

	return <div className="count"> <h1>{count}</h1></div>;
	
}



	handleOptionChange = (e) => {
		this.setState({ selectedOption: e.target.value });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();
		this.checkAnswer();
		this.handleNextQuestion();
	};

	checkAnswer = () => {
		const { questionBank, currentQuestion, selectedOption, score } = this.state;
		if (selectedOption === questionBank[currentQuestion].answer) {
			this.setState((prevState) => ({ score: prevState.score + 1 }));
		}
	};

	handleNextQuestion = () => {
		const { questionBank, currentQuestion } = this.state;
		if (currentQuestion + 1 < questionBank.length) {
			this.setState((prevState) => ({
				currentQuestion: prevState.currentQuestion + 1,
				selectedOption: "",
			}));
		} else {
			this.setState({
				quizEnd: true,
			});
		}
	};

	render() {
		const { questionBank, currentQuestion, selectedOption, score, quizEnd } =
			this.state;
		return (
			<div className="default">
				<h1 className="app-title">QUIZZYLICIOUS</h1>
				
				<div  className="mrunal">
					<h2>
					<Link to ="/home">
						<button className="gg">
							Home Page
						</button>
						</Link>
						
					</h2>
				</div>
				

				<Interval/>
				{!quizEnd ? (
					
					<Question
						question={questionBank[currentQuestion]}
						selectedOption={selectedOption}
						onOptionChange={this.handleOptionChange}
						onSubmit={this.handleFormSubmit}
						
					/>
				) : (
					<Score
						score={score}
						onNextQuestion={this.handleNextQuestion}
						className="score"
					/>
				)}
			</div>
		);
	}
}

export default Quiznew;
