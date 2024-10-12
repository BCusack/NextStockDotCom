import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Typewriter from "@/app/components/TypeWriter";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      <Navbar />
      <main className=" flex-grow flex items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="text-white mb-4  animate-fadeIn duration-700">
            STOCKSDIGITAL
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-easyUp">
            Investors building high performing ASX small cap stock portfolios.
          </h2>
          <div className="text-xl text-gray-400 mb-8  animate-easyUp">
            <Typewriter
              text={
                "    We're interested in long-term returns, sharing our journey, and helping others learn from our 20+ years of experience."
              }
              speed={50}
            />
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
