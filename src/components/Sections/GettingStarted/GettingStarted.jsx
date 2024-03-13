import React from 'react';
import Container from '../Container/Container';
import getImg from '@/assets/getting_started/Vector 3.png'
import getIcon from '@/assets/getting_started/Group 61.png'
import getIcon1 from '@/assets/getting_started/1.png'
import getIcon2 from '@/assets/getting_started/2.png'
import getIcon3 from '@/assets/getting_started/3.png'
import imgIcon1 from '@/assets/getting_started/o-letter-img (1) 2.png'
import imgIcon2 from '@/assets/getting_started/o-letter-img (1) 1.png'
import imgIcon3 from '@/assets/getting_started/g-letter-img 1.png'
import imgIcon4 from '@/assets/getting_started/e-letter-img 1.png'
import imgIcon11 from '@/assets/getting_started/Vector 2.png'

const GettingStarted = () => {
  return (
    <>
      <Container>
        <div className='mb-[150px]'>
          <div className='relative'>
            <p className='text-[#FFF] text-center text-[65px] font-bold font-redRose tracking-[5.85px] mt-[150px]'>Getting started</p>
            <img className='absolute 2xl:ml-[400px] xl:ml-80 lg:ml-40 md:ml-16 ml-12' src={getImg} alt="" />
          </div>
          {/* getIcon  */}
          <div>
            <img src={getIcon} alt="" />
          </div>
          {/* icon card  */}
          <div className='relative 2xl:mt-10 xl:mt-[50px] xl:ml-[-35px]'>
            <div>
              <img src={getIcon1} alt="" />
            </div>
            <div className='2xl:w-[23%] xl:w-[25%] absolute 2xl:mt-[-150px] 2xl:ml-[15px] xl:mt-[-160px] xl:ml-[15px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31]'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
          {/* icon card  */}
          <div className='relative'>
            <div className='absolute 2xl:mt-[-380px] 2xl:ml-[525px] xl:mt-[-370px] xl:ml-[450px]'>
              <img src={getIcon2} alt="" />
            </div>
            <div className='2xl:w-[23%] xl:w-[25%] absolute 2xl:mt-[-380px] 2xl:ml-[560px] xl:mt-[-370px] xl:ml-[490px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>After downloading, you can configure your wallet according to our</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31]'>
                  Guide
                </button>
              </div>
            </div>
          </div>
          {/* icon card  */}
          <div className='relative'>
            <div className='absolute 2xl:mt-[-520px] 2xl:ml-[1050px] xl:mt-[-485px] xl:ml-[895px]'>
              <img src={getIcon3} alt="" />
            </div>
            <div className='2xl:w-[20%] xl:w-[25%] absolute 2xl:mt-[-520px] 2xl:ml-[1100px] xl:mt-[-485px] xl:ml-[925px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Get some dogecoin</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>There’s lots of ways to get your hands on some Dogecoin.</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31] hover:bg-[#BB0F31]'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>



        {/*  section part 2  */}



        <div className='mt-[150px] mb-[150px]'>
          <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 content-center gap-32 relative'>
            <img src={imgIcon1} alt="" />
            <img src={imgIcon2} alt="" />
            <img src={imgIcon3} alt="" />
            <img src={imgIcon4} alt="" />
            <img className='absolute 2xl:w-[42px] xl:w-[34px] 2xl:ml-[105px] 2xl:mt-[142px] xl:ml-[86px] xl:mt-[118px] lg:ml-[86px] lg:mt-[118px] md:ml-[107px] md:mt-[147px] ml-[107px] mt-[147px]' src={imgIcon11} alt="" />
          </div>
        </div>



      </Container>
    </>
  );
};

export default GettingStarted;