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
        <div className='mt-10 lg:mt-16'>
          <div className='lg:relative'>
            <p className='text-[#FFF] text-center text-[65px] font-bold font-redRose tracking-[5.85px]'>Getting started</p>
            <img className='lg:absolute 2xl:ml-[400px] xl:ml-80 lg:ml-40 md:ml-16 ml-12' src={getImg} alt="Image" data-aos="fade-up" data-aos-duration="1000" />
          </div>
          {/* getIcon  */}
          <div className='hidden lg:block'>
            <img src={getIcon} alt="Image" />
          </div>

          {/* icon card 1 */}
          <div className='md:grid lg:grid-cols-none grid-cols-2 gap-x-10 mt-16 lg:mt-0'>
            <div className='lg:relative flex lg:flex-none md:justify-center lg:justify-normal'>
              <div className='lg:absolute 2xl:mt-[-30px] 2xl:ml-[-20px] xl:mt-[-38px] xl:ml-[-30px] lg:mt-[-37px] lg:ml-[-35px]' data-aos="zoom-in" data-aos-duration="1000">
                <p className='2xl:text-[204px] xl:text-[204px] lg:text-[190px] text-[170px] font-bold font-poppins textBorderColor text-transparent -mt-14 lg:mt-0 -mr-16 lg:mr-0'>1</p>
              </div>

              <div className='2xl:w-[23%] xl:w-[28%] lg:w-[30%] lg:absolute 2xl:mt-[35px] 2xl:ml-[-1px] xl:mt-[30px] xl:ml-[-15px] lg:mt-[30px] lg:ml-[-25px]'>
                <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
                <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>A wallet is necessary for people wanting to use, trade, or hold Doge hot. You can pick a wallet</p>

                <div className='text-center' data-aos="fade-up" data-aos-duration="1000">
                  <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31] duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* icon card 2 */}
            <div className='lg:relative flex lg:flex-none md:justify-center lg:justify-normal mt-20 md:mt-0'>
              <div className='lg:absolute 2xl:mt-[-265px] 2xl:ml-[535px] xl:mt-[-222px] xl:ml-[410px] lg:mt-[-190px] lg:ml-[270px]' data-aos="zoom-in" data-aos-duration="1000">
                <p className='2xl:text-[204px] xl:text-[204px] lg:text-[190px] text-[170px] font-bold font-poppins textBorderColor text-transparent -mt-14 lg:mt-0 -mr-16 lg:mr-0'>2</p>
              </div>

              <div className='2xl:w-[23%] xl:w-[25%] lg:w-[30%] lg:absolute 2xl:mt-[-195px] 2xl:ml-[575px] xl:mt-[-155px] xl:ml-[460px] lg:mt-[-120px] lg:ml-[335px]'>
                <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
                <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>After downloading, you can configure your wallet according to our</p>

                <div className='text-center' data-aos="fade-up" data-aos-duration="1000">
                  <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31] duration-300'>
                    Guide
                  </button>
                </div>
              </div>
            </div>

            {/*  icon card 3 */}
            <div className='lg:relative flex lg:flex-none md:justify-center lg:justify-normal  mt-20 lg:mt-0'>
              <div className='lg:absolute 2xl:mt-[-405px] 2xl:ml-[1050px] xl:mt-[-335px] xl:ml-[820px] lg:mt-[-270px] lg:ml-[615px]' data-aos="zoom-in" data-aos-duration="1000">
                <p className='2xl:text-[204px] xl:text-[204px] lg:text-[190px] text-[170px] font-bold font-poppins textBorderColor text-transparent -mt-14 lg:mt-0 -mr-16 lg:mr-0'>3</p>
              </div>

              <div className='2xl:w-[20%] xl:w-[25%] lg:w-[30%] lg:absolute 2xl:mt-[-335px] 2xl:ml-[1100px] xl:mt-[-265px] xl:ml-[865px] lg:mt-[-205px] lg:ml-[658px]'>
                <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Get some Doge hot</p>
                <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>There’s lots of ways to get your hands on some Doge hot.</p>

                <div className='text-center' data-aos="fade-up" data-aos-duration="1000">
                  <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31] duration-300'>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  section part 2  */}
        <div className='mt-[100px] md:mt-[150px] lg:mt-[450px] md:mb-[150px]'>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 content-center gap-y-20 lg:gap-16 xl:gap-32 lg:relative'>
            <img src={imgIcon1} alt="Image" className='mx-auto' />
            <img src={imgIcon2} alt="Image" className='mx-auto' />
            <img src={imgIcon3} alt="Image" className='mx-auto' />
            <img src={imgIcon4} alt="Image" className='mx-auto' />

            {/* Black dot */}
            <img className='lg:w-[29px] md:absolute 2xl:w-[42px] xl:w-[31px] 2xl:ml-[105px] 2xl:mt-[142px] xl:ml-[77px] xl:mt-[105px] lg:ml-[73px] lg:mt-[100px] md:ml-[150px] md:mt-[147px] ml-[177px] mt-[-1845px]' src={imgIcon11} alt="Image" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default GettingStarted;
