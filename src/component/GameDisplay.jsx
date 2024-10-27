import React from "react";
import {
  FaCarrot,
  FaCarSide,
  FaIdCard,
  FaBabyCarriage,
  FaAmazon,
  FaApple,
  FaBan,
  FaBackward,
} from "react-icons/fa";

const GameDisplay = () => {
  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {[...Array(8)].map((_, index) => {
            return (
              <div className="w-1/4">
                <div className="px-[2px] py-[1px]">
                  <button className="border w-full h-[110px] bg-red-500"></button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameDisplay;
