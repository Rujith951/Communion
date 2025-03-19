import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/home";
import Events from "./containers/events";
import Header from "./components/header/Header";
import CreateEvent from "./containers/createEvent";

import image1 from "./assets/images/events/eidulFi.webp";
import image2 from "./assets/images/events/budha.jpg";
import image3 from "./assets/images/events/ceremony.webp";

const data = [
	{
		image: image1,
		id: 1,
		title: "Community Prayer Gathering",
		date: "2024-03-20",
		location: "St. Peter's Church, NY",
		description: "Join us for a peaceful evening of prayer and reflection.",
		category: "Religious",
	},
	{
		image: image2,
		title: "Food Donation Drive",
		date: "2024-03-25",
		location: "Central Park, NY",
		description: "Help distribute food to the homeless and those in need.",
		category: "Charity",
	},
	{
		image: image3,
		id: 3,
		title: "Neighborhood Cleanup",
		date: "2024-03-30",
		location: "Brooklyn Community Center, NY",
		description: "Join hands to clean up and beautify our neighborhood.",
		category: "Social",
	},
];

const App = () => {
	const storedData = JSON.parse(localStorage.getItem("eventsData"));

	useEffect(() => {
		if (!storedData?.length) {
			localStorage.setItem("eventsData", JSON.stringify(data));
		}
	}, []);

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/events" element={<Events />} />
				<Route path="/eventform" element={<CreateEvent />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
