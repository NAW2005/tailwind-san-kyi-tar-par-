import React from "react";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Nav from "./components/Nav";
import Showmoney from "./components/Showmoney";
import Text from "./components/Text";
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import Forsendmoney from "./store/slicer/forsendmoney";



const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Feature/>}/>
          <Route path="/showmoney" element={<Showmoney/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
