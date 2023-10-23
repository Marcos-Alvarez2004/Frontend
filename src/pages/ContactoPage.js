import React from "react";
import "../styles/components/pages/ContactoPage.css"


const ContactoPage = (props) => {
  return(
    <main className="holder contacto">
      <div className="columna">
        <h2>Complete el siguiente formulario</h2>
        <form action="" method="" className="formulario">
          <p>
            <label>Nombre</label>
            <input type="text" name="nombre" placeholder="Nombre" />
          </p>
          <p>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </p>
          <p>
            <label>Teléfono</label>
            <input type="text" name="telefono" placeholder="Numero" />
          </p>
          <p>
            <label>Mensaje</label>
            <textarea name="mensaje" placeholder="Mensaje"></textarea>
          </p>
          <p>
            <input type="submit" value="Enviar" />
          </p>
        </form>
      </div>
      <div className="columna datos">
        <h2>Otras vias de contacto</h2>
        <p>También puede contactarse con nosotros usando los siguiente medios:</p>
        <ul>
          <li>Teléfono: 123456789</li>
          <li>Email: example@gmail.com</li>
          <li>Facebook: <a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook</a></li>
          <li>Twitter: <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twiiter</a></li>
          <li>Skype: <a href="https://www.skype.com/es/" target="_blank" rel="noreferrer">Skype</a></li>
        </ul>
      </div>
    </main>
  );
}

export default ContactoPage;