import React from "react";

import PortfolioCarousel from "@/components/PortfolioCarousel";
import { portfolios } from "@/static/data";


export default function page() {
  return (
    <div className="mx-2">
      {
        portfolios.map((portfolio, key) => (<div key={key}>

          <PortfolioCarousel portfolio={portfolio} />

        </div>))
      }

    </div>
  );
}
