; (function () {
	"use strict";
	// NUMBER
	// let btnNumber = document.querySelector(".ba-number-btn");
	// let passwordEl = document.querySelector(".result");
	// let userLogin = document.getElementById("number-first");
	// let userPassword = document.getElementById("number-second");

	// function showNumber() {

	// 	if (userLogin.value == userPassword.value) {
	// 		passwordEl.textContent = "0";
	// 	} else if (userLogin.value < userPassword.value) {
	// 		passwordEl.textContent = "1";
	// 	}
	// 	else {
	// 		passwordEl.textContent = "-1"
	// 	}
	// }
	// btnNumber.addEventListener("click", showNumber);
	function number(first = 1, second = 1) {
		switch (true) {
			case first == second:
				result.textContent = "0";
				console.log('0');
				break;
			case first > second:
				console.log('1');
				break;
			case first < second:
				console.log('-1');
				break;
			default:
				console.log('not');
		}
	}
	number(2, 3);

	// END NUMBER


	// FACTORIAL
	function factorial(number_f = 5) {
		if (number_f == 1) return 1;
		else return number_f * factorial(number_f - 1);
	}
	console.log("factorial " + factorial(3));
	// END FACTORIAL
	// gluing
	function gluing(a = 1, b = 1, c = 1) {
		let a1 = String(a);
		let b1 = String(b);
		let c1 = String(c);
		let final = a1 + b1 + c1;
		return Number(a1 + b1 + c1);
	}
	console.log("gluing " + gluing());
	// end gluing
	// square
	function square(width = 0, height = 0) {
		if (width > 0) {
			return width * width;
		} else {
			return width * height;
		}
	}
	console.log("square " + square(4));
	// end square
	//  Perfect number
	function perfectNumber(number) {
		let result = 0;
		for (let i = number; i <= number; i++) {

			for (let j = 1; j < i; j++) {
				if (i % j == 0) {
					result = result + j;
				};
			}
			if (result == i) {
				return "Yes " + i + " this is a golden meaning";
			} else
				return "No " + i + " this is not a golden meaning";
			;
		}
	}
	console.log(perfectNumber(6));
	// END Perfect number

	//  Perfect number range
	function perfectNumber1(number) {
		let result = 0;
		for (let i = number; i <= number; i++) {

			for (let j = 1; j < i; j++) {
				if (i % j == 0) {
					result = result + j;
				};
			}
			if (result == i) {
				return true;
			} else
				return false;
			;
		}
	}
	
	function perfectNumberRange(min, max) {
		for (let i = min; i <= max; i++) {
			let perfect = perfectNumber1(i)
			console.log(perfect);
			if (perfect === true) {
				
				return perfect;
			}else{

				return "netu";
			}

		}

	}
	console.log("Perfect number in you range " + perfectNumberRange(3,7));
	// End Perfect numbesr range

	// Time
	function time(hours, minutes = "00", seconds = "00") {
		return `<${hours}:${minutes}:${seconds}>`
	}
	console.log("Time : " + time(12))
	//END Time
	// timeTooSeconds  
	function timeTooSeconds (hours, minutes = "00", seconds = "00"){
		let second = ((hours * 60) * 60) + minutes * 60+seconds;
		return console.log(`In time <${hours}:${minutes}:${seconds}>  secons ${second}`);
	}
	timeTooSeconds (2,30);
	// END timeTooSeconds 


	//secondTransformToTime
	function secondTransformTooTime(second) {
		let hours = Math.floor(second / 60 / 60)
			, minutes = Math.floor(second / 60) - (hours * 60)
			, seconds = second % 60
			;

		return console.log(String(`Transform seconds ${second} to time <${hours} : ${minutes} : ${seconds}>`));
	}
	secondTransformTooTime(9012);
	//  END secondTransformToTime
})();
