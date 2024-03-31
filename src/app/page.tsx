import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default async function page() {
  return (
    <div className="h-[100%] w-[100%]">
      <Hero />

      <div className=" relative w-[100%] ">
        <Subscribe />
      </div>
    </div>
  );
}
