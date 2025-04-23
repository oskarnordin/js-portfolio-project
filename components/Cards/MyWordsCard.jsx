import React from "react";

const MyWordsCard = ({
  icon,
  title,
  info }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <img src={icon} alt={title} className="h-40 w-full object-cover" />
      <h2 className="text-xl font-bold text-left">{title}</h2>
      <p>{info}</p>
    </div>
  );
};

export default MyWordsCard;
