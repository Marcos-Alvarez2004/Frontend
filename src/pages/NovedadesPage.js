import React, { useState, useEffect } from "react";
import "../styles/components/pages/NovedadesPage.css";
import axios from "axios";
import NovedadItem from "../components/novedades/NovedadItem";

const NovedadesPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
    const cargarNovedades = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:4000/api/novedades");
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  }, []);

  return (
    <section className="holder">
      <h2>Novedaes</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        novedades.map((item) => (
          <NovedadItem
            key={item.id}
            title={item.titulo}
            subtitle={item.subtitulo}
            imagen={item.imagen}
            body={item.cuerpo}
          />
        ))
      )}
    </section>
  );
};

export default NovedadesPage;
