import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = ({ element: Element, ...rest }) => {
	return <Route element={<Element {...rest} />} />;
};

export default PrivateRoute;
