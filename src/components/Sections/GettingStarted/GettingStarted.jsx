import React from 'react';
import Container from '../Container/Container';
import getImg from '@/assets/getting_started/Vector 3.png'
import getIcon from '@/assets/getting_started/Group 61.png'
import getIcon1 from '@/assets/getting_started/1.png'
import getIcon2 from '@/assets/getting_started/2.png'
import getIcon3 from '@/assets/getting_started/3.png'

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
          <div className='relative 2xl:mt-10 xl:mt-14'>
            <div>
              <img src={getIcon1} alt="" />
            </div>
            <div className='w-[23%] absolute 2xl:mt-[-150px] 2xl:ml-[15px] xl:mt-[-160px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31]'>
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
            <div className='w-[23%] absolute 2xl:mt-[-380px] 2xl:ml-[560px] xl:mt-[-370px] xl:ml-[500px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Choose your wallet</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>After downloading, you can configure your wallet according to our</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31]'>
                  Guide
                </button>
              </div>
            </div>
          </div>
          {/* icon card  */}
          <div className='relative'>
            <div className='absolute 2xl:mt-[-520px] 2xl:ml-[1050px] xl:mt-[-480px] xl:ml-[900px]'>
              <img src={getIcon3} alt="" />
            </div>
            <div className='w-[20%] absolute 2xl:mt-[-520px] 2xl:ml-[1100px] xl:mt-[-480px] xl:ml-[900px]'>
              <p className='text-[#FFF] text-center font-redRose text-[24px] tracking-[2.16px] mb-[15px]'>Get some dogecoin</p>
              <p className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] mb-[30px]'>There’s lots of ways to get your hands on some Dogecoin.</p>
              <div className='text-center'>
                <button className='text-[#CCC2C2] text-center font-redRose text-[18px] tracking-[1.62px] border px-[30px] py-[15px] rounded border-[#BB0F31]'>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default GettingStarted;