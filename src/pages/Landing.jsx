import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Statistics from "../components/Statistics";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
function Landing() {
    return (
        <>
            <Navbar />
            <Hero />
            <Features />
            <Statistics />
            <About />
            <Testimonials />
            <CTA />
            <Footer />
        </>
    );
}
export default Landing;