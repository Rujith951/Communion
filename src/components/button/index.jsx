import React from "react";

import download from "../../assets/images/common/download.png";

import "./button.scss";

const Button = ({
	onClick = () => {},
	text,
	showArrow = false,
	borderRadius,
	type,
}) => {
	return (
		<button
			type={type}
			onClick={onClick}
			className="hover-button"
			style={{ borderRadius: borderRadius }}
		>
			{text}
			{showArrow && (
				<span className="arrow">
					<img src={download} alt="" />
				</span>
			)}
		</button>
	);
};

export default Button;
