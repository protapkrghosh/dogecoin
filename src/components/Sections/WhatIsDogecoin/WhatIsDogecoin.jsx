import React from 'react';
import Container from '../Container/Container';
import thimble from '@/assets/do_only_good/image263.png'
import shape from '@/assets/do_only_good/Group58.png'
import icon from '@/assets/do_only_good/Vector3.png'

const WhatIsDogecoin = () => {
  return (
    <div className='bg-[#BB0F31] py-24'>
      <Container>
        <div className='md:flex items-center md:gap-x-10 lg:gap-x-14 xl:gap-x-20'>
          <div className='md:w-1/2'>
          <div></div>

            <div>
              <img src={thimble} alt="Image" className='lg:w-[550px] 2xl:w-[600px] mb-8 md:mb-0' />
            </div>

            {/* <img src={shape} alt="Image" className='w-[130px]' /> */}
          </div>

          {/* Content */}
          <div className='md:w-1/2'>
            <div className='relative'>
              <h2 className='text-[45px] md:text-[40px] lg:text-[45px] xl:text-[53px] text-white font-semibold capitalize leading-[70px] mb-7'>Do only good <br /> everyday.</h2>

              <img src={icon} alt="image" className='w-[160px] lg:w-[200px] xl:w-[220px] absolute bottom-0 right-12 md:-right-3 lg:right-3 xl:right-16 2xl:right-52' />
            </div>

            <p className='text-[#E5D8D8] 2xl:text-[18px] xl:w-[82%] 2xl:w-[69%]'>The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links:</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsDogecoin;
