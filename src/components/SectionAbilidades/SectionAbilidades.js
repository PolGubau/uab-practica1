import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "./SectionAbilidades.css";

export default function SectionAbilidades({ titulo, habilidades }) {
  return (
    <div className="datosPersonales">
      <TitulosSeccion titulo={titulo} />

      <ul className="listaHabilidades">
        {habilidades.map((habilidad, index) => (
          <li key={index} className="habilidad">
            {habilidad}
            <div className="barra">
              {/* Apply a randpm with every porcentaje */}

              <div
                className="porcentaje"
                style={{ width: `${Math.random() * 100}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
