import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import "./HeroSection.css";
import { Model } from "../../Model/Model";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [tshirtColor, setTshirtColor] = useState("red");

  const changeColor = (color) => {
    setTshirtColor(color);
  };

  const scrollToTop = () => {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="heroMain">
        <div className="sectionleft">
          <p>New Collection</p>
          <h1>DISCOVER THE BEST FURNITURE</h1>
          
          <div className="heroLink">
            <Link to="/" onClick={scrollToTop}>
              <h5>Elegant Furniture</h5>
            </Link>
          </div>
        </div>
        <div className="sectionright">
          <Canvas
            className="canvasModel"
            camera={{ position: [0, 5, 15], fov: 50 }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight
              position={[10, 10, 5]}
              intensity={2.5}
              color={"white"}
            />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              minAzimuthAngle={-Infinity}
              maxAzimuthAngle={Infinity}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />

            <Model color={tshirtColor} />
          </Canvas>
          <div className="heroColorBtn">
            <button
              onClick={() => changeColor("white")}
              style={{ backgroundColor: "white" }}
            ></button>
            <button
              onClick={() => changeColor("#EFBD4E")}
              style={{ backgroundColor: "#EFBD4E" }}
            ></button>
            {/* <button
              onClick={() => changeColor("green")}
              style={{ backgroundColor: "green" }}
            ></button> */}
            <button
              onClick={() => changeColor("red")}
              style={{ backgroundColor: "red" }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
