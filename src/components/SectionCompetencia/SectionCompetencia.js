import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "./SectionCompetencia.css";

import { IoMdArrowDropright } from 'react-icons/io';



export default function SectionCompetencia() {
  return (
    <>
      <TitulosSeccion titulo={"Competencias"} />
      <div className="textCompetencia">
        <p className="competencia"><IoMdArrowDropright className="iconCompetencia" size={20}/>Comunicación</p>
        <p className="competencia">
        <IoMdArrowDropright className="iconCompetencia" size={20}/>
          Trabajo en equipo</p>
      </div>
    </>
  );
}
