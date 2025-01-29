import React from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const token = localStorage.getItem("token");

  const { user, setUser } = React.useContext(UserDataContext);

  const navigate = useNavigate();

  React.useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  }, [token, navigate]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setUser(data.user);
        setIsLoading(false);
      }
    })
    .catch((error) => {
      console.error("Failed to authenticate:", error);
      localStorage.removeItem("token");
      navigate("/login");
    });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default UserProtectedWrapper;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { UserDataContext } from "../context/UserContext";
// import axios from "axios";

// const UserProtectedWrapper = ({ children }) => {
//   const [isLoading, setIsLoading] = React.useState(true);

//   const token = localStorage.getItem("token");

//   const { user, setUser } = React.useContext(UserDataContext);

//   const navigate = useNavigate();

//   React.useEffect(() => {
//     // If token is not available, redirect to login
//     if (!token) {
//       navigate("/login");
//       return;
//     }

//     // Verify token and fetch user profile
//     const fetchProfile = async () => {
//       try {
//         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.status === 200) {
//           setUser(response.data.user); // Set the user data
//           setIsLoading(false); // Stop loading
//         }
//       } catch (error) {
//         console.error("Failed to authenticate:", error);
//         localStorage.removeItem("token"); // Remove invalid token
//         navigate("/login"); // Redirect to login
//       }
//     };

//     fetchProfile();
//   }, [token, navigate, setUser]);

//   // Show loading state until authentication is verified
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   return <div>{children}</div>;
// };

// export default UserProtectedWrapper;
