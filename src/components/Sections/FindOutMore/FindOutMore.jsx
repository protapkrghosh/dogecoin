import React from 'react';
import Container from '../Container/Container';
import { IoIosArrowRoundDown } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import cardBg1 from '@/assets/about_us/Rectangle4.png'
import cardBg2 from '@/assets/about_us/Rectangle22.png'
import icon1 from '@/assets/about_us/image272.png'
import icon2 from '@/assets/about_us/image 273.png'
import icon3 from '@/assets/about_us/image 274.png'
import icon4 from '@/assets/about_us/image 275.png'
import icon5 from '@/assets/about_us/Vector 4.png'


const FindOutMore = () => {
  return (
    <div className='mt-10 mb-28'>
      <Container>
        <div className='md:flex gap-x-8'>
          {/* About us card */}
          <div className='md:w-[50%] lg:w-[72.2%] bg-[#BB0F31] rounded-[5px]'>
            <div style={{ backgroundImage: `url(${cardBg1})` }} className='bg-no-repeat bg-right-bottom rounded-[5px]'>
              <div className='p-10 relative'>
                <p className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px] mb-3'>About Us</p>
                <p className='text-[#FFF] text-[45px] md:text-[40px] lg:text-[45px] xl:text-[53px] font-redRose font-bold leading-[52px] md:leading-[40px] lg:leading-[60px]'>Find out more about <br /> Doge hot</p>

                <img src={icon5} alt="Image" className='xl:w-[140px] 2xl:w-[175px] absolute left-72 hidden lg:block' data-aos="fade-up" data-aos-duration="1000" />

                {/* Custom Button */}
                <div className='mt-9 group w-fit relative'>
                  <button className='text-white text-[17px] 2xl:text-[18px] font-redRose border py-[10px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    See All
                  </button>

                  <div className='w-[45px] h-[52px] bg-[#cf3251] rounded-[24px] -rotate-45 flex justify-center items-center border cursor-pointer absolute top-0 -right-5'>
                    <IoIosArrowRoundDown className='text-[30px] text-white group-hover:-rotate-45 duration-300' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Foundation card */}
          <div className='md:w-[50%] lg:w-[34.8%] bg-[#BB0F31] rounded-[5px] mt-8 md:mt-0'>
            <div style={{ backgroundImage: `url(${cardBg2})` }} className='bg-no-repeat bg-right-bottom'>
              <div className='p-10'>
                <img src={icon1} alt="Icon" className='w-[68px] 2xl:w-[67px] mb-3' />

                <h3 className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px]'>Foundation</h3>
                <p className='text-[15px] 2xl:text-[16px] text-white font-redRose my-3 md:w-[83%] lg:w-full xl:w-[82%] 2xl:w-[65%]'>Learn more about the Dogecoin Foundation and its Trailmap for Dogecoin!</p>

                {/* Custom Button */}
                <div className='group w-fit pt-1 2xl:pt-0 relative'>
                  <button className='text-white text-[17px] 2xl:text-[18px] font-redRose border py-[8px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    Visit
                  </button>

                  <div className='w-[45px] 2xl:w-[47px] h-[45px] 2xl:h-[47px] bg-[#cf3251] rounded-[24px] flex justify-center items-center border cursor-pointer absolute top-1 -right-5'>
                    <RiArrowRightSLine className='text-[25px] text-white group-hover:ml-1 duration-300' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
          {/* Blog card */}
          <div className=' bg-[#BB0F31] rounded-[5px]'>
            <div style={{ backgroundImage: `url(${cardBg2})` }} className='bg-no-repeat bg-right-bottom'>
              <div className='p-10'>
                <img src={icon2} alt="Icon" className='w-[68px] 2xl:w-[70px] mb-3' />

                <h3 className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px]'>Blogs</h3>
                <p className='text-white font-redRose my-3 md:w-[83%] lg:w-[87%] 2xl:w-[65%]'>Stay up to date with blog posts from Foundation Developers!</p>

                {/* Custom Button */}
                <div className='group w-fit pt-1 2xl:pt-0 relative'>
                  <button className='text-white text-[17px] 2xl:text-[18px] font-redRose border py-[8px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    Visit
                  </button>

                  <div className='w-[45px] 2xl:w-[47px] h-[45px] 2xl:h-[47px] bg-[#cf3251] rounded-[24px] flex justify-center items-center border cursor-pointer absolute top-1 -right-5'>
                    <RiArrowRightSLine className='text-[25px] text-white group-hover:ml-1 duration-300' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Announcements card */}
          <div className=' bg-[#BB0F31] rounded-[5px]'>
            <div style={{ backgroundImage: `url(${cardBg2})` }} className='bg-no-repeat bg-right-bottom'>
              <div className='p-10'>
                <img src={icon3} alt="Icon" className='w-[68px] 2xl:w-[71px] mb-3' />

                <h3 className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px]'>Announcements</h3>
                <p className='text-white font-redRose my-3 lg:w-[93%] 2xl:w-[71%]'>Announcements from the Dogecoin Foundation can be found here.</p>

                {/* Custom Button */}
                <div className='group w-fit pt-1 2xl:pt-0 relative'>
                  <button className='text-white text-[17px] 2xl:text-[18px] font-redRose border py-[8px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    Visit
                  </button>

                  <div className='w-[45px] 2xl:w-[47px] h-[45px] 2xl:h-[47px] bg-[#cf3251] rounded-[24px] flex justify-center items-center border cursor-pointer absolute top-1 -right-5'>
                    <RiArrowRightSLine className='text-[25px] text-white group-hover:ml-1 duration-300' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ip FAQs card */}
          <div className='bg-[#BB0F31] rounded-[5px]'>
            <div style={{ backgroundImage: `url(${cardBg2})` }} className='bg-no-repeat bg-right-bottom'>
              <div className='p-10'>
                <img src={icon4} alt="Icon" className='w-[68px] 2xl:w-[70px] mb-3' />

                <h3 className='text-[#FFF] text-[22px] font-redRose font-bold tracking-[3.3px]'>IP FAQs</h3>
                <p className='text-white font-redRose my-3 lg:w-[93%] 2xl:w-[71%]'>Read our responses to some frequently asked questions about Dogecoin IP.</p>

                {/* Custom Button */}
                <div className='group w-fit pt-1 2xl:pt-0 relative'>
                  <button className='text-white text-[17px] 2xl:text-[18px] font-redRose border py-[8px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
                    Visit
                  </button>

                  <div className='w-[45px] 2xl:w-[47px] h-[45px] 2xl:h-[47px] bg-[#cf3251] rounded-[24px] flex justify-center items-center border cursor-pointer absolute top-1 -right-5'>
                    <RiArrowRightSLine className='text-[25px] text-white group-hover:ml-1 duration-300' />
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