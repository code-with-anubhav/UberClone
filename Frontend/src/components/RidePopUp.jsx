import React from "react";

const RidePopUp = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available</h3>

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
        <div className="flex items-center justify-between w-full mt-3">
        <button
            onClick={() => {
              props.setRidePopupPanel(false);
            }}
            className="bg-gray-300 text-gray-700 font-semibold p-2 px-10 rounded-lg"
          >
            Ignore
          </button>

          <button
            onClick={() => {
              props.setConfirmRidePopupPanel(true);
            }}
            className=" bg-green-600 text-white font-semibold p-2 px-10 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
