import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSingup = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [vehicleColor, setVehicleColor] = React.useState("");
  const [vehiclePlate, setVehiclePlate] = React.useState("");
  const [vehicleCapacity, setVehicleCapacity] = React.useState("");
  const [vehicleType, setVehicleType] = React.useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandeler = async (e) => {
    e.preventDefault();
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if (response.status === 201) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
      
    }
    
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleCapacity("");
    setVehicleType("");
  }

  return (
    <div className="py-2 px-3 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://woodyklemmer.com/wp-content/uploads/2019/10/Uber-crown-logo-768x593.png"
          alt="captain-logo"
        />
        <form
          action=""
          onSubmit={(e) => {
            submitHandeler(e);
          }}
        >
          <h3 className="text-lg mb-2 font-medium">
            What's our Captain's name
          </h3>
          <div className="flex gap-4 mb-5">
            <input
              required
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />

            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border placeholder:text-base"
            />
          </div>

          <h3 className="text-lg mb-2 font-medium">
            What's our Captain's email
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

          
            <h3 className="text-lg mb-2 font-medium">Vehicle Information</h3>
            <div className="flex gap-4 mb-5">
            <input
              required
              name="vehicleColor"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />

            <input
              required
              name="vehiclePlate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              type="text"
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />
            </div>

            <div className="flex gap-4 mb-5">
            <input
              required
              name="vehicleCapacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              type="number"
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            />

            <select
              required
              name="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm"
            >
              <option value="" disabled>
              Select Vehicle Type
              </option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="moto">Moto</option>
            </select>
            </div>

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm">
            Create Captain Account
          </button>
        </form>

        <p className="text-center">
          Already have an account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] mt-6 leading-tight">
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

export default CaptainSingup;
