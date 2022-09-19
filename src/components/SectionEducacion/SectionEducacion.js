import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "../SectionExperiencia/SectionExperiencia.css";
export default function SectionEducacion() {
  return (
    <>
      <TitulosSeccion titulo={"Educación"} />
      <section className="experiencias">
        <article className="experiencia">
          <div className="tiempo">08/2009 - Presente</div>
          <div className="experienciaContent">
            <h3 className="titleExp">Contador Público</h3>
            <p className="subTitleExp">
              Universidad de Buenos Aires (UBA) - Buenos Aires - Promedio: 8
            </p>
            <p className="text">
              Durante mi formación me he capacitado para asesorar personasy
              empresas en las áreas financioeras, impositivas, contable,
              laboral, de costos y societario. Diseñar, interpretar e impementar
              sistemas de Información contables, dentro de las organizaciones
              públicas y privadas, para la toma de decisiones.
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
