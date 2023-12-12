import { yoq } from "./bot-yoq";

const player1: HTMLInputElement = document.querySelector(".player1")!;
const player2: HTMLInputElement = document.querySelector(".player2")!;
const newGame: HTMLButtonElement = document.querySelector(".newGame")!;
const player22: HTMLParagraphElement = document.querySelector(".player22")!;
const player11: HTMLParagraphElement = document.querySelector(".player11")!;

const url: string = "http://localhost:4000/api/tic-tac-toe";

newGame.addEventListener("click", async () => {
	const palyer1: string = player1.value;
	const palyer2: string = player2.value;

	player11.innerText = ""; 
	player22.innerText = "";

	if (palyer1 === "") {
		player11.innerText = "1 Oyinchi Ismizni kiriting";
		return;
	}

	if (palyer2 === "") {
		player22.innerText = "2 Oyinchi Ismizni kiriting";
		return;
	}

	const data = {
		player1: palyer1,
		player2: palyer2,
	};

	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const responseData = await response.json();
		console.log("jonadi", responseData);
	} catch (error) {
		console.error("Error sending POST request:", error);
	}

	yoq();
});
