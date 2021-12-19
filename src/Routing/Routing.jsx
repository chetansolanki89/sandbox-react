import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "../Navigation/Navigation";
import { Counter } from "../useState/Counter";

export const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
