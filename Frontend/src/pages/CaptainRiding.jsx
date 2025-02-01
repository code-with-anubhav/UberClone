import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/images/uber-logo.png";
import FinishRide from "../components/FinishRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = React.useState(false);
  const finishRidePanelRef = React.useRef(null);

  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          translateY: 0, //transform: 'translateY(0)'
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          translateY: "100%", //transform: 'translateY(100%)'
        });
      }
    },
    [finishRidePanel]
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
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div
        className="h-1/5 p-4 flex items-center justify-between relative bg-yellow-400 pt-10"
        onClick={() => {setFinishRidePanel(true)}}
      >
        <h5
          onClick={() => {}}
          className="p-1 text-center w-[95%] absolute top-0"
        >
          <i className="text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
        </h5>
        <h4 className="text-lg font-medium">4 KM away</h4>
        <button className=" bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed z-10 w-full  bg-white translate-y-full bottom-0 px-3 py-10 pt-10"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
