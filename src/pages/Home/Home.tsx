import React from "react";
import Hero from "../../component/Hero/Hero.component";
import Section1 from "../../component/section-1/section-1";
import Section2 from "../../component/section-2/section-2";
import Section3 from "../../component/section-3/section-3";
import Section4 from "../../component/section-4/section-4";
function Home() {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  );
}

export default Home;
