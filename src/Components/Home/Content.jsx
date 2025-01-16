import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

function Content() {
  const array = [
    {
      name: "Substantial Cost Savings",
      text: [
        "Buy directly from whole sellers & OEMs at contract pricing while ensuring agility, flexibility & scale",
        "Ensure long term gains over spot pricing through “Contract pricing” ",
        "Reduce wastage while increasing forecasting accuracy through machine learning capabilities resulting in better positioning of inventory",
        "Eliminate obsolescence costs while maintaining customer service levels",
      ],
      image: img1,
    },

    {
      name: "Group Resourcing",
      text: [
        "Coordinate with other businesses for bulk resourcing ",
        "Leverage from buyer networks to learn about other buyer’s products & vendor ratings",
        "Discover more opportunities by evaluating alternate vendors & average product pricing",
      ],
      image: img2,
    },

    {
      name: "Proactive Procurement",
      text: [
        "Track your assets under single dashboard. ",
        "Bridge the gap between maintenance, repair & operations. Make spares procurement based on value & not urgency",
        "Identify specific vendors of parts & equipment & send the requests all of the way through fulfilment",
        "Improve financial performance based on smarter procurement &amp; data that provides visibility in to how you buy and what you need to keep your equipment running",
      ],
      image: img3,
    },

    {
      name: "Artificial Intelligence & Machine Learning",
      text: [
        "βM@RS – AI translates real time data in to smarter, faster & profitable business decisions",
        "Leverages industry leading algorithms to identify spending patterns &amp; brand driven consumer habits while ensuring processing of precise data to meet your requirements",
        "Transforms the vision of a truly autonomous platform in to reality. Machine Learning identifies & recommends the right supplier for fulfilment and help you close the deals faster",
      ],
      image: img4,
    },

    {
      name: "Data Driven Value",
      text: [
        "Automated procurement compares vendors & products on multiple matrix such as availability, delivery time & product pricing for immediate purchasing",
        "The procurement platform brings all the data you need to make better data driven procurement decisions, ensuring best value for your business",
      ],
      image: img5,
    },

    {
      name: "Insights & Analytics",
      text: [
        "Predictive KPIs help you to identify annual budget deviations & future overspends. Using our intuitive architecture, create timely, meaningful & accessible information as well as automated insights",
        "Dynamic segmentation of spends across multiple categories better reflect the value of each purchase",
      ],
      image: img6,
    },
  ];

  return (
    <div className=" max-w-screen-2xl mx-auto px-4 sm:px-10 py-20 space-y-16">
      {array.map((item, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center flex-col md:flex-row gap-10"
        >
          <div className="left">
            <div className="heading ">
              <h1 className="font-ram font-normal text-4xl lg:text-7xl max-w-screen-sm">
                {item.name}
              </h1>
            </div>
            <div className="text">
              <ol className="font-pop font-normal text-sm md:text-base lg:text-lg max-w-[600px] opacity-70 space-y-5">
                {item.text.map((points) => (
                  <div key={points} className="flex gap-2">
                    <span
                      className={`bg-[#4F80FF] mt-[3px] size-[10px] shrink-0`}
                    ></span>
                    <li className="leading-none">{points}</li>
                  </div>
                ))}
              </ol>
            </div>
          </div>
          <div
            className={` right order-first
                ${
              idx % 2 !== 0 ? "md:order-first" : "md:order-last"
            } `}
          >
            <img src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Content;
