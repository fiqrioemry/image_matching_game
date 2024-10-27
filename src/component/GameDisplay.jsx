import React from "react";

const GameDisplay = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap">
          {[...Array(24)].map((_, index) => {
            return (
              <div className="w-1/6">
                <div className="p-[4px]">
                  <div className="border h-[110px] bg-red-500"></div>
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
