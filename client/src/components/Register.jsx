import React from "react";
import useReg from "../hooks/useReg";
import { validateReg } from "../utils/validate";

const Register = ({ setIsLogin, setUser }) => {
	const { handleChange, handleSubmit, values, errors } = useReg(
		validateReg,
		setUser,
	);

	return (
		<div className="register-card card">
			<div className="title">Register</div>
			<form action="" onSubmit={handleSubmit}>
				<label>
					<span>College Email-ID</span>
					<input
						type="email"
						name="email"
						placeholder="College Email-ID"
						onChange={handleChange}
						value={values.email}
					/>
				</label>
				<span className="error">{errors.email}</span>
				<label>
					<span>MIS</span>
					<input
						type="text"
						name="mis"
						placeholder="MIS"
						onChange={handleChange}
						value={values.mis}
					/>
				</label>
				<span className="error">{errors.mis}</span>
				<label>
					<span>Password</span>
					<input
						type="password"
						name="password"
						placeholder="Password"
						onChange={handleChange}
						value={values.password}
					/>
				</label>
				<span className="error">{errors.password}</span>
				<input className="submit" type="submit" value="Register" />
			</form>
			<div className="link">
				Already Registered?
				<span onClick={() => setIsLogin(true)}>Login Here</span>
			</div>
		</div>
	);
};

export default Register;
