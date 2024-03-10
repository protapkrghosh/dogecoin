import logo from "@/assets/logo.png"
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
    // <div className={color ? 'sticky bg-[#dbfadb] top-0 z-50 duration-300 shadow-md py-1' : 'pt-0 duration-300'}>
    //   <div className="max-w-[1620px] mx-auto 2xl:px-28 xl:px-28 md:px-10 sm:px-2 px-4">
    //     <div className="w-full top-0 left-0 z-10">
    //       <div className={`md:flex justify-between items-center ${color ? 'py-3' : 'py-7'}`}>

    //         <Link to="/">
    //           <img src={logo} alt="Logo" className="w-[145px] lg:w-[170px] cursor-pointer mr-3 ml-5 md:ml-0" />
    //         </Link>

    //         <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
    //           {
    //             open ? <IoClose className="text-[#36AE36]" /> : <IoMenu className="text-[#36AE36]" />
    //           }
    //         </div>

    //         <ul className={`text-[14px] 2xl:text-[16px] md:flex md:items-center md:py-3 pt-5 pb-7 space-y-4 md:space-y-0 absolute md:static md:z-auto z-[-1px] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-linear opacity-0 md:opacity-100 rounded-[5px] border ${color ? 'bg-[#e1f3e1] border-[#b2e1b2]' : 'bg-[#F7FFF7] border-[#b2e1b2]'} ${open ? 'top-[75px] opacity-100' : 'top-[-490px]'}`}>

    //           <li>
    //             <Link to="/" className="text-[#36AE36] font-amulya font-normal md:ml-4 xl:ml-8 2xl:ml-10 my-4 md:my-0 cursor-pointer">About</Link>
    //           </li>

    //           <li>
    //             <Link to="/" className="text-[#181818] hover:text-[#36AE36] font-amulya font-normal md:ml-4 xl:ml-8 2xl:ml-10 my-4 md:my-0 cursor-pointer duration-200">Fundamentals</Link>
    //           </li>

    //           <li>
    //             <Link to="/" className="text-[#181818] hover:text-[#36AE36] font-amulya font-normal md:ml-4 xl:ml-8 2xl:ml-10 my-4 md:my-0 cursor-pointer duration-200">Tokenomics</Link>
    //           </li>

    //           <li>
    //             <Link to="/" className="text-[#181818] hover:text-[#36AE36] font-amulya font-normal md:ml-4 xl:ml-8 2xl:ml-10 my-4 md:my-0 cursor-pointer">How to Buy</Link>
    //           </li>

    //           <li>
    //             <Link to="/" className="text-[#181818] hover:text-[#36AE36] font-amulya font-normal md:mx-4 xl:mx-8 2xl:ml-10 my-4 md:my-0 cursor-pointer duration-200">Connect</Link>
    //           </li>

    //           <Button className="text-[14px] 2xl:text-[16px] rounded-[5px] group cursor-pointer px-5 md:px-7 md:hidden">Buy $Midcurve</Button>
    //         </ul>

    //         <Button className="text-[14px] 2xl:text-[16px] rounded-[5px] group cursor-pointer px-5 md:px-7 hidden lg:block">Buy $Midcurve</Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div></div>
  );
};

export default NavBar;