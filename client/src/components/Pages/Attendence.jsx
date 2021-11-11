import React from "react";
import useAtt from "../../hooks/useAtt";
import { validateAtt } from "../../utils/validate";
import "../../styles/internet.scss";

const Attendence = ({ user, inClass, setInClass }) => {
	const { handleChange, handleSubmit, code, errors } = useAtt(
		validateAtt,
		user,
		setInClass,
		inClass,
	);

	return (
		<>
			<section className="info-text">
				Enter the PassCode Shared by the instructor here <br />
				and mark in yourself.
			</section>

			<section className="att-card">
				<div className="card">
					<form onSubmit={handleSubmit}>
						<label>
							<span>PassCode</span>
							<input
								type="text"
								value={code}
								name="mis"
								onChange={handleChange}
								placeholder="Code"
							/>
						</label>
						{errors.code && <span className="error">{errors.code}</span>}

						{inClass ? (
							<input
								className="submit"
								id="submit-danger"
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

					{inClass && <div className="badge success">You are in a class</div>}
				</div>
			</section>
		</>
	);
};

export default Attendence;
