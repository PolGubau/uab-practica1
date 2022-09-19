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
const carnetsArray=  ['C','D','B','A1','A2','C + D']
  function getRandomArrayElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getRandomTelefon() {
    return Math.floor(Math.random() * 100000000);
  }
  function getRandomDateSince1950() {
    const date = new Date();
    date.setFullYear(1950 + Math.floor(Math.random() * 70));
    date.setMonth(Math.floor(Math.random() * 12));
    date.setDate(Math.floor(Math.random() * 28));
    return date;
  }

  return (
    <div className="datosPersonales">
      <TitulosSeccion titulo="Datos Personales" />
      <ul className="datoTable">
        <li className="datoRow">
          <FaUserAlt className="datoIcon" />
          {user.fullname || "Germán Rossi"}
        </li>
        <li className="datoRow">
          <AiFillHome  className="datoIcon" />
          {user.address || "Calle 24 5532"}, {user.municipality || "City Bell"},{" "}
          {user.province || "La Plata"}
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
          {user.birthdate || getRandomDateSince1950().toLocaleDateString()}
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
          Clase {getRandomArrayElement(carnetsArray)}
        </li>
      </ul>
    </div>
  );
}
