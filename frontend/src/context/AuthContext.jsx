import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

	  useEffect(() => {
    console.log("AuthUser in AuthContext:", authUser);
  }, [authUser]);

  useEffect(() => {
    if (authUser) {
      localStorage.setItem("chat-user", JSON.stringify(authUser));
    } else {
      localStorage.removeItem("chat-user");
    }
  }, [authUser]);

	return <AuthContext.Provider value={{ authUser, setAuthUser }}>
		{children}
		</AuthContext.Provider>;
};

// import { createContext, useContext,useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const useAuthContext = () => useContext(AuthContext);

// export const AuthContextProvider = ({ children }) => {
//   const [authUser, setAuthUser] = useState(() => {
//     const storedUser = localStorage.getItem("chat-user");
//     return storedUser ? JSON.parse(storedUser) : null;
//   });

//   useEffect(() => {
//     console.log("AuthUser in AuthContext:", authUser);
//   }, [authUser]);

//   useEffect(() => {
//     if (authUser) {
//       localStorage.setItem("chat-user", JSON.stringify(authUser));
//     } else {
//       localStorage.removeItem("chat-user");
//     }
//   }, [authUser]);

//   return (
//     <AuthContext.Provider value={{ authUser, setAuthUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };