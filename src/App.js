
import './App.css';
import Layout from "./pages/Layout";
import Hero from "./components/sections/Hero";
import AboutMe from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Projects from './pages/Projects';
import SpotifyNowPlaying from './components/spotify/SpotifyNowPlaying';
import Footer from './components/sections/Footer';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
