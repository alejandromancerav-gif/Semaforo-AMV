import React from "react";
import TrafficLight from "./TrafficLight";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container text-center mt-5">
			<TrafficLight/>
		</div>
	);
};

export default Home;