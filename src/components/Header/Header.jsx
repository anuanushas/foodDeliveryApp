import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food</h2>
        <p>
          Choose from a diveres menu featuring array of dishes crafted with the
          finest dishes from around the world.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
