import React from "react";
import "../styles/components/pages/ContactoPage.css"
import { BsFacebook, BsFillTelephoneFill, BsTwitter, BsSkype} from "react-icons/bs"
import { MdEmail } from "react-icons/md"
import { AiFillInstagram } from "react-icons/ai";


const ContactoPage = (props) => {
  return(
    <main className="holder">
      <div className="columna contacto">
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
            <label>Comentario</label>
            <textarea name="mensaje" placeholder="Mensaje"></textarea>
          </p>
          <p className="centrar"><input className="btn" type="submit" value="Enviar" /></p>

        </form>
      </div>
      <div className="columna datos">
        <h2>Otras vias de contacto</h2>
        <p>También puede contactarse con nosotros usando los siguiente medios:</p>
        <ul>
          <li><i><BsFillTelephoneFill /></i></li>
          <li><i><MdEmail /></i></li>
          <li><i><BsFacebook /></i></li>
          <li><i><BsTwitter /></i></li>
          <li><i><BsSkype /></i></li>
          <li><i><AiFillInstagram /></i></li>
        </ul>
      </div>
    </main>
  );
}

export default ContactoPage;