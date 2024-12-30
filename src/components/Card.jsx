import React from "react";

const Card = ({ title, value, percentage, isIncrease, className }) => {
  return (
    <div className={`bg-white shadow-lg rounded-xl p-6 ${className}`}>
      {/* Title */}
      <h5 className="text-gray-600 text-sm font-medium uppercase tracking-wide mb-2">
        {title}
      </h5>

      {/* Value */}
      <h1 className="text-gray-900 text-4xl font-extrabold mb-2">
        {value}
      </h1>

      {/* Percentage Change */}
      <div className="flex items-center">
        <span
          className={`flex items-center text-sm font-medium ${
            isIncrease ? "text-green-500" : "text-red-500"
          }`}
        >
          <i
            className={`mdi ${
              isIncrease
                ? "mdi-arrow-top-right-bold"
                : "mdi-arrow-bottom-right-bold"
            } mr-1`}
          ></i>
          {percentage}%
        </span>
        <span className="text-gray-500 text-xs ml-2">
          Since last week
        </span>
      </div>
    </div>
  );
};

export default Card;
