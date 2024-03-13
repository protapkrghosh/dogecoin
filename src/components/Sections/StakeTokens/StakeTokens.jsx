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
import { useEffect, useState } from "react";

const StakeTokens = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-03-16") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <span key={interval} className="px-[26px]">
        <span className="font-bold text-[43px]">
          {timeLeft[interval]}
        </span>{" "}
      </span>
    );
  });

  return (
    <div className="pt-16 lg:pt-28 pb-10">
      <Container>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-x-10 lg:gap-x-14 xl:gap-x-24 text-center">
          {/* Buy now card */}
          <div className="md:w-2/3 lg:w-2/5 md:mx-auto lg:mx-0 text-white font-redRose bg-[#6F3232] border border-[#BB0F31] rounded-[28px] px-[30px] 2xl:px-[40px] py-[20px]">
            <h3 className="text-[26px] lg:text-[22px] xl:text-[25px] 2xl:text-[28px] font-semibold capitalize mb-5">Buy now before price rise</h3>

            {/* Manual Timer */}
            <div className="flex justify-between bg-[#BB0F31] rounded-[20px] px-5 md:px-[25px] lg:px-3 xl:px-[25px] 2xl:px-[30px] pt-[12px] pb-1">
              <div className="font-semibold">
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Days</p>
                <p className="text-[43px]">01</p>
              </div>
              <div className="font-semibold">
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Hours</p>
                <p className="text-[43px]">02</p>
              </div>
              <div className="font-semibold">
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Minutes</p>
                <p className="text-[43px]">53</p>
              </div>
              <div className="font-semibold">
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Second</p>
                <p className="text-[43px]">02</p>
              </div>
            </div>

            {/* Dynamic Timer */}
            {/* <div className="bg-[#BB0F31] rounded-[20px]">
              <div className="flex justify-between font-semibold px-5 md:px-[25px] lg:px-3 xl:px-[25px] 2xl:px-[30px] pt-[12px] pb-1">
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Days</p>
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Hours</p>
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Minutes</p>
                <p className="text-[17px] md:text-[21px] lg:text-[18px] xl:text-[20px] 2xl:text-[23px] -mb-2">Second</p>
              </div>

              <h2>
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
              </h2>
            </div> */}

            <p className="text-[17px] 2xl:text-[19px] tracking-[1px] my-4">USDT RAISED: $520,320.46 / $543,440</p>
            <Progress value={90} />

            <div className="flex justify-center items-center mb-1 mt-4">
              <p className="2xl:text-[18px] uppercase tracking-[1px] mr-2">YOUR PURCHASED $POODL= 0</p>
              <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" />
            </div>

            <div className="flex justify-center items-center">
              <p className="2xl:text-[18px] uppercase tracking-[1px] mr-2">YOUR STAKEABLE $POODL= 0</p>
              <IoMdInformationCircleOutline className="text-[#bb0f31] rotate-180" />
            </div>

            <div className="flex justify-center items-center my-4">
              <img src={line} alt="Image" className="w-[52px] md:w-[55px] lg:w-[50px] 2xl:w-[90px]" />
              <p className="2xl:text-[18px] uppercase tracking-[2px] md:tracking-[4px] lg:tracking-[0px] xl:tracking-[4px] px-2">1 $Poodl - $0.000445</p>
              <img src={line} alt="Image" className="w-[52px] md:w-[55px] lg:w-[50px] 2xl:w-[90px]" />
            </div>

            {/* Ethereum button */}
            <div className="flex justify-between gap-x-6">
              <div className="flex items-center gap-3 2xl:gap-5 bg-[#BB0F31] w-fit px-4 lg:px-2 xl:px-4 py-[10px] rounded-[30px]">
                <img src={icon1} alt="Image" className="w-[22px] md:w-[31px] lg:w-[23px] xl:w-[25px] 2xl:w-[31px]" />
                <p className="text-[17px] lg:text-[15px] xl:text-[18px] text-start uppercase mr-5 md:mr-0">ETH</p>
              </div>

              <div className="flex items-center gap-3 2xl:gap-5 bg-[#BB0F31] w-fit px-4 lg:px-2 xl:px-4 py-[10px] rounded-[30px]">
                <img src={icon2} alt="Image" className="w-[22px] md:w-[31px] lg:w-[23px] xl:w-[25px] 2xl:w-[31px]" />
                <p className="text-[17px] lg:text-[15px] xl:text-[18px] text-start uppercase mr-5 md:mr-0">ETH</p>
              </div>

              <div className="flex items-center gap-3 2xl:gap-5 bg-[#BB0F31] w-fit px-4 lg:px-2 xl:px-4 py-[10px] rounded-[30px]">
                <img src={icon3} alt="Image" className="w-[22px] md:w-[28px] lg:w-[21px] xl:w-[22px] 2xl:w-[28px]" />
                <p className="text-[17px] lg:text-[15px] xl:text-[18px] text-start uppercase mr-5 md:mr-0">ETH</p>
              </div>
            </div>

            {/* ETH you pay */}
            <div className="text-white flex justify-between mt-5 mb-4">
              <p className="2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">ETH you pay</p>
              <p className="2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">Max</p>
              <p className="2xl:text-[18px] md:tracking-[2px] lg:tracking-[0px] xl:tracking-[2px] 2xl:tracking-[3px]">$Poodl you receive</p>
            </div>

            {/* Input field */}
            <div className="flex justify-between gap-x-6">
              <div className="relative">
                <Input type="text" placeholder="0" className="text-[18px] py-[23px] rounded-[30px] bg-[#BB0F31] placeholder:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />

                <img src={icon1} alt="Image" className="absolute top-[7px] right-4" />
              </div>

              <div className="relative">
                <Input type="text" placeholder="0" className="text-[18px] py-[23px] rounded-[30px] bg-[#BB0F31] placeholder:text-white border-none focus-visible:ring-0 focus-visible:ring-offset-0 px-4" />

                <img src={icon5} alt="Image" className="w-[21px] absolute top-[7px] right-4" />
              </div>
            </div>

            {/* Button */}
            <div className="xl:flex justify-between gap-x-6 mt-7 mb-8">
              <Button className="text-[18px] lg:text-[16px] xl:text-[15px] 2xl:text-[20px] font-semibold rounded-[30px] bg-[#6b2231] hover:bg-[#80283a] border border-[#BB0F31] py-6 2xl:py-7 tracking-[2px] 2xl:tracking-[3px] w-full xl:w-1/2">Connect Wallet</Button>

              <div className="relative xl:w-1/2">
                <img src={icon4} alt="Image" className="w-[25px] absolute top-8 xl:top-[12px] 2xl:top-[16px] left-16 md:left-24 lg:left-14 xl:left-2 2xl:left-3 cursor-pointer" />

                <Button className="text-[18px] lg:text-[16px] xl:text-[15px] 2xl:text-[20px] font-semibold rounded-[30px] bg-[#6b2231] hover:bg-[#80283a] border border-[#BB0F31] pl-10 2xl:pl-10 py-6 2xl:py-7 mt-5 xl:mt-0 tracking-[2px] 2xl:tracking-[3px] w-full xl:w-auto">Buy with BNB</Button>
              </div>
            </div>

            <p>Widget powered by Web3 Payments</p>
          </div>

          {/* Stake tokens */}
          <div className="lg:w-auto text-start font-redRose font-semibold">
            <h1 className="text-[#BB0F31] text-[30px] md:text-[38px] lg:text-[30px] xl:text-[40px] 2xl:text-[46px] uppercase">Stake $Dogecoin Tokens</h1>
            <p className="text-[#eec4cc] text-[22px] tracking-[3px]">Earn APY & The Earth</p>

            <img src={dogeImg} alt="Image" className="lg:w-[420px] 2xl:w-[450px] mx-auto my-10 lg:mt-0" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StakeTokens;
