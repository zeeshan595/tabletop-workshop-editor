import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { routes } from "./Navigation";
import "./style.scss"

const mainElement = document.createElement("div");
mainElement.className = "main";
document.body.appendChild(mainElement);
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {routes.map((el, index) => (
          <Route
            key={index}
            path={el.path}
            component={el.component}
            exact={el.exact === true}
          />
        ))}
      </div>
    </BrowserRouter>
  );
};
ReactDom.render(<App />, mainElement);
