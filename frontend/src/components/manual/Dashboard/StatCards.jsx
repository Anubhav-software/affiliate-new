import React from "react";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { TbHandClick } from "react-icons/tb";
import { MdOutlineReviews } from "react-icons/md";
import { IoReorderFourSharp } from "react-icons/io5";

export const StatCards = () => {
  return (
    <>
      <Card
        title="Total Clicks"
        value={<><TbHandClick className="inline-block text-xl" /> 120,000</>} 
        pillText="2.75%"
        trend="up"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Total Views"
        value={<><MdOutlineReviews className="inline-block text-xl" /> 17000</>} 
        pillText="1.01%"
        trend="down"
        period="From Jan 1st - Jul 31st"
      />
      <Card
        title="Total Orders"
        value={<><IoReorderFourSharp className="inline-block text-xl" /> 17000</>} 
        pillText="60.75%"
        trend="up"
        period="Previous 365 days"
      />
    </>
  );
};

const Card = ({ title, value, pillText, trend, period }) => {
  return (
    <div className="col-span-4 p-4 rounded-lg border border-stone-300">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-lg">{title}</h3>
          <p className="text-3xl font-semibold">{value}</p>
        </div>

        <span
          className={`text-lg flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />} {pillText}
        </span>
      </div>

      <p className="text-lg text-stone-500">{period}</p>
    </div>
  );
};
