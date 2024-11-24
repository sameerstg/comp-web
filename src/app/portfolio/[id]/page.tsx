import { notFound } from 'next/navigation';
import { ImageType, PortfolioItem, portfolios } from '@/static/data';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';

interface Props {
    params: { id: string };
}

// Mock function to fetch portfolio data
async function fetchPortfolioById(id: string): Promise<PortfolioItem | undefined> {
    return portfolios.find((x) => x.id === id);
}

export default async function PortfolioDetails({ params }: Props) {
    const portfolio = await fetchPortfolioById(params.id);

    if (!portfolio) {
        notFound(); // Automatically show a 404 page if portfolio is not found
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-8 text-center">{portfolio?.title}</h1>
            <p className="text-xl mb-8">{portfolio?.description ?? ""}</p>

            {portfolio?.items.map((item:any, index:string) => (
                <div key={index} className="mb-12">
                    {/* Conditional rendering based on image type */}
                    {item.imagesType !== ImageType.landscape ? (
                        <div className="grid grid-cols-4 gap-2">
                            {item.images?.slice(0, 4).map((image: any, imgIndex: any) => (
                                <Image
                                    key={imgIndex}
                                    src={image}
                                    height={500}
                                    width={300}
                                    alt={`${item.imagesType} image`}
                                    className="rounded-lg shadow-md mx-auto"
                                />
                            ))}
                        </div>
                    ) : (
                        <Carousel>
                            <CarouselContent>
                                {item.images?.map((image:any, imgIndex:string) => (
                                    <CarouselItem key={imgIndex} className="h-full flex items-center justify-center">
                                        <Link href={item.link ?? "#"} target="_blank" className="h-full w-full flex justify-center">
                                            <Image
                                                className="object-contain h-[calc(50vh-40px)] w-auto"
                                                key={imgIndex}
                                                src={image}
                                                alt="Landscape Image"
                                                width={1920}
                                                height={1080}
                                            />
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </Carousel>
                    )}
                </div>
            ))}
        </div>
    );
}
