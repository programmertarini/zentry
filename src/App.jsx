import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MultiText from "./components/MultiText";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Story from "./components/Story";
import Universe from "./components/Universe";
import Updates from "./components/Updates";
import ZentryGlance from "./components/ZentryGlance";


const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar/>
      <Hero />
      <About />
      <Feature/>
      <Story/>
      <Universe/>
      <MultiText/>
      <ZentryGlance/>
      <Partners/>
      <Updates/>
      <Contact/>
      <Footer/>
    </main>
  );
};

export default App;
