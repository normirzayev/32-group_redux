import { Button } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineSwapLeft, AiOutlineSwapRight } from "react-icons/ai";
import rasm1 from "../support/img/00afb9543c5c671a618bd85fea36e33e.jpg";
import rasm2 from "../support/img/8a6ad8962fb1f902cbb19e9467c9d94a.jpeg";
import rasm3 from "../support/img/9cf03e13ac9bc3a5b0b62b4c71b8acd6.jpg";
import rasm4 from "../support/img/cambg_1.jpg";
import rasm5 from "../support/img/cambg_2.jpg";
import rasm6 from "../support/img/cambg_5.jpg";
import rasm7 from "../support/img/cambg_7.jpg";
export default function About() {
  const [sliderCount, setSliderCount] = useState(0);
  let rasmlar = [
    { id: 1, rasm: rasm1 },
    { id: 2, rasm: rasm2 },
    { id: 3, rasm: rasm3 },
    { id: 4, rasm: rasm4 },
    { id: 5, rasm: rasm5 },
    { id: 6, rasm: rasm6 },
    { id: 7, rasm: rasm7 },
  ];

  const handleLeft = (e) => {
    if (sliderCount > 0) {
      setSliderCount(sliderCount - 1);
    } else {
      setSliderCount(rasmlar.length - 1);
    }
  };
  const handleRight = () => {
    if (sliderCount < rasmlar.length - 1) {
      setSliderCount(sliderCount + 1);
    } else {
      setSliderCount(0);
    }
  };

  return (
    <div>
      <div className="count">
        <h1>
          {sliderCount < 9 ? 0 : ""}
          {sliderCount + 1} /
          <span>
            {rasmlar.length <= 9 ? 0 : ""}
            {rasmlar.length}
          </span>
        </h1>
      </div>
      <div className="slider">
        <div className="btnBox">
          <Button
            variant="contained"
            style={{ padding: "10px 0", fontSize: "22px" }}
            onClick={handleLeft}
            disabled={sliderCount === 0}
          >
            <AiOutlineSwapLeft />
          </Button>
        </div>
        <div
          className="rasmlar"
          style={{ gridTemplateColumns: `repeat(${rasmlar.length} , 100%)` }}
        >
          {rasmlar.map((item, index) => {
            return (
              <figure
                key={item.id}
                className={index === sliderCount ? "activeRasm" : ""}
                style={{
                  transform: `translate(calc(${sliderCount} * -100%))`,
                }}
              >
                <img src={item.rasm} />
              </figure>
            );
          })}
        </div>
        <div className="btnBox">
          <Button
            onClick={handleRight}
            variant="contained"
            style={{ padding: "10px 0", fontSize: "22px" }}
            disabled={sliderCount === rasmlar.length - 1}
          >
            <AiOutlineSwapRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
