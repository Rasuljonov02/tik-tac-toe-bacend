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

export function name(id: any) {
	const cells: NodeListOf<HTMLParagraphElement> = document.querySelectorAll(".p")!;
	let currentPlayer: string = "X";

	cells.forEach((cell, i) => {
		cell.addEventListener("click", () => {
			if (cell.innerText === "") {
				cell.innerText = currentPlayer;
				currentPlayer = currentPlayer === "X" ? "O" : "X";

				paly.innerText = currentPlayer;
			}
			games(id, currentPlayer, i);
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


			if (data.player1 !== undefined) {
							player1.innerText = data.player1;
			}

			if (data.player2 !== undefined) {
							player2.innerText = data.player2;
			}
})
		.catch((error) => {
			console.error("Error:", error);
		});
}
