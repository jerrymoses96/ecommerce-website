import React from "react";

const SafetyWarning = () => {
  return (
    <div className="flex w-[80%] mx-auto border border-gray-400 rounded-2xl p-5 my-16 ">
      <div className="w-2/3 p-20">
        <h1 className="text-3xl font-bold mb-3">SHOP SMART & STAY SAFE</h1>
        <p className="text-xl text-gray-700 font-medium  mb-4">
          Trust only Tata CLiQ's official channels for exclusice offers. We DO
          NOT make telemarketing calls,host lucky draws,send QR codes,or request
          payments outside our official app or website.
        </p>
        <span className="text-red-900 font-semibold">
          CLiQ to learn how you can enjoy a secure shopping experience.
        </span>
      </div>
      <div className="w-1/3">
        <img className="w-[500px]" src="src\assets\safety.png" />
      </div>
    </div>
  );
};

export default SafetyWarning;
