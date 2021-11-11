import { useState } from "react";
import { sendRegister, sendLogin, getUserData } from "../utils/connect";
import { useNavigate } from "react-router-dom";

const useReg = (validate, setUser) => {
	const navigate = useNavigate();
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		email: "",
		mis: "",
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		setErrors(validate(values));
		// console.log(Object.keys(errors).length);
		// console.log(errors);

		if (!Object.keys(errors).length) {
			sendRegister(values);
			setTimeout(() => {
				sendLogin({ email: values.email, password: values.password });
				setTimeout(() => {
					const userData = getUserData(values);
					setUser(userData);
					navigate("app");
				}, 2000);
				setValues({
					email: "",
					mis: "",
					password: "",
				});
			}, 3000);
		}
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useReg;
