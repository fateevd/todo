import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Navbar from "./componets/Navbar";
import AppRouter from "./componets/AppRouter";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <AppRouter/>
      </BrowserRouter>
      )

}

export default App;
