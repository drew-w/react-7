import React from "react";
import "../style.css";
import Counter from "./Counter";
import FunctionalComponent from "./FunctionalComponent";
import Pokemon from "./Pokemon";

const Hooks = (props) => {
  return (
    <section className="advanced-react-section">
      <h1>
        Hooks
        <a
          href="https://reactjs.org/docs/hooks-reference.html"
          target="__blank"
          rel="noopener"
        >
          Docs
        </a>
      </h1>
      <Pokemon />
      {/* <FunctionalComponent/> */}
      {/* <Counter/> */}
    </section>
  );
};
export default Hooks;
