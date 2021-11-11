import axios from "axios";

const apiUrl = "http://localhost:8000/api/user";

export const sendRegister = async (data) => {
	try {
		const res = await axios.post(`${apiUrl}/register`, data);
		alert(`Successfully registered ${data.email}`);
		if (res.status === 400) {
			alert("User already registered");
		} else if (res.status === 401) {
			alert("Invalid email or password OR User already registered");
		} else if (res.status === 402) {
			alert(`Validtion error: ${res.data.err}`);
		}
	} catch (error) {
		console.log(error);
	}
	// console.log(res.data);
};

export const sendLogin = async (data, setUser) => {
	try {
		const res = await axios.post(`${apiUrl}/login`, data);
		// console.log(res.data);
		window.localStorage.setItem("token", res.data);
		// const user = await getUserData(res.data);
		// await setUser(user);
		if (res.status === 400) {
			alert("Invalid email or password OR User not Registered");
		} else if (res.status === 401) {
			alert("Invalid email or password");
		} else if (res.status === 402) {
			alert("User not registered");
		}
	} catch (error) {
		console.log(error);
	}
	// console.log(res.data);
};

export const getUserData = async () => {
	const token = window.localStorage.getItem("token");

	try {
		const res = await axios.get(apiUrl, {
			headers: {
				"auth-token": token,
			},
		});
		// console.log("res ->", res);
		// console.log("res.data ->", res.data);
		// if (res.status === 400) {
		// 	alert("Invalid User");
		// } else if (res.status === 401) {
		// 	alert("Access Denied to User");
		// }
		const { user } = res.data;
		return user;
	} catch (error) {
		// if (res.status === 400) {
		// 	alert("Invalid User");
		// } else if (res.status === 401) {
		// 	alert("Access Denied to User");
		// }
		console.log(error);
		return {};
	}
};
