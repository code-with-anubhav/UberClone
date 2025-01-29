import React from "react";
import uberlogo from "../assets/images/uber-logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [panelOpen, setPanelOpen] = React.useState(false);
  const panelRef = React.useRef(null);
  const panelCloseRef = React.useRef(null);
  const vehiclePanelRef = React.useRef(null);
  const confirmRidePanelRef = React.useRef(null);
  const [vehiclePanel, setVehiclePanel] = React.useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = React.useState(false);
  const [vehicleFound, setVehicleFound] = React.useState(false);
  const vehicleFoundRef = React.useRef(null);
  const [waitingForDriver, setWaitingForDriver] = React.useState(false);
  const waitingForDriverRef = React.useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 20,
        });

        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-24 absolute " src={uberlogo} alt="Uber logo" />
      <div className="h-screen w-screen">
        {/* image fro temporary  use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] bg-white relative p-6">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute top-6 right-6 text-2xl opacity-0 cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            {/* <div className="line absolute h-16 w-1 top-[30%] left-7 bg-gray-700 rounded-full"></div> */}
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Add a pick-up location"
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-5"
            />
            <input
              type="text"
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter your destination"
              className="bg-[#eee] px-8 py-2 text-base rounded-lg w-full mt-3"
            />
          </form>
        </div>
        <div ref={panelRef} className="h-[0] opacity-0 bg-white">
          <LocationSearchPanel
            // panelOpen={panelOpen}
            setPanelOpen={setPanelOpen}
            // vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-10 pt-10"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      {/* Ride Panel */}
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-6 pt-10"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      {/* Looking For A Driver */}
      <div
        ref={vehicleFoundRef}
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-6 pt-10"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>

      {/* Waiting For a Driver */}
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 w-full bg-white bottom-0 px-3 py-6 pt-10"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
