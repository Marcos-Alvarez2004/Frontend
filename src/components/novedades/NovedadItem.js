import React from "react";
import "../../../src/index.css";

const NovedadItem = (props) => {
  const { title, subtitle, imagen, body } = props;
  return (
    <div className="novedades">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img style={{ width: "100%" }} src={imagen} alt={imagen} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr />
    </div>
  );
};

export default NovedadItem;
