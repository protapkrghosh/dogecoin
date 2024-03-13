import Container from "../Container/Container";
import dogeImg from '@/assets/dogecoin_tokens/doge.png'
import icon1 from '@/assets/dogecoin_tokens/Group1.png'
import icon2 from '@/assets/dogecoin_tokens/Group2.png'
import icon3 from '@/assets/dogecoin_tokens/Group3.png'
import icon4 from '@/assets/dogecoin_tokens/Group4.png'
import icon5 from '@/assets/dogecoin_tokens/Group5.png'
import line from '@/assets/dogecoin_tokens/Line 13.png'
import { Progress } from "@/components/ui/progress"
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";

const StakeTokens = () => {
  return (
    <div className="pt-28 pb-10">
      <Container>
        <div className="lg:flex items-center gap-x-10 lg:gap-x-14 xl:gap-x-24 text-center">
          {/* Buy now card */}
          <div className="lg:w-2/5 text-white font-redRose bg-[#6F3232] border border-[#BB0F31] rounded-[28px] px-[30px] 2xl:px-[40px] py-[20px]">
            <h3 className="text-[25px] font-semibold capitalize mb-5">Buy now before price rise</h3>
            <div className="flex justify-between bg-[#BB0F31] rounded-[20px] px-[25px] 2xl:px-[30px] pt-[12px] pb-1">
              <div className="font-semibold">
                <p className="text-[20px] -mb-2">Days</p>
                <p className="text-[43px]">01</p>
              </div>
              <div className="font-semibold">
                <p className="text-[20px] -mb-2">Hours</p>
                <p className="text-[43px]">02</p>
              </div>
              <div className="font-semibold">
                <p className="text-[20px] -mb-2">Minutes</p>
                <p className="text-[43px]">53</p>
              </div>
              <div className="font-semibold">
                <p className="text-[20px] -mb-2">Second</p>
                <p className="text-[43px]">02</p>
              </div>
            </div>

            <p className="text-[17px] 2xl:text-[19px] tracking-[1px] my-4">USDT RAISED: $520,320.46 / $543,440</p>
            <Progress value={90} />

            <div className="flex justify-center items-center mb-1 mt-4">
              <p className="uppercase tracking-[1px] mr-2">YOUR PURCHASED $POODL= 0</p>
              <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" />
            </div>

            <div className="flex justify-center items-center">
              <p className="uppercase tracking-[1px] mr-2">YOUR STAKEABLE $POODL= 0</p>
              <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" />
            </div>

            <div className="flex justify-center items-center my-4">
              <img src={line} alt="Image" className="w-[50px]" />
              <p className="uppercase tracking-[4px] px-2">1 $Poodl - $0.000445</p>
              <img src={line} alt="Image" className="w-[50px]" />
            </div>

            {/* Ethereum button */}
            <div className="flex justify-between gap-x-6">
              <div className="flex items-center gap-3 2xl:gap-5 bg-[#BB0F31] w-fit px-4 py-[10px] rounded-[30px]">
                <img src={icon1} alt="Image" className="w-[25px] 2xl:w-[31px]" />
                <p className="text-[18px] text-start uppercase">ETH</p>
              </div>

              <div className="flex items-center gap-3 2xl:gap-5 bg-[#BB0F31] w-fit px-4 py-[10px] rounded-[30px]">
                <img src={icon2} alt="Image" className="w-[25px] 2xl:w-[31px]" />
                <p className="text-[18px] text-start uppercase">ETH</p>
              </div>

              <div className="flex items-center gap-3 2xl:gap-5 bg-[#BB0F31] w-fit px-4 py-[10px] rounded-[30px]">
                <img src={icon3} alt="Image" className="w-[22px] 2xl:w-[28px]" />
                <p className="text-[18px] text-start uppercase">ETH</p>
              </div>
            </div>

            {/* ETH you pay */}
            <div className="text-white flex justify-between mt-5 mb-4">
              <p className="tracking-[2px] 2xl:tracking-[3px]">ETH you pay</p>
              <p className="tracking-[2px] 2xl:tracking-[3px]">Max</p>
              <p className="tracking-[2px] 2xl:tracking-[3px]">$Poodl you receive</p>
            </div>

            {/* Input field */}
            <div className="flex justify-between gap-x-6">
              <div className="relative">
                <Input type="text" placeholder="0" className="text-[18px] py-[23px] rounded-[30px] bg-[#BB0F31] placeholder:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />

                <img src={icon1} alt="Image" className="absolute top-[7px] right-4" />
              </div>

              <div className="relative">
                <Input type="text" placeholder="0" className="text-[18px] py-[23px] rounded-[30px] bg-[#BB0F31] placeholder:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />

                <img src={icon5} alt="Image" className="w-[21px] 2xl:w-[28px] absolute top-[7px] right-4" />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-between gap-x-6 mt-7 mb-8">
              <Button className="text-[15px] 2xl:text-[20px] font-semibold rounded-[30px] bg-[#6b2231] hover:bg-[#80283a] border border-[#BB0F31] 2xl:px-5 py-6 2xl:py-7 tracking-[2px] 2xl:tracking-[3px] w-1/2">Connect Wallet</Button>

              <div className="relative w-1/2">
                <img src={icon4} alt="Image" className="w-[25px] absolute top-[12px] left-2 cursor-pointer" />
                <Button className="text-[15px] 2xl:text-[20px] font-semibold rounded-[30px] bg-[#6b2231] hover:bg-[#80283a] border border-[#BB0F31] pl-10 2xl:px-5 py-6 2xl:py-7 tracking-[2px] 2xl:tracking-[3px]">Buy with BNB</Button>
              </div>
            </div>

            <p>Widget powered by Web3 Payments</p>
          </div>

          {/* Stake tokens */}
          <div className="lg:w-auto font-redRose font-semibold">
            <h1 className="text-[#BB0F31] text-[30px] md:text-[38px] lg:text-[30px] xl:text-[40px] 2xl:text-[46px] uppercase">Stake $Dogecoin Tokens</h1>
            <p className="text-[#eec4cc] text-[22px] tracking-[3px] text-start">Earn APY & The Earth</p>

            <img src={dogeImg} alt="Image" className="w-[420px] 2xl:w-[450px] mx-auto" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StakeTokens;
