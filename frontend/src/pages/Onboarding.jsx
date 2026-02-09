// import React from "react";
// import { useNavigate } from "react-router-dom";
// import bg from "../assets/onboarding_bg.jpg";
// import Logo from "../components/Logo";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import About from "../components/About";
// import Features from "../components/Features";
// import HowItWorks from "../components/HowItWorks";
// import WhyFreshGrade from "../components/WhyFreshGrade";
// import Contact from "../components/Contact";
// import Footer from "../components/Footer";


// export default function Onboarding() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full overflow-x-hidden bg-[#f8faf7]">
//           <Header/>
//           <Hero/>
//           <About/>
//           <Features/>
//           <WhyFreshGrade/>
//           <HowItWorks/>
//           <Contact/>
//           <Footer/>
//     </div>
//   );
// }






import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Onboarding() {
  return (
    <div className="w-full overflow-x-hidden">

      <Header />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <section id="about">
        <About />
      </section>

      {/* FEATURES */}
      <section id="features">
        <Features />
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <HowItWorks />
      </section>

      {/* CONTACT */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />

    </div>
  );
}
