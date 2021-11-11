import { useState } from "react";

const useAtt = (validate, user, setInClass, inClass) => {
	const [errors, setErrors] = useState({});
	const [code, setCode] = useState("");

	const handleChange = (event) => {
		const { value } = event.target;
		setCode(value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		// handle API here
		setErrors(validate(code));
		if (!Object.keys(errors).length) {
			setInClass(!inClass);
		}
		setCode("");
	};

	return {
		handleChange,
		handleSubmit,
		code,
		errors,
	};
};

export default useAtt;
