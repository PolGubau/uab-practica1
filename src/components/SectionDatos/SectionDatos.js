import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillFlagFill } from "react-icons/bs";
import { BsPhone, BsFillPeopleFill } from "react-icons/bs";
import { AiFillHome, AiFillPhone, AiFillCar } from "react-icons/ai";
import "./SectionDatos.css";
export default function SectionDatos({ user }) {
  const estadoCivil = ["Soltero", "Casado", "Divorciado", "Viudo"];

  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomTelefon() {
    return Math.floor(Math.random() * 100000000);
  }
  function getRandomDate() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();
    return `${day}/${month}/${year}`;
  }

  return (
    <div className="datosPersonales">
      <TitulosSeccion titulo="Datos Personales" />
      <ul className="datoTable">
        <li className="datoRow">
          <FaUserAlt className="datoIcon" />
          {user.nombre_completo || "Germán Rossi"}
        </li>
        <li className="datoRow">
          <AiFillHome className="datoIcon" />
          {user.direccion || "Calle 24 5532"},{user.municipio || "City Bell"},
          {user.provincia || "La Fista"}
        </li>
        <li className="datoRow">
          <AiFillPhone className="datoIcon" />6{getRandomTelefon()}
        </li>
        <li className="datoRow">
          <MdOutlineAlternateEmail className="datoIcon" />
          {user.email || "germanrossi@gmail.com"}
        </li>
        <li className="datoRow">
          <BiCalendar className="datoIcon" />
          {user.fecha_nacimiento || getRandomDate()}
        </li>
        <li className="datoRow">
          <BsFillFlagFill className="datoIcon" />
          España
        </li>
        <li className="datoRow">
          <BsPhone className="datoIcon" />6{getRandomTelefon()}
        </li>
        <li className="datoRow">
          <BsFillPeopleFill className="datoIcon" />
          {getRandomArrayElement(estadoCivil)}
        </li>
        <li className="datoRow">
          <AiFillCar className="datoIcon" />
          Classe C
        </li>
      </ul>
    </div>
  );
}
