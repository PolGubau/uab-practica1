import React from "react";
import TitulosSeccion from "../TitulosSeccion/TitulosSeccion";
import "./SectionExperiencia.css";
export default function SectionExperiencia() {
  return (
    <>
      <TitulosSeccion titulo={"Experiencias de trabajo"} />
      <section className="experiencias">
        <article className="experiencia">
          <div className="tiempo">01/2017 - Presente</div>
          <div className="experienciaContent">
            <h3 className="titleExp">Consultor BAP</h3>
            <p className="subTitleExp">Bunge cono Bur</p>
            <p className="text">
              Mantenimiento correctivo / evolutivo modulist CI-CO-TRN.
              Implementación Interfase con bancos para registro de cobranzas por
              cuentas recaudadoras. Implementación del registro de recaudaciones
              a través de sistema Lapos. Lider funcional FICO para proyecto
              upgrade.
            </p>
          </div>
        </article>
        <article className="experiencia">
          <div className="tiempo">01/2017 - Presente</div>
          <div className="experienciaContent">
            <h3 className="titleExp">Consultor BAP FICO Br.</h3>
            <p className="subTitleExp">Boftlek - La plata, Buenos Aires</p>
            <p className="text marginBottom0">
              Como consultor BAP FICO, oarticipé activamente en los siguientes
              proyectos:
            </p>
            <ul>
              <li>Banco Hipotecario - Upgrade de versión 5.0 a 6.0.</li>
              <li>
                PC arts Argentina (BANGHO) - Implementación BAP ALL IN ONE.
              </li>
              <li>Laboratorios Bancofi Awentis - Soporte para LATAM.</li>
              <li>
                Investigación y desarrollo de casos de estudio sobre
                parametrización y aplicación del módulo TRM - Plazas Fijas.
              </li>
            </ul>
          </div>
        </article>
        <article className="experiencia">
          <div className="tiempo">01/2017 - Presente</div>
          <div className="experienciaContent">
            <h3 className="titleExp">Especialista BAP FI</h3>
            <p className="subTitleExp">Accenture, Argentina.</p>
            <p className="text">
              Consultor funcional del modulo FI, creación de nuevas sociedades
              FI, confguraciones de operaciones bancarias de extractos
              automáticos, configuración de nuevas estructuras de balances,
              configuración de nuevas cuentas bancarias en las distintas
              sociedades del grupo de empresas, configuración pancial módulo
              activo fijo, configuración de nuevos indicadores de impuestos,
              soporte funcional a usuarios del módulo FI-AR, FI-TR, FI-GL,
              FI-AP. `
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
