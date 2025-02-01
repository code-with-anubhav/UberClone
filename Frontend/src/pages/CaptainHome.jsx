import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/uber-logo.png";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = React.useState(true);
  const ridePopupPanelRef = React.useRef(null);

  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = React.useState(false);
  const confirmRidePopupPanelRef = React.useRef(null);

  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [ridePopupPanel]
  );

  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [confirmRidePopupPanel]
  );

  return (
    <div className="h-screen">
      <div className="fixed w-screen px-2 top-0 flex items-center justify-between">
        <img className="w-24" src={image} alt="" />
        <Link
          to="/captain-home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full "
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>
      {/* RidePopUp */}
      <div
        ref={ridePopupPanelRef}
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-10 pt-10"
      >
        <RidePopUp
          setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
        />
      </div>
      {/* ConfirmRidePopUp */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed z-10 w-full h-screen bg-white translate-y-full bottom-0 px-3 py-10 pt-10"
      >
        <ConfirmRidePopUp
          setConfirmRidePopupPanel={setConfirmRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
