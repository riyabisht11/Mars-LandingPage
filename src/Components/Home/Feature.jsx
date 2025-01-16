import React from "react";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";

function Feature() {
  const array = [
    {
      name: "Suppliers",
      text: [
        "Expand your customer base across borders",
        "Improve own net margin while lowering unit costs ",
        "Readily navigate the consumption pattern of the selected buyers through advanced analytics and ML algorithms",
        "Push specific products without any hassle to the right customers at the right time and at right price",
        "Helps remain competitive in the market as the suppliers can take an informed decision about price while keeping the inventory at the optimum level.",
        "Reduced working capital is required in holding excess inventory",
        "Reduce cost of sales process",
        "Improving net margins while offering lowest price",
      ],
      image: img7,
      bgcolor: "bg-[#FFEF9D]", 
      bulletcolor:"bg-[#FF8A00]",
    },

    {
      name: "Buyers",
      text: [
        "Attain a dollar savings of over 40% on all your procurement",
        "Easy implementation through the cloud based services. Can be used on any device at any time from any corner of the globe ",
        "Advanced Machine Algorithm to auto generate requisition cycle, reducing processing time by 60%.",
        "Direct procurement from whole sellers &amp; manufacturers enables elimination of middleman thereby guarantying the quality at cheapest possible price",
        "Live tracking of the entire supply process with end to end visibility",
        "Robust feedback system from buyers to suppliers ensures maintain quality of the product",
      ],
      image: img8,
      bgcolor: "bg-[#C3F8AA]",
      bulletcolor:"bg-[#64BF1C]",
    },
  ];

  return (
    <>
      {array.map((item, idx) => (
        <div
          className={`${item.bgcolor} max-w-screen-2xl mx-auto px-4 sm:px-10 py-20 space-y-16`}
        >
          <div key={idx} className={`flex justify-between items-center flex-col md:flex-row gap-10`}>
            <div className="left space-y-4 md:space-y-8">
              <div className="heading   ">
                <h1 className="font-ram font-normal text-4xl md:text-7xl max-w-screen-sm text-center md:text-start">
                  {item.name}
                </h1>
              </div>
              <div className="text">
                <ol className="font-pop font-normal text-sm md:text-base lg:text-lg max-w-[600px] opacity-70 space-y-5">
                  {item.text.map((points) => (
                    <div className="flex items-start gap-2">
                      <span className={`${item.bulletcolor} mt-[3px] size-[10px] shrink-0` }></span>
                      <li key={points} className="leading-none">{points}</li>
                    </div>
                  ))}
                </ol>
              </div>
            </div>
            <div
              className={` right  order-first ${
                idx % 2 !== 0 ? "md:-first" : "md:order-last"
              } `}
            >
              <img src={item.image} alt="" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Feature;
