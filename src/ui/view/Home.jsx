import React, {useState, useEffect} from 'react';
import ConsoleView from '../containers/ConsoleView';
import BannerSection from '../containers/BannerSection';
 
function Home() {
  return(
    <ConsoleView>
      <BannerSection className="ln-bg--brightgrey col--12">

      </BannerSection>
    </ConsoleView>
  );
}

export default Home;