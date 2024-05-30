import React from "react";

export default function NewsItem(props) {
  let nurl = props.url;
  let text = props.title;
  text = text.slice(0, 50) + "...";
  let desc = props.description;
  desc = desc.slice(0, 60) + "...";
  return (
    <>
      <div
        className="card"
        style={{ width: "18rem", backgroundColor: "lightgrey" }}
      >
        <img
          src={`${props.img}`}
          className="card-img-top"
          alt="..."
          style={{ height: "135px" }}
        />
        <a
          href={nurl}
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="card-body">
            <h5 className="card-title">{text}</h5>
            <p className="card-text">{desc}</p>
            <button className="btn btn-primary sm">Read More</button>
          </div>
        </a>
      </div>
    </>
  );
}
