import Hero from "./components/header/Hero";
import Main from "./components/main/.Main";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app-container">
      <header className='header-container'>
        <Hero/>
      </header>
      <main className="main-container">
        <Main/>
      </main>
      <footer className="footer-container">
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
