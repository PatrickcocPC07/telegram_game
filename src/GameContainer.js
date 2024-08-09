import React from "react";

const GameContainer = () => {
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src={"/WebGl/index.html"}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="HTML5 Game"></iframe>
      </div>
    </>
  );
};

export default GameContainer;
