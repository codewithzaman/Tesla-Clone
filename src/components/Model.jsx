import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Model = () => {
  return (
    <div>
      <div className="absolute inset-x-0 top-[15%] text-center">
        <h1 className="text-4xl font-bold">Model Y</h1>
        <p className="p-2 text-sm">
          Order online for <span className="underline underline-offset-4">Touchless Delivery</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]">
        <button className="bg-[#393c41] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2 text-white">Custom Order</button>
        <button className="bg-[#f4f4f4] rounded-md w-96 lg:w-64 h-10 lg:mx-4 mt-2">Existing Inventory</button>
      </div>
      <div className="flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]">
      <MdOutlineKeyboardArrowDown  size={30} className=""/>
      </div>
    </div>
  );
};

export default Model;
