import React from "react";
import Login from "./Login";
import Register from "./Register";

import "../styles/auth.scss";

const Auth = ({ isLogin, setIsLogin, setUser }) => {
	return (
		<div className="auth">
			<section className="logo">
				<img src="./assets/logo_cims.png" alt="CIMS logo" />
			</section>
			<section className="auth-section">
				{isLogin ? (
					<Login setIsLogin={setIsLogin} setUser={setUser} />
				) : (
					<Register setIsLogin={setIsLogin} setUser={setUser} />
				)}
			</section>
		</div>
	);
};

export default Auth;
