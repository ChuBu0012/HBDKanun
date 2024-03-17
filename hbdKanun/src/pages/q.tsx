import { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const Q = () => {
  const elementRef = useRef<HTMLButtonElement>(null);
  const element2Ref = useRef<HTMLButtonElement>(null);
  const [incremmentBtnTop, setincremmentBtnTop] = useState<number>(
    Math.random() * 80 + 40
  );
  const [incremmentBtnRight, setincremmentBtnRight] = useState<number>(
    Math.random() * 40 + 20
  );
  const [maxWindowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [count, setcount] = useState(0);

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

  const changePositionNoBtn = () => {
    setcount(count + 1);
    const btnElement = elementRef?.current;
    if (btnElement) {
      const btnCurrentBottom = btnElement.getBoundingClientRect().bottom;
      const btnCurrentRight = btnElement.getBoundingClientRect().right;

      setincremmentBtnTop((prevIncrementBtnTop) => {
        return btnCurrentBottom + 80 > maxWindowSize.height
          ? -10
          : prevIncrementBtnTop + Math.random() * 80 + 40;
      });

      setincremmentBtnRight((prevIncrementBtnRight) => {
        return btnCurrentRight < 100
          ? 0
          : prevIncrementBtnRight + Math.random() * 40 + 20;
      });

      console.log(maxWindowSize.width);
      console.log(btnCurrentRight + 40);

      btnElement.style.top = `${incremmentBtnTop}px`;
      btnElement.style.right = `${incremmentBtnRight}px`;
    }
  };

  const Yes = () => {
    switch (count) {
      case 0:
        Swal.fire("เล่นกับเค้าหน่อยสิ้! คลิกที่ 'ไม่'");
        break;
      case 1:
        Swal.fire("เล่นกับเค้าอีกหน่อยสิ!");
        break;
      case 2:
        Swal.fire("ครั้งสุดท้ายแน้ว!");
        break;
      default:
        break;
    }
 
  };

  return (
    <Container>
      <h1 className="text-center">แน่ใจอ้ะป่าว!?</h1>
      <div className="flex justify-evenly items-center">
        {count > 2 ? (
          <Link to={'/nunnunday'} onClick={Yes} className="relative top-0 z-0">
            ใช่
          </Link>
        ) : (
          <button
            onClick={Yes}
            ref={element2Ref}
            className="relative top-0 z-0"
          >
            ใช่
          </button>
        )}
        <button
          onClick={changePositionNoBtn}
          ref={elementRef}
          className="relative z-10"
        >
          ไม่
        </button>
      </div>
    </Container>
  );
};

export default Q;
