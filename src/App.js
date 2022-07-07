import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";

import React from "react";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
