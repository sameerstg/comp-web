import Hero from "@/components/Hero";

import Services from "@/components/ServicesSection";

export default async function page() {
  return (
    <div className="h-[100%] w-[100%]">
      <Hero />
      <div className="max-w-[100%] ">
        <Services />
      </div>
    </div>
  );
}
