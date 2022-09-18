import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "./SectionPerfil.css";
export default function SectionPerfil() {
  return (
    <>
      <TitulosSeccion titulo={"Competencias"} />
      <p className="text">
        <p>Comunicación</p>
        <p>Trabajo en equipo</p>
      </p>
    </>
  );
}
