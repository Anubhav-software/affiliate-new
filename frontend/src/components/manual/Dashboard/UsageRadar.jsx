// "use client";

// import React from "react";
// import { FiEye } from "react-icons/fi";
// import {
//   Radar,
//   RadarChart,
//   PolarGrid,
//   Legend,
//   PolarAngleAxis,
//   PolarRadiusAxis,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";

// // Radar chart data
// const data = [
//   {
//     feature: "Tracking",
//     mobile: 15,
//     desktop: 110,
//     max: 150,
//   },
//   {
//     feature: "Builder",
//     mobile: 130,
//     desktop: 90,
//     max: 150,
//   },
//   {
//     feature: "Schedule",
//     mobile: 86,
//     desktop: 130,
//     max: 150,
//   },
//   {
//     feature: "AI Train",
//     mobile: 125,
//     desktop: 40,
//     max: 150,
//   },
//   {
//     feature: "Interval",
//     mobile: 148,
//     desktop: 90,
//     max: 150,
//   },
// ];

// // UsageRadar component
// export const UsageRadar = () => {
//   return (
//     <div className="col-span-4 overflow-hidden rounded border border-stone-300">
//       <div className="p-4">
//         <h3 className="flex items-center gap-1.5 font-medium">
//           <FiEye /> Usage
//         </h3>
//       </div>

//       <div className="h-64 px-4">
//         <ResponsiveContainer width="100%" height="100%">
//           <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
//             <PolarGrid />
//             <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
//             <PolarRadiusAxis angle={30} domain={[0, 150]} />
//             <Radar
//               name="Mobile"
//               dataKey="mobile"
//               stroke="#18181b"
//               fill="#18181b"
//               fillOpacity={0.2}
//             />
//             <Radar
//               name="Desktop"
//               dataKey="desktop"
//               stroke="#5b21b6"
//               fill="#5b21b6"
//               fillOpacity={0.2}
//             />
//             <Tooltip
//               wrapperClassName="text-sm rounded"
//               labelClassName="text-xs text-stone-500"
//             />
//             <Legend />
//           </RadarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };
import './styles.css';
export const UsageRadar = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded-lg border border-stone-300 shadow-lg bg-white custom-border-line">
      <div className="p-4">
        <h3 className="flex items-center text-lg gap-1.5 font-semibold text-gray-800">Get in Touch with us!</h3>
      </div>
      <div className="p-4">
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Your Name"
            />
          </div>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Your Email"
            />
          </div>
          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-base font-medium text-gray-700">Phone no</label>
            <input
              type="string"
              id="phone"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Phone no"
            />
          </div>
          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-base font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              id="businessName"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Business Name..."
            />
          </div>
          {/* Business Type */}
          <div>
            <label htmlFor="businessType" className="block text-base font-medium text-gray-700">Business type</label>
            <input
              type="text"
              id="businessType"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Business type..."
            />
          </div>
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              rows="4"
              className="block w-full mt-1 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              placeholder="Your Message"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};


