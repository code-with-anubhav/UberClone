import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => props.waitingForDriver(false)}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-fill"></i>
      </h5>

      <div className="flex items-center justify-between">
        <img
          className="h-14"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgrXMBx-CiEehVInR7CV7Lzcz3iutwrGM7LbnnThymiup_txb8qsVP6cpqYd0Ti-ImADI"
          alt=""
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Anubhav</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
