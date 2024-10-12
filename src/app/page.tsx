import Navbar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import BodySectionComponent from "@/app/components/BodySectionComponent";

("@/app/components/AboutComponent");

export default function Home() {
  return (
    <div className="font-sans  grid grid-rows-[auto,1fr,auto] min-h-screen bg-black shadow text-white">
      <title>Stocks Digital</title>
      <Navbar />
      <main className="row-auto px-4 grid place-items-center">
        <BodySectionComponent />
      </main>
      <Footer />
    </div>
  );
}
