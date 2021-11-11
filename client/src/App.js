import { useState, useEffect } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

import "./styles/App.scss";

import Auth from "./components/Auth";
import NotFound from "./components/NotFound";
import Main from "./components/Main";

const App = () => {
	const [isLogin, setIsLogin] = useState(true);
	const [user, setUser] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [isLsClear, setIsLsClear] = useState(true);

	useEffect(() => {
		if (window.localStorage.getItem("token") !== null) {
			setIsLoggedIn(true);
			// setIsLsClear(false);
		}
	}, [isLoggedIn]);

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="*" element={<NotFound user={user} />} />
					{isLoggedIn ? (
						<Route path="/" element={<Navigate replace to="/app" />} />
					) : (
						<Route
							path="/"
							element={
								<Auth
									isLogin={isLogin}
									setIsLogin={setIsLogin}
									setUser={setUser}
								/>
							}
							exact
						/>
					)}
					<Route
						path="/app"
						exact
						element={
							<Main
								user={user}
								setUser={setUser}
								// setLs={setIsLsClear}
								setIsLoggedIn={setIsLoggedIn}
							/>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;
