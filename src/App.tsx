import "./App.css";
import About from "./components/about";
import Faq from "./components/faq";
import Navbar from "./components/Navbar/Navbar"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Faq></Faq>
      <Contact></Contact>
      <Footer></Footer>

    </>
  );
}

export default App;
