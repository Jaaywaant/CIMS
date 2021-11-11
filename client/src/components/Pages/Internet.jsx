import React from "react";
import useForm from "../../hooks/useform";
import { validateNet } from "../../utils/validate";

import "../../styles/internet.scss";

const Internet = ({ user, connectionStatus, setConnectionStatus }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		validateNet,
		user,
		setConnectionStatus,
	);

	return (
		<>
			<section className="info-text">
				Enter your MIS and passwords here to access the internet.
			</section>
			<section className="auth-card">
				<div className="card">
					<form onSubmit={handleSubmit}>
						<label>
							<span>MIS</span>
							<input
								type="text"
								value={values.mis}
								name="mis"
								onChange={handleChange}
								placeholder="MIS"
								disabled
							/>
						</label>
						{errors.mis && <span className="error">{errors.mis}</span>}
						<label>
							<span>Password</span>
							<input
								type="password"
								value={values.password}
								name="password"
								onChange={handleChange}
								placeholder="Password"
							/>
						</label>
						{errors.password && (
							<span className="error">{errors.password}</span>
						)}

						<input
							className="submit"
							id={connectionStatus ? "disabled submit" : "submit"}
							type="submit"
							value="Connect"
						/>
					</form>
					<div className={`badge ${connectionStatus ? "success" : "danger"}`}>
						{connectionStatus ? "O - Connected" : "X - Not Connected"}
					</div>
				</div>
			</section>
		</>
	);
};

export default Internet;
