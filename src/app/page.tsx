import Hero from "@/components/Hero";

import Services from "@/components/ServicesSection";

export default async function page() {
  return (
    <div className="h-[100%] w-[100%]">
      <Hero />

      {/* 
      <div className=" relative w-[100%] ">
        <Subscribe />
      </div> */}

      {/* <div className="h-[5px] w-[100%] bg-gradient-to-r from-primary to-[#ddb411] dark:to-[#d1aa0d]"></div> */}
      <div className="max-w-[100%] ">
        <Services />
      </div>
    </div>
  );
}
