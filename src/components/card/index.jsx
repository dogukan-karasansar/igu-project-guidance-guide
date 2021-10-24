import React from "react";
import "./index.css";
export default function Card({ data }) {
  return (
    <div className="card">
      {data.map((item) => (
        <>
          <img src={item.img} width="100" height="100" />
          <h3>{item.title}</h3>
        </>
      ))}
    </div>
  );
}
