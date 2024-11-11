// import React, { createContext, useState, useEffect } from 'react';
// import { Client, Account } from 'appwrite';
// import { useNavigate } from 'react-router-dom';
// //import env from "react-dotenv";

// const AuthContext = createContext();

// const client = new Client();
// client.setProject('6700a3ac001ac6f2f042'); //env.REACT_APP_PROJECT_ID
// const account = new Account(client);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate(); // Hook for programmatic navigation

//     // Check if user is logged in
//     const getUser = async () => {
//         try {
//             const response = await account.get();
//             setUser(response);
//             // Redirect to dashboard if user is logged in
//             navigate('/dashboard');
//         } catch (error) {
//             setUser(null); // User not logged in
//         }
//         setLoading(false);
//     };

//     useEffect(() => {
//         getUser();
//     }, []);

//     // Login function
//     const login = async (email, password) => {
//         try {
//             // Check if user is already logged in
//             const currentSession = await account.getSession('current');
//             if (currentSession) {
//                 console.log("Session already active. Redirecting...");
//                 navigate('/dashboard')
//                 return;
//             }
//         } catch (error) {
//             // no session exists, proceed with login
//         };

//         try {
//             await account.createEmailPasswordSession(email, password);
//             console.log("User has been Logged In:");
//             getUser();
//             navigate('/dashboard'); // Redirect to Dashboard after successful login
//         } catch (error) {
//             console.error('Login failed:', error.message);
//         }
//     };

//     // Logout function
//     const logout = async () => {
//         try {
//             await account.deleteSession('current');
//             setUser(null);
//             navigate('/login')
//         } catch (error) {
//             console.error('Logout failed:', error.message);
//         }
//     };

//     const value = {
//         user,
//         login,
//         logout,
//         loading
//     };

//     return (
//         <AuthContext.Provider value={value}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export { AuthProvider, AuthContext };
