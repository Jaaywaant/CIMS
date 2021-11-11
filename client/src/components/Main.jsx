import React, { useState, useEffect } from "react";

import Sidebar from "./Sidebar";
import Internet from "./Pages/Internet";
import Library from "./Pages/Library";
import Attendence from "./Pages/Attendence";
import InOut from "./Pages/InOut";

import "../styles/main.scss";
import { getUserData } from "../utils/connect";

const Main = ({ user, setUser, setIsLoggedIn }) => {
	// user:
	//  {dateRegistered: "2021-11-10T11:29:28.007Z";
	//  email: "test2@iiitp.ac.in";
	//  mis: 124124124;
	//  password: "$2a$10$hTNSCB9KEJDegqz8Yo171OsSTcjWnTFjsi.IUCRoEeXuhsa/WFunO";
	//  __v: 0;
	//  _id: "618bad18bd07a025bbef6633";}

	const [page, setPage] = useState("net");
	const [connectionStatus, setConnectionStatus] = useState(false);
	const [inClass, setInClass] = useState(false);
	const [inCampus, setInCampus] = useState(true);
	// 'net', 'lib', 'att', 'io'

	const displayContent = () => {
		switch (page) {
			case "net":
				return (
					<Internet
						user={user}
						connectionStatus={connectionStatus}
						setConnectionStatus={setConnectionStatus}
					/>
				);
			case "lib":
				return <Library user={user} />;
			case "att":
				return (
					<Attendence user={user} inClass={inClass} setInClass={setInClass} />
				);
			case "io":
				return (
					<InOut user={user} inCampus={inCampus} setInCampus={setInCampus} />
				);
			default:
				return (
					<Internet
						user={user}
						connectionStatus={connectionStatus}
						setConnectionStatus={setConnectionStatus}
					/>
				);
		}
	};

	const setUserData = async () => {
		try {
			const data = await getUserData();
			console.log("data ->", data);
			setUser(data);
		} catch (err) {
			alert(err);
		}
	};

	useEffect(() => {
		setUserData();
		// console.log("user -> ", user);
	}, []);

	return (
		<main>
			<Sidebar
				page={page}
				setPage={setPage}
				user={user}
				setUser={setUser}
				// setLs={setLs}
				setIsLoggedIn={setIsLoggedIn}
			/>
			<section className="content">{displayContent()}</section>
		</main>
	);
};

export default Main;
