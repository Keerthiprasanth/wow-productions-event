import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-14">
        <Home />
        <About />
        <Footer />
      </div>
    </div>
  );
}

export default App;
