import Layout from "./components/Layout";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from './components/sections/Projects';
import SpotifyNowPlaying from './components/spotify/SpotifyNowPlaying';
import Footer from './components/sections/Footer';


function Home() {
    return (
      <div className="Home">
        <Layout>
          <Hero></Hero>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
  
          <Footer></Footer>
        </Layout>
      </div>
    );
}
  
export default Home;
  