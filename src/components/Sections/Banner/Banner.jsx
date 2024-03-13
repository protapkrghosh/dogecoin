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
    <div style={{ backgroundImage: `url(${networkBg})` }} className='bg-no-repeat bg-cover md:-mt-[132px] lg:-mt-[112px] overflow-hidden pb-20 lg:pb-32 xl:pb-52'>
      <div className='bg-no-repeat bg-contain bg-bottom mt-28 md:mt-36 lg:mt-32 xl:mt-24 2xl:mt-40'>
        <Container>
          <div className='relative'>
            <img src={dogBg} alt="Image" className='md:w-[550px] lg:w-[550px] xl:w-[750px] mx-auto' />

            <div className='flex justify-center'>
              <img src={textImg} alt="Image" className='lg:w-[750px] xl:w-[850px] 2xl:w-[900px] pt-[50px] pb-[80px] mx-auto absolute -top-3 md:-top-10 lg:-top-7 xl:top-0' />
            </div>

            {/* Card */}
            <div className='md:flex justify-between items-start md:-mt-36 lg:-mt-72 xl:-mt-96 2xl:px-24 2xl:mr-10'>
              {/* Such core */}
              <div className='my-10 md:my-0'>
                <div className='p-[1px] bg-gradient-to-b from-[#9c7177d0] form-40% to-[#6d262a1e] to-60%'>
                  <div className='bg-gradient-to-r from-[#641c27] to-[#6C1E1F]'>
                    <p className='text-center 2xl:text-[18px] text-white font-redRose py-5 px-5 xl:px-10'>Such Core Wallet 1.14.6 <br /> released! Much upgrade, plz!</p>
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

                  <div>
                    <a href="" className="group">
                      <div className="bg-[#bb0f31] hover:bg-[#a12841] p-[14px] rounded-full duration-300 flex justify-center items-center group">
                        <FaTwitter className="text-[25px] text-[#fff] group-hover:scale-105 duration-300" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* Peoples Cryptocurrency */}
              <div>
                <div className='p-[1px] bg-gradient-to-l from-[#9c7177d0] form-40% to-[#6d262a56] to-60%'>
                  <div className='bg-gradient-to-r from-[#832f2b] to-[#641c27]'>
                    <p className='text-end text-[#d6acb1] text-[25px] font-redRose py-5 px-7 xl:pl-10 pr-5'>The People's <br /> Cryptocurrency</p>
                  </div>
                </div>

                {/* Custom Button */}
                <div className='flex justify-center mt-5'>
                  <div className='flex mt-10 group'>
                    <button className='text-white text-[17px] 2xl:text-[18px] font-redRose uppercase border py-[10px] 2xl:py-[12px] px-10 2xl:px-9 rounded-[26px]'>
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