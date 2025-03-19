import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";

import logo from "../../assets/images/common/Logocommunion.png";

import "./header.scss";

const links = ["Upcoming Events", "Create Event"];

const Header = () => {
	const navigate = useNavigate();
	const [showNavs, setShowNavs] = useState(false);

	return (
		<header className="header">
			<div className="container headerContainer">
				<p className="headerLogo" onClick={() => navigate("/")}>
					<img src={logo} alt="logo" />
				</p>
				<nav className={`headerNavs ${showNavs ? "mobileNavs" : ""}`}>
					<Link className="link" to="/" onClick={() => setShowNavs(false)}>
						Home
					</Link>

					<div className="linkWrap">
						<span>
							Events <span className="arrow">›</span>
						</span>
						<div className="links">
							{links.map(link => (
								<Link
									onClick={() => setShowNavs(false)}
									className="link"
									to={link == "Upcoming Events" ? "/events" : "/eventform"}
								>
									{link}
								</Link>
							))}
						</div>
					</div>
					<Link className="link" onClick={() => setShowNavs(false)}>
						About
					</Link>
				</nav>
				<div className="headerButtonBox">
					<Button text="Sign in" borderRadius="40px" />
				</div>
				<div
					className={`hamburger ${showNavs ? "cross" : ""}`}
					onClick={() => setShowNavs(prev => !prev)}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</header>
	);
};

export default Header;
