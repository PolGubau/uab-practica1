import "./App.css";
import SectionAbilidades from "./components/SectionAbilidades/SectionAbilidades";

import SectionDatos from "./components/SectionDatos/SectionDatos";

function App() {
  return (
    <div className="app">
      <div className="content">
        <header className="header">
          <p className="name">Germán Rossi </p>

          <img
            src={`https://api.multiavatar.com/${Math.random()
              .toString(36)
              .substring(7)}.png`}
            alt="logo"
            className="avatar"
          />
        </header>
        <main className="main">
          <section className="columna columna1">
            <SectionDatos titulo="Datos Personales" />
            <SectionAbilidades
              titulo="Habilidades"
              habilidades={[
                "Disciplinado",
                "Liderazgo",
                "Visionario",
                "Habilidad Numérica",
                "Relaciones Públicas",
              ]}
            />
            <SectionAbilidades
              titulo="Idiomas"
              habilidades={["Español", "Inglés", "Francés", "Portugués"]}
            />
            <SectionAbilidades
              titulo="Informática"
              habilidades={[
                "Microsoft Excel",
                "Microsoft Word",
                "Software de deiboi",
                "Constalux",
                "Cegit",
              ]}
            />
          </section>

          <section className="columna columna2">perfil y más</section>
        </main>
      </div>
    </div>
  );
}

export default App;
