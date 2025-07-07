import { Link } from "react-router-dom";
import '../styles/template.css'

const NotFound = () => {
  return (
    <div>
      <div className="bg-[#12121c] block bg-space bg-space" style={{height: '1.3vw'}}></div>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4 bg-[#111]">
        <h1 className="text-5xl font-bold mb-2 text-[beige]">404</h1>
        <p className="text-xl text-[beige] mb-6">ขออภัย ไม่พบหน้านี้</p>
        <Link
            to="/"
            className="bg-[#48cf80] text-[beige] rounded-[99px] px-9 py-4 mt-5 text-[1.05rem] transition duration-300 btn-404"
            style={{boxShadow: "0 0px 10px #48cf80" }}
        >
            กลับหน้าหลัก
        </Link>
        </div>
    </div>
  );
};

export default NotFound;
