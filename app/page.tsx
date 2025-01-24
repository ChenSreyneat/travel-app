import Image from "next/image";
import Navbar from "../components/Navbar"
import Carousal from "../components/Carousal"
import Search from "../components/Search"
import BannerHotel from "../components/BannerHotel"
import CardHotel from "../components/CardHotel"
import BannerTour from "../components/BannerTour"
import CardTour from "../components/CardTour"
import Footer from "../components/Footer"
import './globals.css';
export default function Home() {
  return (
    <div>
     <Navbar />
     <Carousal />
     <Search />
     <BannerHotel />
     <CardHotel />
     <BannerTour />
     <CardTour />
     <Footer />

    </div>
  );
}
