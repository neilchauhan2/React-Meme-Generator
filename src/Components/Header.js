import React from "react";

const headerStyle = {
  background: "#3A42E1",
  color: "whitesmoke"
};

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1 className="is-size-1 has-text-centered"> Meme Generator</h1>
    </header>
  );
};

export default Header;
