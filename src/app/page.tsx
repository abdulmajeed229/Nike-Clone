import ClothesCad from "./components/clothes";
import DontImg from "./components/dont";
import Footer from "./components/footer";
import NavBar from "./components/header";
import NikeShowcase from "./components/heroHead";
import HeroImage from "./components/home";

import ShoesCard from "./components/shoesCard";
import TopHeader from "./components/topHeader";

export default function Home(){
  return(
    <>
    <TopHeader/>
    <NavBar/>
    <HeroImage/>
    <NikeShowcase/>
    <ShoesCard/>
  
    <ClothesCad/>
    
    <Footer/>
    </>
  )
}