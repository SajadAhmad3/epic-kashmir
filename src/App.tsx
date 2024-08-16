import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Packages from "./pages/Packages";
import Activities from "./pages/ Activities";
import ContactUs from "./pages/Contact";


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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
