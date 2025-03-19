import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/home";
import Events from "./containers/events";
import Header from "./components/header/Header";
import CreateEvent from "./containers/createEvent";

const App = () => {
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
