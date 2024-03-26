import PortfolioCarousel from '@/components/PortfolioCarousel'
import { mobileAppsPortfolio, mobileGamesPortfolio } from '@/static/static'
import React from 'react'

function page() {
    return (
        <div>

            <div>Portfolio</div>
            <div>
                <PortfolioCarousel images={mobileGamesPortfolio} />
            </div>
        </div>
    )
}

export default page