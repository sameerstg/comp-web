import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Image from 'next/image';


export interface Portfolio {
    link?: string;
    images?: string[];

}
interface props {
    portfolioArray: Portfolio[];
}
export default function PortfolioCarousel(props: props) {
    return (

        <Carousel className="h-[calc(100vh-120px)] flex flex-col justify-center align-middle">
            <CarouselContent className=''>
                {props.portfolioArray.map((_, index) => (
                    <CarouselItem key={index} className='h-full'>
                        <div className='flex h-[50vh] w-full mx-auto justify-center'>
                            {_.images ? _.images.length > 1 ?

                                // if image more than one {use for less width image}
                                <div className='flex'>
                                    {_.images.map((image, index1) => (
                                        <Image key={index1} className="w-auto" src={image} alt="none" width={2000} height={2000} />



                                    ))}
                                </div>
                                :
                                // if image is one {use for big image}
                                <Image className="w-auto mx-auto" src={_.images ? _.images[0] : ""} alt="none" width={2000} height={2000} />

                                : null}
                        </div>



                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
