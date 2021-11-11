import { useState } from "react";

const useForm = (validate, user, setConnectionStatus) => {
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		mis: user.mis,
		password: "",
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(validate(values));
		if (Object.keys(errors).length) {
			setConnectionStatus(true);
		}
		setValues({
			mis: user.mis,
			password: "",
		});
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;
