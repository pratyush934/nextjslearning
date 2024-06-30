import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white">
      {/* <h1 className="text-center text-2xl">I am Pratyush</h1> */}
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
    </main>
  );
}
