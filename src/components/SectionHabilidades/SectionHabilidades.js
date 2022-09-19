import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "./SectionHabilidades.css";
import { motion } from "framer-motion";

export default function SectionHabilidades({ titulo, habilidades }) {
  return (
    <div className="datosPersonales">
      <TitulosSeccion titulo={titulo} />

      <ul className="listaHabilidades">
        {habilidades.map((habilidad, index) => (
          <li key={index} className="habilidad">
            {habilidad}

            <div className="barra">
              {/* Apply a random with every porcentaje  */}

              <motion.div
                className="porcentaje"
                initial={{ width: 0 }}
                animate={{ width: `${Math.random() * (100-50)+50}%` }}
                transition={{ type: "spring", stiffness: 100 }}
                
              ></motion.div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
