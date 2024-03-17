import icon3 from "../assets/icon3.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import hdbgif from "../assets/happy-birthday.gif";

// คอมโพเนนต์ MainHbd ไม่เปลี่ยนแปลง
const MainHbd = () => {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-amber-100 overflow-x-hidden">
      <div className="w-full h-screen pt-16 text-7xl bg-cover text-[#78630f]">
        <div className="relative">
          <h1 className="font-semibold text-center text-6xl">
            Happy Birthday
            <br />
            To Kanun
          </h1>
          <img src={icon3} className="w-16 absolute top-16 left-4" alt="" />
          <img src={icon3} className="w-16 absolute top-16 right-4" alt="" />
        </div>
        <div className="p-12 relative">
          <img src={img1} alt="" className="object-contain rounded-xl" />
          <img
            src={hdbgif}
            className="w-28 absolute bottom-6 scale-x-[-1] left-4"
            alt=""
          />
          <img src={hdbgif} className="w-28 absolute bottom-6 right-4" alt="" />
        </div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={img1} />
            </div>
          </div>
          <div className="chat-header text-xl">อ้ะอ้วง</div>
          <div className="chat-bubble bg-white text-black text-3xl">
            วันนี้วันเกิดเค้า!!
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={img2}
              />
            </div>
          </div>
          <div className="chat-header text-xl">อ้ะต้าว</div>
          <div className="chat-bubble bg-white text-black text-3xl">
            โตขึ้นอีกหนึ่งปีแล้วนะครับ
            ขอให้หนุนหนุนของเค้าเป็นคนที่มีความสุขที่สุดในโลกเยย
            ขอให้เธอได้ทุกสิ่งที่หวัง รักเธอนะ
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={img2}
              />
            </div>
          </div>
          <div className="chat-header text-xl">อ้ะต้าว</div>
          <div className="chat-bubble bg-white text-black text-3xl">
            อาจมีบางครั้งที่เราทะเลาะกัน แต่เค้าอยากให้รู้ไว้นะครับว่า
            เค้ายังรักเธอที่สุดเหมือนเดิมเยย อ้ะอ้วงของเค้า
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={img2}
              />
            </div>
          </div>
          <div className="chat-header text-xl">อ้ะต้าว</div>
          <div className="chat-bubble bg-white text-black text-3xl">
            สุดท้ายเค้าจะบอกว่า ขอให้เราได้อยู่ด้วยกันแบบนี้ตลอดไปนะ ♥
          </div>
          <div className="chat-footer opacity-50">อ่านแล้ว</div>
        </div>
      </div>
    </div>
  );
};

export default MainHbd;
