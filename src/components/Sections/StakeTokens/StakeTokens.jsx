import Container from "../Container/Container";
import dogeImg from '@/assets/dogecoin_tokens/doge.png'
import icon1 from '@/assets/dogecoin_tokens/Group1.png'
import icon2 from '@/assets/dogecoin_tokens/Group2.png'
import icon3 from '@/assets/dogecoin_tokens/Group3.png'
import icon4 from '@/assets/dogecoin_tokens/Group4.png'
import icon5 from '@/assets/dogecoin_tokens/Group5.png'

const StakeTokens = () => {
  return (
    <div>
      <Container>
        <div className="md:flex gap-x-10">
          {/* Buy now card */}
          <div>

          </div>

          {/* Stake tokens */}
          <div className="font-redRose font-semibold">
            <h1 className="text-[#BB0F31] text-[30px] md:text-[38px] lg:text-[30px] xl:text-[40px] 2xl:text-[46px] uppercase">Stake $Dogecoin Tokens</h1>
            <p className="text-[#eec4cc] text-[20px]">Earn APY & The Earth</p>

            <img src={dogeImg} alt="Image" className="w-[350px] 2xl:w-[400px] mx-auto"/>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StakeTokens;
