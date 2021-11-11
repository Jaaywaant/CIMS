import { useNavigate } from "react-router-dom";

export const useLogout = (setUser, setIsLoggedIn) => {
	const navigate = useNavigate();

	const logout = () => {
		setUser({});
		window.localStorage.clear();
		// setLs(true);
		setIsLoggedIn(false);
		navigate("/");
	};

	return { logout };
};
