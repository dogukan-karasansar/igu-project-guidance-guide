import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import "./screen.css";

export default function HomeScreen() {
  var github = [
    {
      id: 1,
      title: "Github kullanımı",
      description: "",
      img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
  ];
  return (
    <div className="screen">
      <Link to="/github" style={{ textDecoration: 'none' }}>
        <Card data={github} />
      </Link>
    </div>
  );
}
