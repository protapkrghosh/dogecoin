import Container from '@/components/Sections/Container/Container';
import footerLogo from '@/assets/banner/dogecoin-logo 1.png'
import React from 'react';

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

        </div>
      </Container>
    </div>
  );
};

export default Footer;
