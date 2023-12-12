import { name as games,gameCell } from "../oyints/oyin";
import { cel } from "./bot-yoq";


const container: HTMLDivElement = document.querySelector(".contaner")!;

export function cell(data: any) {
	console.log("cell", data);

	for (let i = 0; i < data.length; i++) {
		const div: HTMLDivElement = document.createElement("div");
		const h2: HTMLParagraphElement = document.createElement("h2");
		h2.innerText = `${data[i].player1} vs ${data[i].player2}`;
		h2.className = "cells";
		h2.addEventListener("click", () => {
			gameCell()
			games(data[i].id);
			cel()
			console.log(data[i].id);
		});
		container.appendChild(div);
		div.appendChild(h2);
	}
}
