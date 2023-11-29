import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import FactCounter from "./components/FactCounter";
import Video from "./components/Video";
import Testimonial from "./components/Testimonial";
import "slick-carousel/slick/slick.css"; 
import Contact from "./components/Contact";
import Find from "./components/Find";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import CopyRight from "./components/CopyRight";

export default function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Services/>
      <FactCounter/>
      <Video/>
      <Testimonial/>
      <Contact/>
      <Find/>
      <Subscribe/>
      <Footer/>
      <CopyRight/>
    </>
  )
}