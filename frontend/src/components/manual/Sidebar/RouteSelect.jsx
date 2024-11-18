import React from "react";
import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";

export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      <Route Icon={FiHome} selected={true} title="Dashboard" />
      <Route Icon={FiUsers} selected={false} title="Customer" />
      <Route Icon={FiPaperclip} selected={false} title="Calender" />
      <Route Icon={FiLink} selected={false} title="Logout" />
      <Route Icon={FiDollarSign} selected={false} title="Payment" />
    </div>
  );
};

const Route = ({ selected, Icon, title }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span className={`text-xl ${selected ? "font-semibold" : "font-normal"}`}>{title}</span>
    </button>
  );
};
