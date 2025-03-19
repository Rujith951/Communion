import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Button from "../../components/button";

import image1 from "../../assets/images/events/eidulFi.webp";
import image2 from "../../assets/images/events/budha.jpg";
import image3 from "../../assets/images/events/ceremony.webp";
import image4 from "../../assets/images/events/church.webp";
import image5 from "../../assets/images/events/hipnotise.webp";
import image6 from "../../assets/images/events/persist.webp";

import "./createEvent.scss";

const imgArray = [image1, image2, image3, image4, image5, image6];
const locations = [
	"Central Park, NY",
	"Brooklyn Bridge, NY",
	"Times Square, NY",
	"Golden Gate Park, San Francisco",
	"Santa Monica Pier, LA",
	"Millennium Park, Chicago",
	"Niagara Falls, Canada",
	"Mount Rushmore, South Dakota",
	"Grand Canyon, Arizona",
	"Yellowstone National Park, Wyoming",
	"Rockefeller Center, NY",
	"Union Square, San Francisco",
	"Venice Beach, LA",
	"Navy Pier, Chicago",
	"Hollywood Walk of Fame, LA",
	"Space Needle, Seattle",
	"Las Vegas Strip, NV",
	"Walt D isney World, Florida",
	"Statue of Liberty, NY",
	"Madison Square Garden, NY",
];

const CreateEvent = () => {
	const navigate = useNavigate();
	const notify = () => toast("Event is added successfully");

	const [addAnim, setAddAnim] = useState(false);
	const [eventData, setEventData] = useState({
		id: "",
		date: "",
		image: "",
		location: "",
		title: "",
		category: "",
	});

	const handleChange = e => {
		const { name, value } = e.target;
		setEventData(prev => ({ ...prev, [name]: value }));
	};

	const handleSubmit = e => {
		e.preventDefault();

		let prevImage = null;

		function getRandomImage() {
			let newImage;
			do {
				newImage = imgArray[Math.floor(Math.random() * imgArray.length)];
			} while (newImage === prevImage);

			prevImage = newImage;
			return newImage;
		}

		const randomLocation =
			locations[Math.floor(Math.random() * locations.length)];

		const storedEvents = JSON.parse(localStorage.getItem("eventsData")) || [];

		const newEvent = {
			id: storedEvents.length
				? storedEvents[storedEvents.length - 1].id + 1
				: 1,
			title: eventData.title,
			date: eventData.date,
			category: eventData.category,
			image: getRandomImage(),
			location: randomLocation,
		};

		const updatedEvents = [...storedEvents, newEvent];
		localStorage.setItem("eventsData", JSON.stringify(updatedEvents));

		setEventData({
			id: "",
			date: "",
			image: "",
			location: "",
			title: "",
			category: "",
		});

		const toastId = notify();

		setTimeout(() => {
			setAddAnim(true);

			setTimeout(() => {
				setAddAnim(false);
			}, 4000);
		}, 3000);
	};

	return (
		<div className="container eventFormContainer">
			<div className="wrapper">
				<h1>Create a New Event</h1>
				<h2>Fill in the details to create your event</h2>
				<div className="wrapperBox">
					<p className="formSubText">
						Fill out the form below with the key details about your event,
						including date, location, and highlights. Make it engaging to
						attract your audience and ensure everything is set for a successful
						launch.
					</p>
					<div className={`explore ${addAnim ? "pulseEffect" : ""}`}>
						<Button
							text="Explore Events"
							showArrow={true}
							onClick={() => navigate("/events")}
						/>
					</div>
				</div>
			</div>

			<form className="eventForm" onSubmit={handleSubmit}>
				<label>
					Title:
					<input
						type="text"
						name="title"
						value={eventData.title}
						onChange={handleChange}
						placeholder="Enter event title"
						required
					/>
				</label>

				<label>
					Date:
					<input
						type="date"
						name="date"
						value={eventData.date}
						onChange={handleChange}
						required
					/>
				</label>

				<label>
					Category:
					<select
						name="category"
						value={eventData.category}
						onChange={handleChange}
						required
					>
						<option value="">Select a category</option>
						<option value="Religious">Religious</option>
						<option value="Social">Social</option>
						<option value="Charity">Charity</option>
					</select>
				</label>
				<Button text="Add Event" type="submit" />
				<ToastContainer autoClose={2000} />
			</form>
		</div>
	);
};

export default CreateEvent;
