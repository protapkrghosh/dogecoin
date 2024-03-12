import Container from "../Container/Container";
import dogepedia from '@/assets/faq/image269.png'
import shape from '@/assets/faq/Group58.png'
import line from '@/assets/faq/Line 10.png'

const Faq = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-center">
          <div className='flex items-center'>
            {/* Images */}
            <div>
              <h2 className="text-[#BB0F31] text-[53px] font-semibold font-redRose uppercase ml-9 mb-2">faq</h2>
              <img src={dogepedia} alt="Image" className='w-[170px] 2xl:w-[200px]' />
              <div style={{ backgroundImage: `url(${shape})` }} className='md:w-[90px] lg:w-[120px] md:h-[90px] lg:h-[120px] bg-no-repeat bg-contain md:-mt-12 lg:-mt-[80px] ml-[100px]' />
            </div>

            {/*  */}
            <div className="font-redRose text-center mb-9 2xl:mb-12 -ml-10 2xl:ml-0">
              <p className="text-white text-[38px] 2xl:text-[42px] font-semibold">Resources</p>
              <img src={line} alt="Image" className="my-5 2xl:my-6" />

              <p className="text-white text-[38px] 2xl:text-[42px] font-semibold">How To's</p>
              <img src={line} alt="Image" className="my-5 2xl:my-6" />

              <p className="text-white text-[38px] 2xl:text-[42px] font-semibold">Documentation</p>
              <img src={line} alt="Image" className="mt-5 2xl:mt-6" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
