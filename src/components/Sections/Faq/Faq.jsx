import Container from "../Container/Container";
import dogepedia from '@/assets/faq/image269.png'
import shape from '@/assets/faq/Group58.png'
import line from '@/assets/faq/Line 10.png'
import accordionBg1 from '@/assets/faq/Rectangle15.png'
import accordionBg2 from '@/assets/faq/Rectangle16.png'
import accordionBg3 from '@/assets/faq/Rectangle12.png'
import accordionBg4 from '@/assets/faq/Rectangle.png'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"


const Faq = () => {
  return (
    <div className="py-14 lg:py-24">
      <Container>
        <div className="lg:flex justify-between items-center">
          <div className="lg:w-1/2">
            <div className='flex md:justify-center lg:justify-normal items-center mb-16 lg:mb-0'>
              {/* Images */}
              <div>
                <h2 className="text-[#BB0F31] text-[53px] font-semibold font-redRose uppercase ml-9 mb-2">faq</h2>
                <img src={dogepedia} alt="Image" className='w-[170px] 2xl:w-[200px]' />
                <div style={{ backgroundImage: `url(${shape})` }} className='md:w-[90px] lg:w-[120px] md:h-[90px] lg:h-[120px] bg-no-repeat bg-contain md:-mt-12 lg:-mt-[80px] ml-[100px] 2xl:ml-[120px]' />
              </div>

              {/* Resources content */}
              <div className="font-redRose text-center md:mb-9 2xl:mb-12 md:-ml-10 2xl:ml-0">
                <div data-aos="fade-up" data-aos-duration="600">
                  <p className="text-white text-[30px] md:text-[38px] lg:text-[30px] xl:text-[38px] 2xl:text-[42px] font-semibold">Resources</p>
                  <img src={line} alt="Image" className="my-5 2xl:my-6" />
                </div>

                <div data-aos="fade-up" data-aos-duration="800">
                  <p className="text-white text-[30px] md:text-[38px] lg:text-[30px] xl:text-[38px] 2xl:text-[42px] font-semibold">How To's</p>
                  <img src={line} alt="Image" className="my-5 2xl:my-6" />
                </div>

                {/* shadow part  */}
                <div className='w-[300px] h-[300px] rounded-[400px] bg-[#BB0F31] blur-[200px] mt-[-300px]' />

                <div data-aos="fade-up" data-aos-duration="1000">
                  <p className="text-white text-[30px] md:text-[38px] lg:text-[30px] xl:text-[38px] 2xl:text-[42px] font-semibold">Documentation</p>
                  <img src={line} alt="Image" className="mt-5 2xl:mt-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:w-1/2 space-y-7 font-redRose">
            <div className="p-[1px] bg-gradient-to-b from-[#791c0f] form-40% to-[#6d262a00] to-60% rounded-[15px]">
              <div className="bg-[#260d06] rounded-[15px]">
                <div style={{ backgroundImage: `url(${accordionBg2})` }} className="bg-no-repeat bg-cover">
                  <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
                    <AccordionItem value="item-1" className="px-5 2xl:px-10 py-2">
                      <AccordionTrigger className="text-white text-[18px] 2xl:text-[20px]">A whale holds nearly 30% of Dogecoin supply! Is this true?</AccordionTrigger>

                      <AccordionContent className="text-[#CCC2C2] text-[16px] 2xl:text-[18px] w-[90%] 2xl:w-[85%] leading-[25px]">
                        A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by … <span className="text-[#BD1532] hover:underline cursor-pointer">Read more…</span>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#791c0f] form-40% to-[#6d262a00] to-60% rounded-[15px]">
              <div className="bg-[#260d06] rounded-[15px]">
                <div style={{ backgroundImage: `url(${accordionBg2})` }} className="bg-no-repeat bg-cover">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-2" className="px-5 2xl:px-10 py-2">
                      <AccordionTrigger className="text-white text-[18px] 2xl:text-[20px]">Dogecoin has no utility!</AccordionTrigger>

                      <AccordionContent className="text-[#CCC2C2] text-[16px] 2xl:text-[18px] w-[90%] 2xl:w-[85%] leading-[25px]">
                        A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by … <span className="text-[#BD1532] hover:underline cursor-pointer">Read more…</span>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#791c0f] form-40% to-[#6d262a00] to-60% rounded-[15px]">
              <div className="bg-[#260d06] rounded-[15px]">
                <div style={{ backgroundImage: `url(${accordionBg2})` }} className="bg-no-repeat bg-cover">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-3" className="px-5 2xl:px-10 py-2">
                      <AccordionTrigger className="text-white text-[18px] 2xl:text-[20px]">Can you put a cap on Dogecoin?</AccordionTrigger>

                      <AccordionContent className="text-[#CCC2C2] text-[16px] 2xl:text-[18px] w-[90%] 2xl:w-[85%] leading-[25px]">
                        A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by … <span className="text-[#BD1532] hover:underline cursor-pointer">Read more…</span>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#791c0f] form-40% to-[#6d262a00] to-60% rounded-[15px]">
              <div className="bg-[#260d06] rounded-[15px]">
                <div style={{ backgroundImage: `url(${accordionBg2})` }} className="bg-no-repeat bg-cover">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-4" className="px-5 2xl:px-10 py-2">
                      <AccordionTrigger className="text-white text-[18px] 2xl:text-[20px]">Dogecoin has no developers!</AccordionTrigger>

                      <AccordionContent className="text-[#CCC2C2] text-[16px] 2xl:text-[18px] w-[90%] 2xl:w-[85%] leading-[25px]">
                        A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by … <span className="text-[#BD1532] hover:underline cursor-pointer">Read more…</span>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="p-[1px] bg-gradient-to-b from-[#791c0f] form-40% to-[#6d262a00] to-60% rounded-[15px]">
              <div className="bg-[#260d06] rounded-[15px]">
                <div style={{ backgroundImage: `url(${accordionBg2})` }} className="bg-no-repeat bg-cover">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-5" className="px-5 2xl:px-10 py-2">
                      <AccordionTrigger className="text-white text-[18px] 2xl:text-[20px]">Dogecoin and coin burning</AccordionTrigger>

                      <AccordionContent className="text-[#CCC2C2] text-[16px] 2xl:text-[18px] w-[90%] 2xl:w-[85%] leading-[25px]">
                        A common source of FUD surrounding Dogecoin is the claim that certain wallets holding a large percentage of the supply are owned by private investors or so-called “whales”. In reality, many of the top Dogecoin wallets are cold wallets or hot wallets controlled by … <span className="text-[#BD1532] hover:underline cursor-pointer">Read more…</span>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
