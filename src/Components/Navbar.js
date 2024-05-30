import React from "react";
import profile from "./shashank.jpg";
import { Link } from "react-router-dom";
import mobileMenu from "./menu.png";
import closeBtn from "./close.png";
import "../App.css";

export default function Navbar() {
  const handleC = () => {
    document.getElementById("m").classList.toggle("dis");
    document.getElementById("c").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("mobileMenuDisplay");
    document.getElementById("mmd").classList.add("closeMobileMenuDisplay");
    document.getElementById("mmd").classList.toggle("dis");
  };
  const handleM = () => {
    document.getElementById("mmd").classList.toggle("dis");

    document.getElementById("m").classList.toggle("dis");
    document.getElementById("c").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("mobileMenuDisplay");
    document.getElementById("mmd").classList.remove("closeMobileMenuDisplay");
  };
  const handleHomeClick = () => {
    document.getElementById("m").classList.toggle("dis");
    document.getElementById("c").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("mobileMenuDisplay");
  };

  const handleBusinessClick = () => {
    document.getElementById("m").classList.toggle("dis");
    document.getElementById("c").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("mobileMenuDisplay");
  };
  const handleSportsClick = () => {
    document.getElementById("m").classList.toggle("dis");
    document.getElementById("c").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("mobileMenuDisplay");
  };
  const handleTechnologyClick = () => {
    document.getElementById("m").classList.toggle("dis");
    document.getElementById("c").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("dis");
    document.getElementById("mmd").classList.toggle("mobileMenuDisplay");
  };

  return (
    <>
      <div className="navbar">
        <div className="title">
          <a href="/">
            <h1>NewsMonkey</h1>
          </a>
        </div>
        <div className="navOptions">
          <h3>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </h3>
          <h3>
            <Link
              to={"/business"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Business
            </Link>
          </h3>
          <h3>
            <Link
              to={"/sports"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Sports
            </Link>
          </h3>
          <h3>
            <Link
              to="/technology"
              style={{ textDecoration: "none", color: "white" }}
            >
              Technology
            </Link>
          </h3>
          <h3>
            <a href="https://www.linkedin.com/in/shashank2121/" target="_blank">
              Contact Us
            </a>
          </h3>
          <img src={profile} />
        </div>
        <div className="mobileMenu">
          <img id="m" onClick={handleM} src={mobileMenu} alt="Mobile Menu" />
          <img
            id="c"
            className="dis"
            onClick={handleC}
            src={closeBtn}
            alt="Menu Close"
            style={{ width: "24px", height: "24px" }}
          />
        </div>
      </div>

      <div id="mmd" className="dis">
        <div className="responsiveMenu">
          <h3>
            <Link
              to={"/"}
              id="home"
              onClick={handleHomeClick}
              style={{ textDecoration: "none", color: "white" }}
            >
              Home
            </Link>
          </h3>
          <h3>
            <Link
              to={"/business"}
              onClick={handleBusinessClick}
              style={{ textDecoration: "none", color: "white" }}
            >
              Business
            </Link>
          </h3>
          <h3>
            <Link
              to={"/sports"}
              onClick={handleSportsClick}
              style={{ textDecoration: "none", color: "white" }}
            >
              Sports
            </Link>
          </h3>
          <h3>
            <Link
              to="/technology"
              onClick={handleTechnologyClick}
              style={{ textDecoration: "none", color: "white" }}
            >
              Technology
            </Link>
          </h3>
          <h3>
            <a
              href="https://www.linkedin.com/in/shashank2121/"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </a>
          </h3>

          <span
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              color: "white",
            }}
          >
            <b>Developed by: </b>
          </span>
          <img
            src={profile}
            style={{
              height: "30px",
              width: "30px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
    </>
  );
}
