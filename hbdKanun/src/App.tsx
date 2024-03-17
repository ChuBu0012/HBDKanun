import icon2 from "./assets/icon2.png";
import "./App.css";
import { Link } from "react-router-dom";
import Container from "./components/Container";

function App() {
  return (
    <Container>
      <div className="relative">
        <img
          src={icon2}
          className="absolute -top-12 left-32 -rotate-12 w-14"
          alt=""
        />
        <h1 className="text-center font-bold">วันเกิดใครเอ่ย ?</h1>
      </div>
      <div className="flex justify-evenly items-start mt-8">
        <Link to='/q' className="border-b-0 border-b-[#b49209] pb-0 hover:border-b-2 hover:pb-[1px] transition-all mt-8 translate-x-4  text-[#b49209]">
          ขนุน
        </Link>
        <Link to='/q' className="border-b-0 border-b-[#92780e] pb-0 hover:border-b-2 hover:pb-[1px] transition-all text-[#92780e] ">
          มดตะนอย
        </Link>
      </div>
      <div className="flex flex-col mt-4 gap-6">
        <Link to='/q' className="border-b-0 border-b-red-100 pb-0 hover:border-b-2 hover:pb-[1px] transition-all w-fit ml-8 text-[#d9af06]">
          ตีรณา
        </Link>
        <Link to='/q' className="border-b-0 border-b-red-100 pb-0 hover:border-b-2 hover:pb-[1px] transition-all w-fit ml-20 text-[#f5c60b]">
          ต้นขนุน
        </Link>
        <Link to='/q' className="border-b-0 border-b-red-100 pb-0 hover:border-b-2 hover:pb-[1px] transition-all w-fit ml-8 text-[#fbd024]">
          หนุนหนุน
        </Link>
      </div>
    </Container>
  );
}

export default App;
