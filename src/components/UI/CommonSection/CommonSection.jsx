import React from "react";
import "./CommonSection.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <div className="container text-center text-white">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default CommonSection;
