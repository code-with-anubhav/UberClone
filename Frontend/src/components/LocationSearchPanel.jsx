import React from "react";

const LocationSearchPanel = (props) => {
  // Sample array of location
  const location = [
    {
      id: 1,
      address:
        "24b , Near Kapoor's cafe, near Sheriyans Coading School; Bhopal",
    },
    {
      id: 2,
      address:
        "22b , Near Malhotra's cafe, near Sheriyans Coading School; Bhopal",
    },
    {
      id: 3,
      address:
        "20b , Near Singhaniya's cafe, near Sheriyans Coading School; Bhopal",
    },
    {
      id: 4,
      address: "15b , Near Gupta's cafe, near Sheriyans Coading School; Bhopal",
    },
  ];

  return (
    <div>
      {/* this is just a sample data */}

      {location.map((loc, idx) => (
        <div
          onClick={() => {
            props.setVehiclePanel(true);
            props.setPanelOpen(false);
          }}
          key={idx}
          className="flex items-center border-2 p-1 rounded-xl border-gray-100 active:border-black mb-2 justify-start gap-4"
        >
          <h2 className="bg-[#eee] h-9 w-14 flex items-center justify-center rounded-full ">
            <i className="ri-map-pin-user-fill"></i>
          </h2>
          <h4 className=" tracking-tighter font-medium">{loc.address}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
