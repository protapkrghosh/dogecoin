import Container from '@/components/Sections/Container/Container';
import footerLogo from '@/assets/banner/dogecoin-logo 1.png'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Container>
        <div className='grid grid-cols-4'>
          {/* first part  */}
          <div>
            <img src={footerLogo} alt="" />
            <p className='text-[#CCC2C2] font-redRose text-[16px] tracking-[0.8px] w-[397px] mt-[25px]'>The Shiba Inu is a Japanese breed of dog that was popularized as an online meme and represents Dogecoin. Dogecoin was created by Jackson Palmer & Shibetoshi Nakamoto.</p>
          </div>
          {/* second part  */}
          <div className='flex justify-end'>
            <div>
              <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold'>Announcements</p>
              <div className='flex flex-col w-[30%]'>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Trademarks</Link>
              </div>
            </div>
          </div>
          {/* third part  */}
          <div className='flex justify-end'>
            <div>
              <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold'>Sitemap</p>
              <div className='flex flex-col'>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>So Home</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>What is Dogecoin?</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>Much Wallets</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>Very Community</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>So Dogepedia</Link>
              </div>
            </div>
          </div>
          {/* end part */}
          <div className='flex justify-end'>
            <div>
              <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold'>Foundation</p>
              <div className='flex flex-col w-[30%]'>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>About</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>Manifesto</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>Advisors</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>Blog</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7'>Trailmap</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#7B686C] mt-[60px]'><hr /></div>
        <p className='mt-[30px] text-[#CCC2C2] text-center font-redRose tracking-[0.8px]'>© 2013-2023 | The Dogecoin Foundation & Dogecoin Project. All rights reserved.</p>
      </Container>
    </div>
  );
};

export default Footer;
