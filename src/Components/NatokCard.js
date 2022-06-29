import React from "react";

const NatokCard = ({ natokData }) => {
  const { natokName, description, directorName, subscriptionFee, starring } =
    natokData;
  return (
    <div>
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="px-4 py-2">
          <h1 className="text-3xl font-bold text-gray-800 uppercase dark:text-white">
            {natokName} <br />
            {starring}
          </h1>

          <h1 className="text-2xl font-bold text-gray-800 uppercase dark:text-white">
            {directorName}
          </h1>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <img
          className="object-cover w-full h-48 mt-2"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
          alt="NIKE AIR"
        />

        <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 className="text-5xl font-bold text-white">
             &#2547; {subscriptionFee}
          </h1>
          <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NatokCard;
