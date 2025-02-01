import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-start gap-4">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WR0Hf9BGQeXSumLqeQiSpBtHVaJu_ELQQbt_nhT0KpcFwep_1XIrWQE&s"
            alt=""
          />
          <h4 className="text-lg font-medium">Anubhav Gupta</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">&#8377;295.2</h4>
          <p className="text-sm text-gray-600">Earned</p>
        </div>
      </div>
      <div className="flex p-3 bg-gray-200 rounded-xl justify-center gap-4 items-start mt-8">
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-time-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin ri-speed-up-fill"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
        <div className="text-center">
          <i className="text-3xl mb-2 font-thin  ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className="text-sm text-gray-600">Hours Online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
