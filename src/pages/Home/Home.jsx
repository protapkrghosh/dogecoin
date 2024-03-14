import Banner from '@/components/Sections/Banner/Banner';
import FindOutMore from '@/components/Sections/FindOutMore/FindOutMore';
import GettingStarted from '@/components/Sections/GettingStarted/GettingStarted';
import SocialMedia from '@/components/Sections/SocialMedia/SocialMedia';
import DoOnlyGood from '@/components/Sections/DoOnlyGood/DoOnlyGood';
import WhatIsDogecoin from '@/components/Sections/WhatIsDogecoin/WhatIsDogecoin';
import Faq from '@/components/Sections/Faq/Faq';
import StakeTokens from '@/components/Sections/StakeTokens/StakeTokens';

const Home = () => {
  return (
    <div>
      <Banner />
      <SocialMedia />
      {/* <StakeTokens /> */}
      <WhatIsDogecoin />
      <GettingStarted />
      <DoOnlyGood />
      <Faq />
      <FindOutMore />
    </div>
  );
};

export default Home;
