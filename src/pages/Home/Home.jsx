import Banner from '@/components/Sections/Banner/Banner';
import FindOutMore from '@/components/Sections/FindOutMore/FindOutMore';
import SocialMedia from '@/components/Sections/SocialMedia/SocialMedia';
import WhatIsDogecoin from '@/components/Sections/WhatIsDogecoin/WhatIsDogecoin';

const Home = () => {
  return (
    <div>
      <Banner />
      <SocialMedia />
      <WhatIsDogecoin />
      <FindOutMore />
    </div>
  );
};

export default Home;
