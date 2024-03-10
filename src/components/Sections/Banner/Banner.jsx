import Container from '../Container/Container';
import networkBg from '@/assets/banner/Rectangle1.png'
import dogBg from '@/assets/banner/doge1.png'
import textImg from '@/assets/banner/Frame 106.png'
import icon from '@/assets/banner/Vector.png'
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowRoundDown } from "react-icons/io";

const Banner = () => {
  return (
    <div style={{ backgroundImage: `url(${networkBg})` }} className='bg-no-repeat -mt-[112px] h-[120vh] overflow-hidden'>
      <div style={{ backgroundImage: `url(${dogBg})` }} className='bg-no-repeat bg-contain bg-bottom mt-24 '>
        <Container>
          <div className=''>
            <img src={textImg} alt="Image" className='w-[850px] 2xl:w-[920px] pt-[50px] pb-[80px] mx-auto' />

            {/* Card */}
            <div className='flex justify-between items-start'>
              {/* Card One */}
              <div>
                <div className='p-[1px] bg-gradient-to-b from-[#9c7177] form-40% to-[#6d262a56] to-60%'>
                  <div className='bg-gradient-to-r from-[#641c27] to-[#641c27]'>
                    <p className='text-center text-white py-5 px-10'>Such Core Wallet 1.14.6 <br /> released! Much upgrade, plz!</p>
                  </div>
                </div>

                <img src={icon} alt="Icon" className='w-[40px] 2xl:w-[45px] mx-auto py-8' />

                <div className='flex justify-center'>
                  <div className='mr-7'>
                    <a href="" className="group">
                      <div className="bg-[#bb0f31] hover:bg-[#a12841] p-3 rounded-full duration-300 flex justify-center items-center group">
                        <FaTelegramPlane className="text-[28px] text-[#fff] group-hover:scale-105 duration-300" />
                      </div>
                    </a>
                  </div>

                  <div className=''>
                    <a href="" className="group">
                      <div className="bg-[#bb0f31] hover:bg-[#a12841] p-[14px] rounded-full duration-300 flex justify-center items-center group">
                        <FaTwitter className="text-[25px] text-[#fff] group-hover:scale-105 duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card two */}
              <div>
                <div className='p-[1px] bg-gradient-to-l from-[#9c7177] form-40% to-[#6d262a56] to-60%'>
                  <div className='bg-gradient-to-r from-[#641c27] to-[#641c27]'>
                    <p className='text-end text-[#d6acb1] text-[25px] font-semibold py-5 pl-10 pr-5'>The People's <br /> Cryptocurrency</p>
                  </div>
                </div>

                {/* Custom Button */}
                <div className='flex justify-center mt-5'>
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
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;