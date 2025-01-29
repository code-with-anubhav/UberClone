import React from "react";
import uberlogo from "../assets/images/uber-logo.png";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  // const [userSignUpData, setUserSignUpData] = React.useState({});

  const navigate = useNavigate();

  const {user, setUser} = React.useContext(UserDataContext);

  const submitHandeler = async (e) => {
    e.preventDefault();
   
    const newUser = {
      fullname: {
        firstname: firstname,
        lastname: lastname,
      },
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
    console.log(response)

    if (response.status === 201) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src={uberlogo}
          alt="captain-logo"
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandeler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">
            What's your name
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />

            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border placeholder:text-base"
            />
          </div>

          <h3 className="text-lg mb-2 font-medium">
            What's your email
          </h3>
          <input
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full placeholder:text-base"
          />

          <h3 className="text-lg mb-2 font-medium">Enter Password</h3>
          <input
            type="password"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full placeholder:text-base"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm">
            Create an account
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline text-blue-800">Google Privacy Policy</span>{" "}
          and{" "}
          <span className="underline text-blue-800">
            Terms of Service apply
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default UserLogin;
