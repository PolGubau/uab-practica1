import "./App.css";
import SectionAbilidades from "./components/SectionAbilidades/SectionAbilidades";

import SectionDatos from "./components/SectionDatos/SectionDatos";
import SectionPerfil from "./components/SectionPerfil/SectionPerfil";
import useUser from "./hooks/useUser";

function App() {
  const user = useUser();

  return (
    <div className="app">
      <div className="content">
        <header className="header">
          <p className="name">{user.nombre_completo || "Germán Rossi"}</p>
          {user ? (
            <img
              src={`https://api.multiavatar.com/${Math.random().toString(
                36
              )}.svg`}
              alt="logo"
              className="avatar"
            />
          ) : (
            <p>Cargando...</p>
          )}
        </header>
        <main className="main">
          <section className="columna columna1">
            <SectionDatos titulo="Datos Personales" user={user} />
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

          <section className="columna columna2">
            <SectionPerfil />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
