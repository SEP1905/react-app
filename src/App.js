import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />

        <footer>
          This project was coded by{" "}
          <a href="https://www.shaniyah.io/" target="_blank">
            Shaniyah Palmer
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SEP1905"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/regal-pavlova-54c351/overview"
            target="_blank"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}