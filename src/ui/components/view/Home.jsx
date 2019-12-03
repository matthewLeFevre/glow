import React, { useState, useEffect } from "react";
import ConsoleView from "../components/containers/ConsoleView";
import BannerSection from "../components/containers/BannerSection";

function Home() {
  return (
    <ConsoleView>
      <BannerSection className="ln-bg--brightgrey col--12"></BannerSection>
    </ConsoleView>
  );
}

export default Home;
