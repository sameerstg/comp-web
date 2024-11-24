import { notFound } from 'next/navigation';
import { portfolios } from '@/static/data'; // Replace with actual data source

interface Props {
    params: { id: string };
}

// Mock function to fetch portfolio data
async function fetchPortfolioById(id: string) {

    return portfolios.find(x => x.id === id)
}

export default async function PortfolioDetails({ params }: Props) {
    const portfolio = await fetchPortfolioById(params.id);

    if (!portfolio) {
        notFound(); // Automatically show a 404 page if portfolio is not found
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-5xl font-bold mb-8">{portfolio.title}</h1>
            <h1 className="text-5xl font-bold mb-8">{portfolio.description}</h1>
        </div>
    );
}
