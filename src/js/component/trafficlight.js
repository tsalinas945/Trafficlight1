import React from "react";

export class TrafficLight extends React.Component {
	constructor() {
		super();
		this.state = {
			selectedlight: null
		};
	}

	render() {
		let redShadow = "";
		if (this.state.selectedlight == "red") redShadow = "shadowlight";
		let yellowShadow = "";
		if (this.state.selectedlight == "yellow") yellowShadow = "shadowlight";
		let greenShadow = "";
		if (this.state.selectedlight == "green") greenShadow = "shadowlight";
		return (
			<div>
				<div className="toptrafficlight" />
				<div className="trafficbase">
					<div
						className={"red light " + redShadow}
						onClick={() => this.setState({ selectedlight: "red" })}
					/>
					<div
						className={"yellow light " + yellowShadow}
						onClick={() =>
							this.setState({ selectedlight: "yellow" })
						}
					/>
					<div
						className={"green light " + greenShadow}
						onClick={() =>
							this.setState({ selectedlight: "yellow" })
						}
					/>
				</div>
			</div>
		);
	}
}
