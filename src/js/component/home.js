import React, { useState } from "react";

//create your first component
export function Home() {
	const [selected, setSelected] = useState("yellow");
	let redShadow = "";
	if (selected == "red") redShadow = "shadowlight";
	let yellowShadow = "";
	if (selected == "yellow") yellowShadow = "shadowlight";
	let greenShadow = "";
	if (selected == "green") greenShadow = "shadowlight";
	return (
		<div className="toptrafficlight">
			<div
				className={"red " + redShadow}
				onClick={() => setSelected("red")}
			/>
			<div
				className={"yellow " + yellowShadow}
				onClick={() => setSelected("yellow")}
			/>
			<div
				className={"green " + greenShadow}
				onClick={() => setSelected("green")}
			/>
		</div>
	);
}
