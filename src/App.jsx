import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import CTA from "./components/sections/CTA";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <p>© 2026 DashCraft. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
