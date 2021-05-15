import React from "react";
import { Login } from "../pages/Login";
import { Wrapper } from "./Wrapper";
import { Provider } from "react-redux";
import { store } from "../state";
import { NavBar } from "./Navbar";
function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Wrapper>
        <Login />
      </Wrapper>
    </Provider>
  );
}

export default App;
