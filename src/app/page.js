import Footer from "../components/layouts/footer";
import Headers from "../components/layouts/headers";
import About from "../components/modules/about";
import Hero from "../components/modules/hero";
import Parallax from "../components/modules/parallax";
import Partners from "../components/modules/partners";
import Portfolio from "../components/modules/portfolio";
import Services from "../components/modules/services";

export default function Home() {
  return (
    <>
      <Headers />
      <main className="px-6 py-10 lg:px-20">
        {/* <!-- Hero Section --> */}
        <Hero />
        {/* <!-- Service Section --> */}
        <Services />
        {/* <!-- Partners Section --> */}
        <Partners />
        {/* <!-- Portfolio Section --> */}
        <Portfolio />
        {/* <!-- About Us Section --> */}
        <About />
        {/* <!-- Background Image Section --> */}
        <Parallax />
      </main>
      {/* <!-- Footer --> */}
      <Footer />
    </>
  );
}
