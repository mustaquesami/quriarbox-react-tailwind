import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import FactCounter from "./components/FactCounter";
import Video from "./components/Video";
import Testimonial from "./components/Testimonial";
import "slick-carousel/slick/slick.css"; 
import Contact from "./components/Contact";
import Find from "./components/Find";

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
    </>
  )
}