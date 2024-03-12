import React from 'react';
import Container from '../Container/Container';
import thimble from '@/assets/do_only_good/image263.png'
import shape from '@/assets/do_only_good/Group58.png'
import icon from '@/assets/do_only_good/Vector3.png'

const WhatIsDogecoin = () => {
  return (
    <div className='bg-[#BB0F31] py-24'>
      <Container>
        <div className='lg:flex items-center md:gap-x-10 lg:gap-x-14 xl:gap-x-20 relative'>
          <div className='lg:w-1/2'>
            <img src={thimble} alt="Image" className='lg:w-[550px] 2xl:w-[600px] mb-8 md:mb-0 md:ml-8 lg:ml-12 pr-14' />
            <div style={{ backgroundImage: `url(${shape})` }} className='md:w-[90px] lg:w-[120px] md:h-[90px] lg:h-[120px] bg-no-repeat bg-contain md:-mt-12 lg:-mt-16' />
          </div>

          {/* Content */}
          <div className='lg:w-1/2 md:mt-6 lg:mt-0 xl:-mt-10 2xl:-mt-16 md:ml-10 2xl:-ml-20'>
            <div className='relative'>
              <h2 className='text-[45px] md:text-[40px] lg:text-[45px] xl:text-[53px] text-white font-semibold capitalize lg:leading-[70px] mb-7'>Do only good <br /> everyday.</h2>

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
