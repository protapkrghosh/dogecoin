import React from 'react';
import Container from '../Container/Container';
import reddit from '@/assets/social/Vector.png'
import discord from '@/assets/social/Vector (1).png'
import instagram from '@/assets/social/Frame 109.png'

const SocialMedia = () => {
  return (
    <div className='bg-[#F9748E] py-6 lg:py-7'>
      <Container>
        <div className='flex justify-center items-center'>
          <img src={reddit} alt="Image" className='w-[90px] md:w-[120px] lg:w-[160px] h-auto cursor-pointer'/>
          <img src={discord} alt="Image" className='w-[120px] md:w-[150px] lg:w-[200px] h-auto mx-6 md:mx-14 lg:mx-36 2xl:mx-60 cursor-pointer'/>
          <img src={instagram} alt="Image" className='w-[120px] md:w-[150px] lg:w-[200px] h-auto cursor-pointer'/>
        </div>
      </Container>
    </div>
  );
};

export default SocialMedia;
