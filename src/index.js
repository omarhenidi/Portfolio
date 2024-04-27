import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Dashbord from "./pages/Dashbord";
import Delete from "./pages/Delete";
import Model1 from "./pages/Model1";
import Game from "./pages/Tic Tac Toe Game/Game";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashbord" element={<Dashbord />} />
          <Route path="delete" element={<Delete />} />
          <Route path="Game" element={<Game />} />
          <Route path="Model1" element={<Model1 />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));