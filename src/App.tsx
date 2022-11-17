import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Initial from "./initial";
import Second from "./second";

class App extends Component {
  render(): React.ReactNode {
    return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Initial />} />
          <Route path="/second" element={<Second name="Teste Second" />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
