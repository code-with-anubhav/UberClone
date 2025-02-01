import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {

  const [otp, setOtp] = React.useState("")

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePopupPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this Ride to Start
      </h3>

      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-3">
        <div className="flex gap-3 items-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://thumbs.dreamstime.com/b/rider-japanese-art-vector-template-rider-japanese-art-264118356.jpg"
            alt=""
          />
          <h2 className="text-lg font-medium">Anubhav Gupta</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2KM</h5>
      </div>

      <div className="flex gap-2 flex-col justify-between items-center">
        <div className="w-full mt-3 ">
          <div className="flex gap-5 p-3 border-b-2 items-center">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex gap-5 p-3 border-b-2 items-center">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Ahemdabad
              </p>
            </div>
          </div>
          <div className="flex gap-5 p-3 items-center">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">&#8377; 193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >

            <input value={otp} onChange={() => setOtp(e.target.value)} type="text" placeholder="Enter OPP" className="bg-[#eee] px-6 py-4 text-base font-mono rounded-lg w-full mt-3" />

            <Link
              to="/captain-riding"
              className="w-full flex justify-center text-lg mt-3 bg-green-600 text-white font-semibold p-3 rounded-lg"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full mt-1 bg-red-600 text-white text-lg font-semibold p-3 rounded-lg"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
