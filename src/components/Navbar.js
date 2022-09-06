import React from "react";

export const Navbar = ({ setPage }) => {
  return (
    <div>
      <nav>
        <button onClick={() => setPage("vehicles")}>Vehicles</button>
        <button onClick={() => setPage("species")}>Species</button>
      </nav>
    </div>
  );
};
