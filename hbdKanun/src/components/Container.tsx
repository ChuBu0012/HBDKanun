import React from "react";
import catBg from "../assets/cat-bg.png";

type props = {
    children : React.ReactNode
}
const Container = (props:props) => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
      <div
        className="w-full h-screen pt-16 text-7xl  bg-cover text-[#78630f]"
        style={{ backgroundImage: `url(${catBg})` }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Container