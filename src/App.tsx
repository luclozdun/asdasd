import Navbar from "./components/Navbar";
// import Guide from "./components/Guide";
// import Details from "./components/Details";
// import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Characteristics from "./components/Characteristics/Characteristics";
import Contactanos from "./components/Contactanos";
import NewFooter from "./components/NewFooter";
import Qr from "./components/Qr";
import AboutUs from "./components/AboutUs";
// import AccordionTransition from './components/AccordionTransition'
// import ListImages from './components/ListImages'
// import InfoTransition from './components/InfoTransition'
// import House from './components/House'
//  import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
      <Hero />
      </div>
      {/* <Companies /> */}
      <div id="char">
      <Characteristics />
      </div>
      <div id="aboutUs">
      <AboutUs />
      </div>
      {/* <Functionality />
      <Features /> */}
      {/* <AccordionTransition/> */}
      {/* <ListImages/> */}
      {/* <House/> */}
      {/* <Guide /> */}
      {/* <InfoTransition/> */}
      {/* <Details /> */}
      {/* <Values /> */}
      <Team />
      {/* <DownloadPage />
      <Contact /> */}
      {/* <GetStarted /> */}
      {/* <Footer></Footer> */}
      <div id="download">
      <Qr />
      </div>
      <div id="contact">
      <Contactanos/>
      </div>
      {/* <FooterGo /> */}


      <NewFooter></NewFooter>
    </>
  );
}

export default App;
