import React from "react";
import { Routes } from "../Routes";
import { Wrapper } from "./Wrapper";
import { Provider } from "react-redux";
import { store } from "../state";
import { NavBar } from "./Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Wrapper>
          <Routes />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
