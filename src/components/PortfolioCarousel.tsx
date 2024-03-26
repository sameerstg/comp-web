import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'
function PortfolioCarousel(props: any) {
    return (
        <div>
            <Carousel>
                <CarouselContent>
                    {
                        props.images.map(((image: any, key: any) => (
                            <div key={key}>
                                <CarouselItem>
                                    <Image src={image} alt='no image' />
                                </CarouselItem>
                            </div>
                        )))
                    }
                    {/* <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem> */}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default PortfolioCarousel