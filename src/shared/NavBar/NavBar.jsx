import logo from "@/assets/banner/dogecoin-logo 1.png"
import language from "@/assets/banner/language.png"
import { Button } from "@/components/ui/button";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState(false);

  if (typeof window !== 'undefined') {
    const changeColor = () => {
      if (window?.scrollY >= 30) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener('scroll', changeColor);
  }

  return (
    <div className={color ? 'sticky bg-[#3d161d] top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 duration-300'}>
      <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
        <div className="w-full top-0 left-0 z-10">
          <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-7'}`}>

            <Link to="/">
              <img src={logo} alt="Logo" className="w-[145px] lg:w-[170px] cursor-pointer mr-3 ml-5 md:ml-0" />
            </Link>

            <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
              {
                open ? <IoClose className="text-[#772d3a]" /> : <IoMenu className="text-[#772d3a]" />
              }
            </div>

            <ul className={`md:flex md:items-center md:py-3 pt-5 pb-7 space-x-5 xl:space-x-8 2xl:space-x-10 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] ${open ? 'top-[65px] opacity-100 bg-[#3d161d]' : 'top-[-490px] bg-transparent'}`}>

              <li>
                <Link to="/" className="text-[#BB0F31] font-redRose font-normal ml-5 md:ml-0">So Home</Link>
              </li>

              <li>
                <Link to="/" className="text-[#CCC2C2] hover:text-[#BB0F31] font-redRose font-normal duration-300">What is Dogecoin?</Link>
              </li>

              <li>
                <Link to="/" className="text-[#CCC2C2] hover:text-[#BB0F31] font-redRose font-normal duration-300">Much Wallets</Link>
              </li>

              <li>
                <Link to="/" className="text-[#CCC2C2] hover:text-[#BB0F31] font-redRose font-normal duration-300">Very Community</Link>
              </li>

              <li>
                <Link to="/" className="text-[#CCC2C2] hover:text-[#BB0F31] font-redRose font-normal duration-300">So Dogepedia</Link>
              </li>

              <img src={language} alt="Image" className="w-[90px] 2xl:w-[100px] block md:hidden" />
            </ul>

            <img src={language} alt="Image" className="w-[90px] 2xl:w-[100px] md:block hidden" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
