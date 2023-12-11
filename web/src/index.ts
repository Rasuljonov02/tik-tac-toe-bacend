import "./css/main.css";
import "./ts/index";
import "./oyints/index";

import { cell } from "./ts/cell";

export async function AllData() {
	try {
		const response = await fetch("http://localhost:4000/api/tic-tac-toe");

		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		const da = await response.json();
		// console.log(da);
		cell(da.data);
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

AllData();
