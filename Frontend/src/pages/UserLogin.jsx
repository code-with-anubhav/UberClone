import React from "react";
import uberlogo from "../assets/images/uber-logo.png";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [userLoginData, setUserLoginData] = React.useState({});

  const navigate = useNavigate();

  const { user, setUser } = React.useContext(UserDataContext);

  const submitHandeler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`,
      userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-3 h-screen flex flex-col justify-between">
      <div>
        <img className="w-24 mb-3" src={uberlogo} alt="" />
        <form
          action=""
          onSubmit={(e) => {
            submitHandeler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">What's your email</h3>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base "
          />

          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-base "
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base ">
            Login
          </button>
        </form>

        <p className="text-center">
          New here?{" "}
          <Link to="/signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/captain-login"
          className="bg-[#452B1E] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base "
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
