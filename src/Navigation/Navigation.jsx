import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Link className="link" to="/counter">
        Counter
      </Link>
    </div>
  );
};
