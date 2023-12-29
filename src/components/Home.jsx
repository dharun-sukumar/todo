import React from "react";
import Top from "./Top.jsx";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Content from "./Contnet.jsx";
import Bottom from "./Bottom.jsx";

function Home() {
  return (
    <div>
        <Top />
        <Hero />
        <Navbar />
        <Content />
        <Bottom />
    </div>
  );
}

export default Home;