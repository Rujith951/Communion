import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

import events from "../../assets/images/home/events.jpg";

import "./home.scss";

const Hero = () => {
	const navigate = useNavigate();
	return (
		<section className="hero">
			<div className="container heroContainer">
				<div className="commonHeading">
					<h1>Connect Communities</h1>
					<p>Bridging gaps between faiths with tech and a dash of fun!</p>
				</div>
				<div className="heroWrapper">
					<div className="contentBox">
						<span className="limit">Unlimited Advantages</span>
						<h3>
							Bridging communities through shared beliefs and passions. Uniting
							people across faiths and interests for meaningful connections.
						</h3>
						<p>
							Join us to be part of a community where spirituality meets
							innovation. Together, we'll build a world that's more inclusive,
							engaging, and connected than ever before!
						</p>
						<Button
							showArrow={true}
							text="View Events"
							onClick={() => navigate("/events")}
						/>
					</div>
					<div className="imageBox">
						<div className="imgBox">
							<img src={events} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
