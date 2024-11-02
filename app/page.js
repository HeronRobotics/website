import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className='bg-gray-200 min-h-screen'>
        <div className='h-screen'>
            <Nav />
            <Hero />
        </div>
        <Footer />
    </div>
  );
}
