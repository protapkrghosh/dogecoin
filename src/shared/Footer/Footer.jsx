import Container from '@/components/Sections/Container/Container';
import footerLogo from '@/assets/banner/dogecoin-logo 1.png'
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <Container>
        <div>
          {/* first part  */}
          <div>
            <img src={footerLogo} alt="" />
            <p className='text-[#CCC2C2] font-redRose text-[16px] tracking-[0.8px]'>The Shiba Inu is a Japanese breed of dog that was popularized as an online meme and represents Dogecoin. Dogecoin was created by Jackson Palmer & Shibetoshi Nakamoto.</p>
          </div>
          {/* second part  */}
          <div>
            <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold'>Announcements</p>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Trademarks</Link>
          </div>
          {/* third part  */}
          <div>
            <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold'>Sitemap</p>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>So Home</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>What is Dogecoin?</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Much Wallets</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Very Community</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>So Dogepedia</Link>
          </div>
          {/* end part */}
          <div>
            <p className='text-[#FFF] font-redRose text-[24px] tracking-[0.72px] font-bold'>Foundation</p>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>About</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Manifesto</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Advisors</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Blog</Link>
            <Link className='text-[#CCC2C2] text-[16px] font-redRose tracking-[0.8px] hover:underline'>Trailmap</Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
