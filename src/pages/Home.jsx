import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/About";
import Experience from "../components/sections/Experience";
import Projects from '../components/sections/Projects';



function Home() {
    return (
      <div className="mt-32  pt-10 py-12  mx-auto max-w-4xl">
          <Hero></Hero>
          <AboutMe></AboutMe>
          <Experience></Experience>
          <Projects></Projects>
      </div>
    );
}
  
export default Home;
  