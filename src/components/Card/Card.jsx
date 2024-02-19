import React, { useState } from "react";
import CardData from "./static/CardData";

const Card = ({totalData, listOrder, bg, title}) => {
  const [isFocused, setIsFocused] = useState(false);
  const handleCardClick = () => {
    setIsFocused(!isFocused);
  };

  return (
    <section className="services">
      <div className="mt-5 flex gap-2" >
      
        <div className="mb-5">
          <div className={`p-2 bg-white w-40 h-30 items-center cursor-pointer rounded-md focus:outline-none ${isFocused ? 'ring-1 ring-black' : ''}`}
          onClick={() => handleCardClick()}>
            <span className="flex items-center">
              <div className={`text-white text-xs text-center p-1 rounded-md ${bg}`}>{title}</div>
            </span>
              <div className="p-0 text-xl start-0 top-0">{totalData}</div>
          </div>
        </div>
      
      </div>

      
    </section>
  );
};

export default Card;
