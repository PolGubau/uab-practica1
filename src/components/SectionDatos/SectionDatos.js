import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";
import { BsPhone, BsFillPeopleFill } from "react-icons/bs";
import { AiFillHome, AiFillPhone, AiFillCar } from "react-icons/ai";

export default function SectionDatos() {
  return (
    <div className="datosPersonales">
      <TitulosSeccion titulo="Datos Personales" />
      <ul className="datoTable">
        <li className="datoRow">
          <FaUserAlt className="datoIcon" />
          Germán Rossi
        </li>
        <li className="datoRow">
          <AiFillHome className="datoIcon" />
          Calle 24 5632, City Bell, La Fista
        </li>
        <li className="datoRow">
          <AiFillPhone className="datoIcon" />
          12345678
        </li>
        <li className="datoRow">
          <MdOutlineAlternateEmail className="datoIcon" />
          germanrossi@gmail.com
        </li>
        <li className="datoRow">
          <BiCalendar className="datoIcon" />
          04/01/1995
        </li>
        <li className="datoRow">
          <BsFillFlagFill className="datoIcon" />
          Argentina
        </li>
        <li className="datoRow">
          <BsPhone className="datoIcon" />
          98765432
        </li>
        <li className="datoRow">
          <BsFillPeopleFill className="datoIcon" />
          Soltero
        </li>
        <li className="datoRow">
          <AiFillCar className="datoIcon" />
          Classe C
        </li>
      </ul>
    </div>
  );
}
