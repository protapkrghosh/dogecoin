import Container from '@/components/Sections/Container/Container';
import footerLogo from '@/assets/banner/Frame 904.png'
import footerLine from '@/assets/footer/Line 11.png'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='mt-10 relative'>
      <Container>
        {/*  shadow part  */}
        <div className='w-[300px] h-[300px] absolute top-[0px] rounded-[400px] bg-[#551318] shadowFooter' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-7 md:gap-0'>
          {/* Dogecoin  */}
          <div className=''>
            <img src={footerLogo} alt="" />
            <p className='text-[#CCC2C2] font-redRose text-[16px] tracking-[0.8px] xl:w-[300px] 2xl:w-[397px] mt-[25px]'>The Shiba Inu is a Japanese breed of dog that was popularized as an online meme and represents Dogecoin. Dogecoin was created by Jackson Palmer & Shibetoshi Nakamoto.</p>
          </div>

          {/* Announcements  */}
          <div className='flex justify-start md:justify-center lg:justify-end md:ml-14 lg:ml-0 lg:-mr-5 xl:-mr-9  2xl:-mr-14'>
            <div>
              <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold mb-[15px]'>Announcements</p>
              <div className='flex flex-col w-fit'>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Trademarks</Link>
              </div>
            </div>
          </div>

          {/* Sitemap  */}
          <div className='flex lg:justify-end md:mt-10 lg:mt-0 lg:-mr-5 xl:-mr-8 2xl:-mr-10'>
            <div>
              <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold mb-[15px]'>Sitemap</p>
              <div className='flex flex-col'>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 w-fit mb-[15px]'>So Home</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 w-fit mb-[15px]'>What is Dogecoin?</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 w-fit mb-[15px]'>Much Wallets</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 w-fit mb-[15px]'>Very Community</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 w-fit mb-[15px]'>So Dogepedia</Link>
              </div>
            </div>
          </div>

          {/* Foundation */}
          <div className='flex relative justify-start md:justify-center lg:justify-end md:mt-10 lg:mt-0'>

            <div className='z-40'>
              <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold mb-[15px]'>Foundation</p>
              <div className='flex flex-col w-[30%]'>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 mb-[15px]'>About</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 mb-[15px]'>Manifesto</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 mb-[15px]'>Advisors</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 mb-[15px]'>Blog</Link>
                <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline leading-7 mb-[15px]'>Trailmap</Link>
              </div>
            </div>
            {/* shadow part  */}
            <div className='w-[300px] h-[300px] rounded-[400px] bg-[#551318] shadowFooter top-[-30px] absolute' />
          </div>
        </div>
      </Container>

      <div className='mt-[60px]'>
        <img src={footerLine} alt="" />
      </div>

      <p className='my-[30px] text-[#CCC2C2] text-center font-redRose tracking-[0.8px]'>© 2013-2023 | The Dogecoin Foundation & Dogecoin Project. All rights reserved.</p>
    </div>
  );
};

export default Footer;