import "./App.css";
import About from "./components/about";
//import Timer from "./components/timer/timer";
import Faq from "./components/faq/faq";
import Schedule from "./components/schedule/schedule";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/hero";
import PrizePool from "./components/PrizePool/PrizePool";
import Sponsors from "./components/sponsors/sponsors";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Day from "./components/day/day";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Day></Day>
      <Schedule></Schedule>
      <PrizePool />
      <Sponsors></Sponsors>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
