import { useState } from "react";
import { sendLogin, getUserData } from "../utils/connect";
import { useNavigate } from "react-router-dom";

const useLogin = (validate, setUser) => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [keepLog, setKeepLog] = useState(false);
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// console.log(values);
		setErrors(validate(values));
		if (!Object.keys(errors).length) {
			sendLogin(values);
			setTimeout(() => {
				const userData = getUserData(values);
				setUser(userData);
				navigate("app");
			}, 3000);
		}

		if (!keepLog) {
			window.localStorage.clear();
		}
		setValues({
			email: "",
			password: "",
		});
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
		keepLog,
		setKeepLog,
	};
};

export default useLogin;
