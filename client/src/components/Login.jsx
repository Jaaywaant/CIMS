import React from "react";
import useLogin from "../hooks/useLogin";
import { validateLog } from "../utils/validate";

const Login = ({ setIsLogin, setUser }) => {
	const { handleChange, handleSubmit, values, errors, keepLog, setKeepLog } =
		useLogin(validateLog, setUser);

	return (
		<div className="login-card card">
			<div className="title">Log in</div>
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
				{errors.email && <span className="error">{errors.email}</span>}
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
				{errors.password && <span className="error">{errors.password}</span>}

				<label className="toggle">
					<input type="checkbox" value={keepLog} name="loggedin" />
					<span>Keep me logged in</span>
				</label>
				<input className="submit" type="submit" value="Login" />
			</form>
			<div className="link">
				Haven't Registered?
				<span onClick={() => setIsLogin(false)}>Register Here</span>
			</div>
		</div>
	);
};

export default Login;
