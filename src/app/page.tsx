import { ModeToggle } from "@/components/ModeToggle";
import { mobileAppsPortfolio } from "@/static/static";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle />

      {mobileAppsPortfolio.map((category, index) => (
        <div key={category.link} className="flex flex-col items-center">
          <Link
            href={category.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-bold"
          >
            {category.link}
          </Link>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.images?.map((image, index) => (
              <Image
                key={index}
                src={image}
                width={526}
                height={296}
                alt="Mobile App"
              />
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
