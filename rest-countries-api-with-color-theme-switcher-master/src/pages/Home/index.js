import React from "react";

import Header from "components/Header";
import InputBox from "components/InputBox";
import SelectBox from "components/SelectBox";

import { HomeDivOne } from "./styled";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <HomeDivOne>
          <InputBox />
          <SelectBox />
        </HomeDivOne>
        <div>
          <p>Card Component</p>
        </div>
      </main>
    </div>
  );
};

export default Home;
