import React from "react";
import { useParams } from "react-router-dom";

const GameContainer = () => {
  const { id } = useParams();
  console.log(">>>", id);
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          src={"/index.html"}
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="HTML5 Game"></iframe>
      </div>
    </>
  );
};

export default GameContainer;
