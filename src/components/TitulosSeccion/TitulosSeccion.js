import "./TitulosSeccion.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
export default function TitulosSeccion({ titulo = "Titulo" }) {
  return (
    <div className="container">
      <AiOutlineDoubleRight size={20} />
      <span className="titulo">{titulo}</span>
    </div>
  );
}
