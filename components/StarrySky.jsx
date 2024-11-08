"use client";

import React, { useEffect } from "react";
import "./StarrySky.css";
import styles from "../styles/index.js";
import { useTheme } from "../context/ThemeContext";

const StarrySky = () => {
  const { theme } = useTheme();
  const lightImage = "/forest-gray.png";
  const darkImage = "/forest-black.png";
  useEffect(() => {
    init();
  }, []);

  function init() {
    // 별 스타일
    const style = ["style1", "style2", "style3", "style4"];
    const tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
    const opacity = [
      "opacity1",
      "opacity1",
      "opacity1",
      "opacity2",
      "opacity2",
      "opacity3",
    ];

    function getRandomArbitrary(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    let estrela = "";
    const qtdeEstrelas = 250;
    const noite = document.querySelector(".constelacao");
    const widthWindow = window.innerWidth;
    const heightWindow = window.innerHeight;

    for (let i = 0; i < qtdeEstrelas; i++) {
      estrela +=
        "<span class='estrela " +
        style[getRandomArbitrary(0, 4)] +
        " " +
        opacity[getRandomArbitrary(0, 6)] +
        " " +
        tam[getRandomArbitrary(0, 5)] +
        "' style='animation-delay: ." +
        getRandomArbitrary(0, 9) +
        "s; left: " +
        getRandomArbitrary(0, widthWindow) +
        "px; top: " +
        getRandomArbitrary(0, heightWindow) +
        "px;'></span>";
    }

    noite.innerHTML = estrela;

    // 유성
    let numeroAleatorio = 5000;

    setTimeout(function () {
      carregarMeteoro();
    }, numeroAleatorio);

    function carregarMeteoro() {
      setTimeout(carregarMeteoro, numeroAleatorio);
      numeroAleatorio = getRandomArbitrary(2500, 5000);
      const meteoro =
        "<div class='meteoro " + style[getRandomArbitrary(0, 4)] + "'></div>";
      document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = meteoro;
      setTimeout(function () {
        document.getElementsByClassName("chuvaMeteoro")[0].innerHTML = "";
      }, 3000);
    }
  }

  return (
    <div>
      <div className={`${styles.noiteBg}`}>
        <div className="constelacao"></div>
        <div className="chuvaMeteoro"></div>
      </div>
      {/* <div className="lua">
        <div className="textura"></div>
      </div> */}
      <div className="floresta">
        <img
          src={theme === "dark" ? darkImage : lightImage}
          alt="배경 이미지"
        />
      </div>
    </div>
  );
};

export default StarrySky;
