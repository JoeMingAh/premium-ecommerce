import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <TopBanner />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}

export default App;
