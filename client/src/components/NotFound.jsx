import React from "react";
import { Link } from "react-router-dom";

import "../styles/404.scss";

const NotFound = ({ user }) => {
	return (
		<div className="nf">
			<div className="n404">
				<section className="picture">
					<img src="./assets/n404.png" alt="404" />
				</section>
				<div className="right">
					<section className="text">
						<p>Look like you are lost!</p>
					</section>
					<section className="btns">
						{!Object.keys(user).length ? (
							<Link to="/">Go back here</Link>
						) : (
							<Link to="/app">To Home</Link>
						)}
					</section>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
