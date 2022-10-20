import React from "react";
import Faq from "./components/Faq";
import Feature from "./components/Feature";
import Nav from "./components/Nav";
import Text from "./components/Text";

const App = () => {
  return (
    <>
      <Nav/>
      <Text/>
      <div className=" mt-[50px] mb-0">
        <Faq/>
      </div>
      <Feature/>
      </>
  );
};

export default App;
