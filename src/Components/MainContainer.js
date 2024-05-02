import React from "react";
import Head from "./Head";
import ButtonList from "./ButtonList";
import Body from "./Body";

const MainContainer = () => {
  return (
    <div className="bg-slate-300 overflow-x-hidden">
      <Head />
      <ButtonList />
      <Body />
    </div>
  );
};

export default MainContainer;
