import React from 'react';
import Container from '../Container/Container';
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import cardBg1 from '@/assets/about_us/Rectangle4.png'
import cardBg2 from '@/assets/about_us/Rectangle22.png'
import icon1 from '@/assets/about_us/image272.png'


const FindOutMore = () => {
  return (
    <div className='mt-10'>
      <Container>
        <div className='flex gap-x-8'>
          <div className='w-4/5 bg-[#BB0F31] rounded-[5px]'>
            <div style={{ backgroundImage: `url(${cardBg1})` }} className='bg-no-repeat bg-right-bottom'>
              <div className='p-10'>
                <p className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px] mb-4'>About Us</p>
                <p className='text-[#FFF] text-[53px] font-redRose font-bold leading-[60px]'>Find out more about <br /> Dogecoin</p>

                {/* Custom Button */}
                <div className='flex mt-10 group w-fit'>
                  <button className='text-white text-[17px] 2xl:text-[18px] border py-[10px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    See All
                  </button>

                  <div className='w-[45px] h-[52px] bg-[#bb0f31] rounded-[24px] -rotate-45 flex justify-center items-center border -ml-4 cursor-pointer'>
                    <IoIosArrowRoundDown className='text-[30px] text-white group-hover:-rotate-45 duration-300' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='w-[478px] bg-[#BB0F31] rounded-[5px]'>
            <div style={{ backgroundImage: `url(${cardBg2})` }} className='bg-no-repeat bg-right-bottom'>
              <div className='p-10'>
                <img src={icon1} alt="Icon" className='w-[75px] mb-3' />

                <h3 className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px]'>Foundation</h3>
                <p className='text-white font-redRose my-3'>Learn more about the Dogecoin Foundation and its Trailmap for Dogecoin!</p>

                {/* Custom Button */}
                <div className='flex group w-fit 2xl:mt-8'>
                  <button className='text-white text-[17px] 2xl:text-[18px] border py-[8px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    Visit
                  </button>

                  <div className='w-[45px] h-[52px] bg-[#bb0f31] rounded-[24px] -rotate-45 flex justify-center items-center border -ml-4 cursor-pointer'>
                    <RiArrowRightSLine className='text-[28px] text-white rotate-45 group-hover:mt-1 duration-300' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FindOutMore;