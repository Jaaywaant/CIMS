import React from "react";
import useAtt from "../../hooks/useAtt";
import "../../styles/internet.scss";

const InOut = ({ user, inCampus, setInCampus }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		// handle API here
		setInCampus(!inCampus);
	};

	return (
		<>
			<section className="info-text">
				MARK IN if coming in the campus <br />
				MARK OUT if leaving the campus
			</section>

			<section className="io-card">
				<div className="card">
					<form onSubmit={handleSubmit}>
						{inCampus ? (
							<input
								className="submit"
								id="submit-warning"
								type="submit"
								value="Mark Out"
							/>
						) : (
							<input
								className="submit"
								id="submit-success"
								type="submit"
								value="Mark In"
							/>
						)}
					</form>

					<div className={`badge ${inCampus ? "success" : "warning"}`}>
						{inCampus ? "You are in Campus" : "You are not in Campus"}
					</div>
				</div>
			</section>
		</>
	);
};

export default InOut;
