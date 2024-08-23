import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Packages from "./pages/Packages";
import Activities from "./pages/ Activities";
import ContactUs from "./pages/Contact";
import Attractions from "./pages/Attractions";
import Destinations from "./pages/Destinations";


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
