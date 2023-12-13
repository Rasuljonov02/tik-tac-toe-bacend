import { zz } from "./reflesh";

const player2: HTMLParagraphElement = document.querySelector(".name1")!;
const player1: HTMLParagraphElement = document.querySelector(".name")!;
const paly: HTMLButtonElement = document.querySelector(".paly")!;
const conb: HTMLDivElement = document.querySelector(".conb")!;
const url = "http://localhost:4000/api/tic-tac-toe/move/";

export function gameCell() {
	for (let i = 0; i < 9; i++) {
		const p: HTMLParagraphElement = document.createElement("p");
		p.className = "p";
		conb.appendChild(p);
	}
}

const reflesh: HTMLButtonElement = document.querySelector(".reflesh")!;

let currentPlayer: string = "X";

export function name(id: any) {
	const cells: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".p")!;
	cells.forEach((cell, i) => {
		cell.addEventListener("click", () => {

				if (cell.innerText === "" ) {
					cell.innerText = currentPlayer;
					currentPlayer = currentPlayer === "X" ? "O" : "X";

			}
			games(id, currentPlayer, i);
			reflesh.addEventListener("click", () => {
				zz(id);
				location.reload();
			});
		});
	});
}

function games(id: any, currentPlayer: any, i: any) {
	let a = `${url}${id}`;
	fetch(a, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			cellIdx: i,
			player: `${currentPlayer}`,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			updateUI(data);
			XO(data);
		})
		.catch((error) => {
			console.error("Error:", error);
		});
}

function updateUI(data: any) {
	player2.innerText = data.data.player2;
	player1.innerText = data.data.player1;

	if (currentPlayer === "X") {
		paly.innerText = `${data.data.player1} = ${currentPlayer}`;
	} else {
		paly.innerText = `${data.data.player2} = ${currentPlayer}`;
	}
}

function XO(data: any) {
	const cells: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".p")!;

	for (let i = 0; i < 9; i++) {
		if (data && data.board && Array.isArray(data.board) && data.board.length === 9) {
			for (let i = 0; i < 9; i++) {
				cells[i].innerText = data.board[i];
			}
		}
	}
}
