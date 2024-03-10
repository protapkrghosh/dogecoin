import React from 'react';
import Container from '../Container/Container';
import { IoIosArrowRoundDown } from "react-icons/io";


const FindOutMore = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-row-2 gap-9'>
          <div className='w-[1004px] h-[403px] bg-[#BB0F31]'>
            <p className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px]'>About Us</p>
            <p className='text-[#FFF] text-[65px] font-redRose font-bold'>Find out more about <br /> Dogecoin</p>
            <div>
              <div className='flex mt-10 group'>
                <button className='text-white text-[17px] 2xl:text-[18px] uppercase border py-[10px] 2xl:py-[12px] px-8 2xl:px-9 rounded-[19px]'>
                  Buy Now
                </button>

                <div className='w-[45px] h-[52px] bg-[#bb0f31] rounded-[24px] -rotate-45 flex justify-center items-center border -ml-4 cursor-pointer'>
                  <IoIosArrowRoundDown className='text-[30px] text-white group-hover:-rotate-45 duration-300' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[478px] h-[403px] bg-[#BB0F31]'></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </Container>
    </div>
  );
};

export default FindOutMore;