import React, { useState } from "react";
import Button from "../../components/button";

import "./events.scss";
import { useNavigate } from "react-router-dom";

const filterTags = ["All", "Religious", "Social", "Charity"];

const Events = () => {
	const navigate = useNavigate();
	const [activeTag, setActiveTag] = useState(0);
	const [events, setEvents] = useState(
		JSON.parse(localStorage.getItem("eventsData")) || []
	);

	const filteredEvents =
		activeTag === 0
			? events
			: events.filter(event => event.category === filterTags[activeTag]);

	console.log(filteredEvents, "filter");

	return (
		<div className="events">
			<div className="container eventsContainer">
				<h1>We Helped Communities Connect & Flourish</h1>
				<h2>✦ Upcoming Events</h2>

				<div className="tags">
					{filterTags.map((tag, index) => (
						<div
							key={index}
							className="tagButton"
							onClick={() => setActiveTag(index)}
							style={{
								backgroundColor: index == activeTag && "rgba(0,0,0,.7)",
								color: index == activeTag && "#fff",
							}}
						>
							{tag}
						</div>
					))}
				</div>

				<div
					className={`eventsWrapper ${
						filteredEvents?.length <= 2 ? "single" : "multiple"
					}`}
				>
					{filteredEvents.map(event => (
						<div key={event.id} className="eventCard">
							<div className="eventImage">
								<img src={event.image} alt={event.title} />
							</div>
							<div className="eventDetails">
								<div className="content">
									<h3>{event.title}</h3>
									<p className="eventDate">{event.date}</p>
									<p className="eventLocation">{event.location}</p>
									<p className="eventDescription">{event.description}</p>
									<span className="eventCategory">{event.category}</span>
								</div>
								<div className="buttonBox">
									<Button text="Evvent Details" showArrow={true} />
								</div>
							</div>
						</div>
					))}
				</div>
				<div className="addEvent" onClick={() => navigate("/eventform")}>
					<Button text="Add Event" />
				</div>
			</div>
		</div>
	);
};

export default Events;
