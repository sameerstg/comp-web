'use client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import Image from 'next/image';
import { ImageType, Portfolio } from '@/static/data';
import Link from 'next/link';

interface Props {
    portfolio: Portfolio;
}

function chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
}

export default function PortfolioCarousel({ portfolio }: Props) {
    return (
        <Carousel className="h-[calc(100vh-120px)] flex flex-col justify-center align-middle">
            <Link href={`/portfolio/${portfolio.id}`}>
                <div className="w-full text-center text-5xl font-bold mb-4 cursor-pointer hover:underline">
                    {portfolio.title}
                </div>
            </Link>
            <CarouselContent>
                {portfolio.items.map((item, index) => {
                    if (item.imagesType === ImageType.landscape) {
                        const landscapeImage = item?.images?.[0];
                        return (
                            <CarouselItem key={index} className="h-full flex items-center justify-center">
                                <Link href={item.link} target="_blank" className="h-full w-full flex justify-center">
                                    {landscapeImage && (
                                        <Image
                                            className="object-contain h-[calc(50vh-40px)] w-auto"
                                            src={landscapeImage}
                                            alt="Landscape Image"
                                            width={1920}
                                            height={1080}
                                        />
                                    )}
                                </Link>
                            </CarouselItem>
                        );
                    } else {
                        const groupedImages = item.images ? chunkArray(item.images, 4) : [];
                        return groupedImages.map((group, groupIndex) => (
                            <CarouselItem
                                key={`${index}-${groupIndex}`}
                                className="h-full flex items-center justify-center"
                            >
                                <Link href={item.link} target="_blank" className="h-full w-full flex justify-center">
                                    <div className="grid grid-cols-4">
                                        {group.map((image, imgIndex) => (
                                            <Image
                                                key={imgIndex}
                                                className="object-contain h-[calc(50vh-40px)] w-auto"
                                                src={image}
                                                alt="Portrait Image"
                                                width={500}
                                                height={750}
                                            />
                                        ))}
                                    </div>
                                </Link>
                            </CarouselItem>
                        ));
                    }
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
