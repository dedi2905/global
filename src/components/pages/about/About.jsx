import React from "react";
import { useStoreActions } from "easy-peasy";

const About = () => {
  let setHide = useStoreActions((action) => action.handleState.setHide);

  return (
    <div className="con container-fluid">
      <h1>page about</h1>
      <button onClick={setHide}>coba</button>
    </div>
  );
};

export default About;
