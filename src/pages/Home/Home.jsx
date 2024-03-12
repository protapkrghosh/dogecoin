import Banner from '@/components/Sections/Banner/Banner';
import FindOutMore from '@/components/Sections/FindOutMore/FindOutMore';
import GettingStarted from '@/components/Sections/GettingStarted/GettingStarted';
import SocialMedia from '@/components/Sections/SocialMedia/SocialMedia';
import DoOnlyGood from '@/components/Sections/DoOnlyGood/DoOnlyGood';
import WhatIsDogecoin from '@/components/Sections/WhatIsDogecoin/WhatIsDogecoin';

const Home = () => {
  return (
    <div>
      <Banner />
      <SocialMedia />
      <GettingStarted />
      <WhatIsDogecoin />
      <GettingStarted />
      <DoOnlyGood />
      <FindOutMore />
    </div>
  );
};

export default Home;
