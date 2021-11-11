import { createContext } from "react";

const userContext = createContext({});

export const UserProvider = userContext.Provider;
export default userContext;
