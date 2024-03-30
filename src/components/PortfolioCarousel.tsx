import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Image from 'next/image';


export interface Portfolio {
    link?: string;
    images?: string[];

}
interface props{
    portfolioArray:Portfolio[];
}
export default function PortfolioCarousel(props: props){
    return (
        <div className="flex flex-col justify-center items-center align-middle h-[calc(100vh-80px)] w-2/3">
            <Carousel className="w-full mx-auto">
                <CarouselContent className="">

                    {props.portfolioArray.map((_: Portfolio, index1: any) => (

                        <div key={index1} className="w-full mx-auto flex justify-center">
                            {_.images?.map((image, index2) => (
                                <div key={index2} className="">
                                    <CarouselItem className=" md:basis-1/1 lg:basis-1/1">


                                        <Image className="w-full mx-auto" src={image} alt="none" width={100} height={100} />

                                    </CarouselItem>
                                </div>


                            ))}
                        </div>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}
