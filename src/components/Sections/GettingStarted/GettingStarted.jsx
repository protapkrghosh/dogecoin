import React from 'react';
import Container from '../Container/Container';
import getImg from '@/assets/getting_started/Vector 3.png'
import getIcon from '@/assets/getting_started/Group 61.png'
import imgIcon1 from '@/assets/getting_started/o-letter-img (1) 2.png'
import imgIcon2 from '@/assets/getting_started/o-letter-img (1) 1.png'
import imgIcon3 from '@/assets/getting_started/g-letter-img 1.png'
import imgIcon4 from '@/assets/getting_started/e-letter-img 1.png'
import imgIcon11 from '@/assets/getting_started/Vector 2.png'

const GettingStarted = () => {
  return (
    <>
      <Container>
        <div className=''>
          <div className='lg:relative'>
            <p className='text-[#FFF] text-center text-[65px] font-bold font-redRose tracking-[5.85px] mt-[150px]'>Getting started</p>
            <img className='lg:absolute 2xl:ml-[400px] xl:ml-80 lg:ml-40 md:ml-16 ml-12' src={getImg} alt="" />
          </div>
          {/* getIcon  */}
          <div className='hidden lg:block'>
            <img src={getIcon} alt="" />
          </div>

          {/* icon card 1 */}
          <div className='lg:relative md:flex lg:flex-none md:justify-center lg:justify-norma'>
            <div className='lg:absolute 2xl:mt-[-30px] 2xl:ml-[-20px] xl:mt-[-38px] xl:ml-[-30px] lg:mt-[-37px] lg:ml-[-35px]'>
              <p className='2xl:text-[204px] xl:text-[204px] lg:text-[190px] text-[170px] font-bold font-poppins textBorderColor text-transparent md:-mt-14 lg:mt-0 md:-mr-16 lg:mr-0'>1</p>
            </div>

            <div className='2xl:w-[23%] xl:w-[28%] lg:w-[30%] md:w-[46%] lg:absolute 2xl:mt-[35px] 2xl:ml-[-1px] xl:mt-[30px] xl:ml-[-15px] lg:mt-[30px] lg:ml-[-25px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31] duration-300'>
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* icon card 2 */}
          <div className='lg:relative md:flex lg:flex-none md:justify-center lg:justify-norma'>
            <div className='lg:absolute 2xl:mt-[-265px] 2xl:ml-[535px] xl:mt-[-222px] xl:ml-[410px] lg:mt-[-190px] lg:ml-[270px]'>
              <p className='2xl:text-[204px] xl:text-[204px] lg:text-[190px] text-[170px] font-bold font-poppins textBorderColor text-transparent md:-mt-14 lg:mt-0 md:-mr-16 lg:mr-0'>2</p>
            </div>

            <div className='2xl:w-[23%] xl:w-[25%] lg:w-[30%] md:w-[44%] lg:absolute 2xl:mt-[-195px] 2xl:ml-[575px] xl:mt-[-155px] xl:ml-[460px] lg:mt-[-120px] lg:ml-[335px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>After downloading, you can configure your wallet according to our</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31] duration-300'>
                  Guide
                </button>
              </div>
            </div>
          </div>

          {/*  icon card 3 */}
          <div className='lg:relative md:flex lg:flex-none md:justify-center lg:justify-normal'>
            <div className='lg:absolute 2xl:mt-[-405px] 2xl:ml-[1050px] xl:mt-[-335px] xl:ml-[820px] lg:mt-[-270px] lg:ml-[615px]'>
              <p className='2xl:text-[204px] xl:text-[204px] lg:text-[190px] text-[170px] font-bold font-poppins textBorderColor text-transparent md:-mt-14 lg:mt-0 md:-mr-16 lg:mr-0'>3</p>
            </div>

            <div className='2xl:w-[20%] xl:w-[25%] lg:w-[30%] md:w-[44%] lg:absolute 2xl:mt-[-335px] 2xl:ml-[1100px] xl:mt-[-265px] xl:ml-[865px] lg:mt-[-205px] lg:ml-[658px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Get some dogecoin</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>There’s lots of ways to get your hands on some Dogecoin.</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31] duration-300'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  section part 2  */}
        <div className='mt-[450px] mb-[150px]'>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-32 lg:relative'>
            <img src={imgIcon1} alt="Image" />
            <img src={imgIcon2} alt="Image" />
            <img src={imgIcon3} alt="Image" />
            <img src={imgIcon4} alt="Image" />

            <img className='lg:absolute 2xl:w-[42px] xl:w-[34px] 2xl:ml-[105px] 2xl:mt-[142px] xl:ml-[86px] xl:mt-[118px] lg:ml-[86px] lg:mt-[118px] md:ml-[107px] md:mt-[147px] ml-[107px] mt-[147px]' src={imgIcon11} alt="Image" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default GettingStarted;
