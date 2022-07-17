import React, { useState, useRef, useEffect } from 'react'


const MobileTimer = () => {

	// We need ref in this, because we are dealing
	// with JS setInterval to keep track of it and
	// stop it when needed
	const Ref = useRef(null);

	// The state for our timer
	const [timer, setTimer] = useState('00:00:00');


	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		const minutes = Math.floor((total / 1000 / 60) % 60);
		const hours = Math.floor((total / 1000 / 60 / 60) % 24);
		return {
			total, hours, minutes, seconds
		};
	}


	const startTimer = (e) => {
		let { total, hours, minutes, seconds }
			= getTimeRemaining(e);
		if (total >= 0) {

			// update the timer
			// check if less than 10 then we need to
			// add '0' at the beginning of the variable
			setTimer(
				(hours > 9 ? hours : '0' + hours) + ':' +
				(minutes > 9 ? minutes : '0' + minutes) + ':'
				+ (seconds > 9 ? seconds : '0' + seconds)
			)
		}
	}


	const clearTimer = (e) => {

		// If you adjust it you should also need to
		// adjust the Endtime formula we are about
		// to code next	
		setTimer('00:00:10');

		// If you try to remove this line the
		// updating of timer Variable will be
		// after 1000ms or 1sec
		if (Ref.current) clearInterval(Ref.current);
		const id = setInterval(() => {
			startTimer(e);
		}, 1000)
		Ref.current = id;
	}

	const getDeadTime = () => {
		let deadline = new Date();

		// This is where you need to adjust if
		// you entend to add more time
		deadline.setSeconds(deadline.getSeconds() + 1000);
		return deadline;
	}

	// We can use useEffect so that when the component
	// mount the timer will start as soon as possible

	// We put empty array to act as componentDid
	// mount only
	useEffect(() => {
		clearTimer(getDeadTime());
	}, []);

	// Another way to call the clearTimer() to start
	// the countdown is via action event from the
	// button first we create function to be called
	// by the button
	// const onClickReset = () => {
	// 	clearTimer(getDeadTime());
	// }

	return (

		<div className="for_timer2" style={{height:"100px"}}>


			<div className="homeSlide Timer for--bg">
				<div className="">
					<div className="day">
					<h2 className="time">{timer.split(':')[0]}</h2>
					</div>
					<div className="week">
					<p>Weeks</p>
					</div>

				</div>
				<span className="" style={{color:"#FFCC00",
			    color: "rgb(255, 204, 0)",
				padding: "0px 10px 0px 10px",
				position: "relative",
				top: "50px",
				fontSize: "30px"}}>{" : "}</span>


				<div className="">
					<div className="day">
					<h2 className="time">{timer.split(':')[0]}</h2>
					</div>
					<div className="week">
					<p>Days</p>
					</div>

				</div>

				<span className="" style={{color:"#FFCC00",
			    color: "rgb(255, 204, 0)",
				padding: "0px 10px 0px 10px",
				position: "relative",
				top: "50px",
				fontSize: "30px"}}>{" : "}</span>



				<div className="">
					<div className="day">
					<h2 className="time">{timer.split(':')[1]}</h2>
					</div>
					<div className="week">
					<p>Hours</p>
					</div>

				</div>

				<span className="" style={{color:"#FFCC00",
			    color: "rgb(255, 204, 0)",
				padding: "0px 10px 0px 10px",
				position: "relative",
				top: "50px",
				fontSize: "30px"}}>{" : "}</span>
				<div className="">
					<div className="day">
					<h2 className="time">{timer.split(':')[2]}</h2>
					</div>
					<div className="week">
					<p>Seconds</p>
					</div>

				</div>
				{/* <button onClick={onClickReset}>Reset</button> */}
			</div>

		


		</div>

	)
}

export default MobileTimer;
