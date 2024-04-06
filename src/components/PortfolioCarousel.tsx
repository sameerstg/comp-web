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
                        {/* <div className=" text-4xl text-center  font-semibold">{index + 1}</div> */}
                        <Image className="mx-auto h-full w-auto" src={_.images ? _.images[0] : ""} alt="none" width={2000} height={2000} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            {/* <CarouselPrevious /> */}
            {/* <CarouselNext /> */}
        </Carousel>
    );
}
