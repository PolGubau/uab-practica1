import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "./SectionCompetencia.css";
export default function SectionCompetencia() {
  return (
    <>
      <TitulosSeccion titulo={"Competencias"} />
      <div className="text">
        <p>Comunicación</p>
        <p>Trabajo en equipo</p>
      </div>
    </>
  );
}
