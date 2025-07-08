import React, { useState } from "react";
import AvatarCanvas from "./AvatarCanvas";
import Earth from "./EarthCanvas";
import ARVREmbedCanvas from "./ARVREmbedCanvas";

const CanvasManager = () => {
  // State to track which canvas to show
  const [activeCanvas, setActiveCanvas] = useState("avatar");

  // Render buttons or tabs to switch canvas
  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setActiveCanvas("avatar")}>Avatar</button>
        <button onClick={() => setActiveCanvas("earth")}>Earth</button>
        <button onClick={() => setActiveCanvas("arvr")}>AR/VR</button>
      </div>

      <div style={{ width: "100%", height: "500px" }}>
        {activeCanvas === "avatar" && <AvatarCanvas />}
        {activeCanvas === "earth" && <Earth />}
        {activeCanvas === "arvr" && <ARVREmbedCanvas />}
      </div>
    </div>
  );
};

export default CanvasManager;
