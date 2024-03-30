import React from "react";

import { characterDesignPortfolio, mobileAppsPortfolio, mobileGamesPortfolio, modellingPortfolio, uiUxPortfolio, vrPortfolio, webAppPortfolio, websitePortfolio } from "@/static/static";
import PortfolioCarousel from "@/components/PortfolioCarousel";


export default function page() {
  return (
    <div className="">

      <PortfolioCarousel portfolioArray={mobileAppsPortfolio} />
      <PortfolioCarousel portfolioArray={mobileGamesPortfolio} />
      <PortfolioCarousel portfolioArray={webAppPortfolio} />
      <PortfolioCarousel portfolioArray={vrPortfolio} />
      <PortfolioCarousel portfolioArray={uiUxPortfolio} />
      <PortfolioCarousel portfolioArray={websitePortfolio} />
      <PortfolioCarousel portfolioArray={characterDesignPortfolio} />
      <PortfolioCarousel portfolioArray={modellingPortfolio} />

    </div>
  );
}
