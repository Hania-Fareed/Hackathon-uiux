import Header from "./components/header"
import Contacts from "./components/navbar"
import HeroSection from "./components/promotional"
import Feature from "./components/featured product"
import Footer from "./components/footer"


export default function Home(){
  return (
    <div>
      <Contacts/>
     <Header/>
     <HeroSection/>
      <Feature/>
      <Footer/>
     
    </div>
  )
}