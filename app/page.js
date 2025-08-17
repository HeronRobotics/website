import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import About from "./components/About";
import FloatingSocials from "./components/FloatingSocials";

export default function Home() {
    return (
        <div className="bg-gray-200 min-h-screen relative">
            <FloatingSocials />
            <div className="h-screen">
                <Hero />
            </div>
            <div id="about">
                <About />
            </div>
        </div>
    );
}
