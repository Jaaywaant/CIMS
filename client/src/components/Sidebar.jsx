import React, { useState, useEffect } from "react";

import "../styles/sidebar.scss";
import { useLogout } from "../hooks/useLogout";

const Sidebar = ({ page, setPage, user, setUser, setIsLoggedIn }) => {
	const [name, setName] = useState("");
	const { logout } = useLogout(setUser, setIsLoggedIn);

	useEffect(() => {
		// console.log("sidebar user.email -> ", email);
		if (user.email !== undefined) {
			let mailParts = user.email?.split("@");
			let name = mailParts[0];
			name = name?.replace(/\d/g, "");
			setName(name);
		} else {
			setName("Student");
		}
		// console.log("name -> ", name);
	}, [user.email]);

	return (
		<div className="sidebar">
			<section className="user">
				<div className="name">{name}</div>
				<div className="mis">{user.mis}</div>
			</section>
			<section className="nav-links">
				<ul>
					<li
						className={page === "net" ? "link active" : "link"}
						onClick={() => setPage("net")}>
						Internet Access
					</li>
					<li
						className={page === "att" ? "link active" : "link"}
						onClick={() => setPage("att")}>
						Attendence
					</li>
					<li
						className={page === "io" ? "link active" : "link"}
						onClick={() => setPage("io")}>
						College in-out
					</li>
					<li
						className={page === "lib" ? "link active" : "link"}
						onClick={() => setPage("lib")}>
						Library
					</li>
				</ul>
			</section>
			<section className="logo">
				<img src="./assets/logo_cims_clear.png" alt="logo" />
				<button onClick={logout}>Logout</button>
			</section>
		</div>
	);
};

export default Sidebar;
