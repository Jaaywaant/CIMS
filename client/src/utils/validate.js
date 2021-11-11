export const validateNet = (values) => {
	const errors = {};
	const mis_regex = /\d+/;

	// console.log(values);
	// if (!values.mis) {
	// 	errors.mis = "MIS is required";
	// } else if (!mis_regex.test(values.mis)) {
	// 	errors.mis = "MIS must be a number";
	// } else if (values.mis.length !== 9) {
	// 	errors.mis = "MIS must be 9 digits";
	// }

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	} else if (values.password !== "123123") {
		errors.password = "Password incorrect";
	}

	return errors;
};

export const validateAtt = (code) => {
	const errors = {};
	const code_regex = /\d+/;

	if (!code) {
		errors.code = "PassCode is required";
	} else if (!code_regex.test(code)) {
		errors.code = "MIS must be a number";
	} else if (code.length !== 6) {
		errors.code = "MIS must be 6 digits";
	}

	return errors;
};

export const validateLog = (values) => {
	const errors = {};
	const mail_regex =
		/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/;

	if (!values.email.trim()) {
		errors.email = "Email is required";
	} else if (!mail_regex.test(values.email.trim())) {
		errors.email = "Enter College email only";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	}

	return errors;
};

export const validateReg = (values) => {
	console.log(values);
	const errors = {};
	const mis_regex = /\d+/;
	const mail_regex =
		/^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$/;

	if (!values.mis.trim()) {
		console.log(values.mis.trim());
		console.log(!values.mis.trim());
		errors.mis = "MIS is required";
	} else if (!mis_regex.test(values.mis.trim())) {
		console.log(!mis_regex.test(values.mis.trim()));
		errors.mis = "MIS must be a number";
	} else if (values.mis.trim().length !== 9) {
		console.log(values.mis.trim());
		errors.mis = "MIS must be 9 digits";
	}

	if (!values.email.trim()) {
		errors.email = "Email is required";
	} else if (!mail_regex.test(values.email.trim())) {
		errors.email = "Enter College email only";
	}

	if (!values.password) {
		errors.password = "Password is required";
	} else if (values.password.length < 6) {
		errors.password = "Password must be at least 6 characters";
	}

	return errors;
};
