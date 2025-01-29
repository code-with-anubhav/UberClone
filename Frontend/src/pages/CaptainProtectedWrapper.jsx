import React from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectedWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const { captain, setCaptain } = React.useContext(CaptainDataContext);

  React.useEffect(() => {
    if (token === null) {
      navigate("/captain-login");
    }
  }, [token, navigate]);

  axios
    .get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        setIsLoading(false);
      }
    }).catch((error) => {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/captain-login");
    })

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{children}</div>;
};

export default CaptainProtectedWrapper;
