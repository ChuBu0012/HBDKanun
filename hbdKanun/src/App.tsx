import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import catBg from "./assets/cat-bg.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        className="w-full h-screen pt-16 text-3xl bg-amber-50 bg-cover"
        style={{ backgroundImage: `url(${catBg})` }}
      >
        <h1 className="text-center">วันเกิดใครเอ่ย ??</h1>
      </div>
    </>
  );
}

export default App;
