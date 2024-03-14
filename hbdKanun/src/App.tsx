import catBg from "./assets/cat-bg.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import "./App.css";
import { Link } from "react-router-dom";

function App() {

  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 overflow-hidden">
      <div
        className="w-full h-screen pt-16 text-7xl  bg-cover text-[#78630f]"
        style={{ backgroundImage: `url(${catBg})` }}
      >
        <div className="relative">
          <img src={icon1} className="absolute -left-1 w-20" alt="" />
          <img src={icon2} className="absolute -top-12 left-32 -rotate-12 w-14" alt="" />
          <h1 className="text-center font-bold">วันเกิดใครเอ่ย ?</h1>
          <img src={icon1} className="absolute w-20 top-0 -right-1 scale-x-[-1]" alt="" />
        </div>
        <div className="flex justify-evenly items-start mt-8">
          <button className="border-b-0 border-b-[#b49209] pb-0 hover:border-b-2 hover:pb-[1px] transition-all mt-8 translate-x-4  text-[#b49209]">ขนุน</button>
          <button className="border-b-0 border-b-[#92780e] pb-0 hover:border-b-2 hover:pb-[1px] transition-all text-[#92780e] ">มดตะนอย</button>
        </div>
        <div className="flex flex-col mt-4 gap-6">
          <button className="border-b-0 border-b-red-100 pb-0 hover:border-b-2 hover:pb-[1px] transition-all w-fit ml-8 text-[#d9af06]">ตีรณา</button>
          <button className="border-b-0 border-b-red-100 pb-0 hover:border-b-2 hover:pb-[1px] transition-all w-fit ml-20 text-[#f5c60b]">ต้นขนุน</button>
          <button className="border-b-0 border-b-red-100 pb-0 hover:border-b-2 hover:pb-[1px] transition-all w-fit ml-8 text-[#fbd024]">หนุนหนุน</button>
          <Link to="/q">q</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
