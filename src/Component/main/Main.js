import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Alert from "../alert/Alert";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Section6 from "../Section6/Section6";
import YoutubeVideos from "../Youtube/YoutubeVideos";
import Iphone from "../Pages/Iphone/iphone";
import Mac from "../Pages/Mac/Mac";
import Ipad from "../Pages/Ipad/Ipad";
import Music from "../Pages/Music/Music";
import Cart from "../Pages/Cart/Cart";
import Support from "../Pages/Support/Support";
import TV from "../Pages/TV/TV";
import Watch from "../Pages/Watch/Watch";
import Four04 from "../Pages/Four04/Four04";
import Productpage from "../Pages/Productpage/Productpage";

function Main() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Alert />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
              <Section6 />
              <YoutubeVideos />
            </>
          }
        />
        <Route path="/iphone/*" element={<Iphone />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/music" element={<Music />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/support" element={<Support />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/iphone/:pid" element={<Productpage />} />
        <Route path="*" element={<Four04 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
