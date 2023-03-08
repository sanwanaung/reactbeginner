import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";

const rootTag = document.querySelector("#root");
const root = ReactDOM.createRoot(rootTag);

const Home = () => {
  return (
    <div className="home-page">
      <Left />
      <Right />
    </div>
  );
};

root.render(<Home />);
