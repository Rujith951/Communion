import React, { useState } from "react";
import Button from "../../components/button";

import "./events.scss";
import { useNavigate } from "react-router-dom";

const filterTags = ["All", "Religious", "Social", "Charity"];

// const events = [
// 	{
// 		image: img,
// 		id: 1,
// 		title: "Community Prayer Gathering",
// 		date: "2024-03-20",
// 		location: "St. Peter's Church, NY",
// 		description: "Join us for a peaceful evening of prayer and reflection.",
// 		category: "Religious",
// 	},
// 	{
// 		image: img,
// 		id: 2,
// 		title: "Food Donation Drive",
// 		date: "2024-03-25",
// 		location: "Central Park, NY",
// 		description: "Help distribute food to the homeless and those in need.",
// 		category: "Charity",
// 	},
// 	{
// 		image: img,
// 		id: 3,
// 		title: "Neighborhood Cleanup",
// 		date: "2024-03-30",
// 		location: "Brooklyn Community Center, NY",
// 		description: "Join hands to clean up and beautify our neighborhood.",
// 		category: "Social",
// 	},
// 	{
// 		image: img,
// 		id: 4,
// 		title: "Easter Sunday Mass",
// 		date: "2024-03-31",
// 		location: "Holy Trinity Church, LA",
// 		description: "Celebrate Easter with a special mass service.",
// 		category: "Religious",
// 	},
// 	{
// 		image: img,
// 		id: 5,
// 		title: "Blood Donation Camp",
// 		date: "2024-04-05",
// 		location: "Red Cross Center, Chicago",
// 		description: "Donate blood and help save lives.",
// 		category: "Charity",
// 	},
// 	{
// 		image: img,
// 		id: 6,
// 		title: "Fundraising Gala for Orphans",
// 		date: "2024-04-10",
// 		location: "Hilton Grand, NY",
// 		description:
// 			"An evening of entertainment and charity fundraising for orphanages.",
// 		category: "Charity",
// 	},
// 	{
// 		image: img,
// 		id: 7,
// 		title: "Annual Cultural Festival",
// 		date: "2024-04-15",
// 		location: "Downtown Hall, San Francisco",
// 		description:
// 			"A celebration of diverse cultures with music, dance, and food.",
// 		category: "Social",
// 	},
// 	{
// 		image: img,
// 		id: 8,
// 		title: "Christmas Carol Night",
// 		date: "2024-12-24",
// 		location: "Greenwood Park, Seattle",
// 		description: "Enjoy a night of Christmas carols and festive spirit.",
// 		category: "Religious",
// 	},
// ];

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
						events?.length == 2 ? "single" : "multiple"
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
