
import './App.css';
import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from './components/sections/Projects';
import SpotifyNowPlaying from './components/spotify/SpotifyNowPlaying';
import Footer from './components/sections/Footer';
import Gallery from './components/sections/Gallery';


function App() {
  return (
    <div className="App">
      <Layout>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Projects></Projects>
        <Gallery></Gallery>
        <Footer></Footer>
      </Layout>
    </div>
  );
}

export default App;
