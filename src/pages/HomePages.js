import React from "react";
import "../styles/components/pages/HomePage.css"

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="homeimg">
        <img src="./images/HomeImage.webp" alt="avion" />
      </div>
      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolore odit dolor earum minima cupiditate repudiandae! Tempora possimus neque, qui cum velit optio facere magni ratione quaerat nobis, culpa odit. <br /> <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, iusto exercitationem iure debitis at et est harum delectus porro saepe eum? Quod eos in beatae repellat, temporibus iure mollitia perferendis.</p>
        </div>
        <div className="testimonios right">
          <h2>Testimonios</h2>
          <div className="testimonio">
            <span className="cita">Simplemente excelente</span>
            <span className="autor">Juan Perez </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomePage;