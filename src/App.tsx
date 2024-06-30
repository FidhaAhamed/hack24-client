import "./App.css";
import About from "./components/about";
import Faq from "./components/faq/faq";
import Schedule from "./components/schedule/schedule";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/hero";
import PrizePool from "./components/PrizePool/PrizePool";


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Schedule></Schedule>
      <PrizePool/>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
