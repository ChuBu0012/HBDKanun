import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";

const Q = () => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const [btnTop, setBtnTop] = useState<number>(
    elementRef?.current?.offsetTop || 0
  );
  const [maxWindowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateMaxWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateMaxWindowSize);

    return () => {
      window.removeEventListener("resize", updateMaxWindowSize);
    };
  }, []);

  const test = () => {
    const buttonElement = elementRef.current;
    const increment: number = 130;
    if (buttonElement) {
      if (parseInt(buttonElement.style.left) + increment >= maxWindowSize.width){
        setBtnTop(100)
        buttonElement.style.left = `${150}px`;
        buttonElement.style.top = `${100}px`;
        return
      }
      const newPosition = {
        top: btnTop + increment > maxWindowSize.height ? 0 : btnTop + increment,
        left: btnTop - 100,
      };

      // กำหนดตำแหน่งใหม่ให้ปุ่ม
      buttonElement.style.top = `${newPosition.top}px`;
      buttonElement.style.left = `${newPosition.left}px`;

      // อัปเดตค่า btnTop
      setBtnTop(newPosition.top);
    }
  };

  return (
    <Container>
      <h1 className="text-center">แน่ใจอ้ะป่าว!?</h1>
      {maxWindowSize.width} {maxWindowSize.height}
      <p>{btnTop} {btnTop}</p>
      <p>{}</p>
      <div className="flex justify-evenly items-center">
        <button className="relative top-0">ใช่</button>
        <button
          onTouchStart={test}
          ref={elementRef}
          className="relative top-10"
        >
          ไม่
        </button>
      </div>
    </Container>
  );
};

export default Q;
