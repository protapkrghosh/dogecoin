import dogeImg from '@/assets/whatis_dogecoin/Group60.png';
import Container from '../Container/Container';

const WhatIsDogecoin = () => {
  return (
    <div className='py-14 xl:py-20'>
      <Container>
        <div className='flex flex-col-reverse lg:flex-row items-center'>
          <div className="lg:w-1/2 mb-10 lg:mb-0 mt-10 lg:mt-0">
            <h1 className='text-[#FFFFFF] font-redRose text-[43px] md:text-[40px] lg:text-[45px] xl:text-[53px] font-semibold'>What is Dogecoin?</h1>
            <p className='text-[#E6DADA] font-redRose lg:w-[86%] 2xl:w-[69%] mt-2 mb-6'>An open-source peer-to-peer digital currency, favoured by Shiba Inus worldwide.</p>

            <p className='text-[#CCC2C2] font-redRose lg:w-[97%] 2xl:w-[78%]'>At its heart, Dogecoin is the accidental crypto movement that makes people smile! It is also an opensource peer-to-peer cryptocurrency that utilises blockchain technology, a highly secure decentralised system of storing information as a public ledger that is maintained by a network of computers called nodes. More than this, though, is the ethos of Dogecoin, summarised in the Dogecoin Manifesto , and its amazing, vibrant community made up of friendly folks just like you! <br /> <span className='text-[#FF4500] cursor-pointer hover:underline'>LEARN MORE</span></p>
          </div>

          <div className="lg:w-1/2 md:-my-10 ml-6" data-aos="flip-right" data-aos-duration="1000">
            <img src={dogeImg} alt="Image" className='scale-125 lg:scale-125'/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsDogecoin;
