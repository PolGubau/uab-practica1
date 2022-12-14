import "./App.css";
import SectionHabilidades from "./components/SectionHabilidades/SectionHabilidades";
import SectionDatos from "./components/SectionDatos/SectionDatos";
import SectionExperiencia from "./components/SectionExperiencia/SectionExperiencia";
import SectionPerfil from "./components/SectionPerfil/SectionPerfil";
import useUser from "./hooks/useUser";
import SectionEducacion from "./components/SectionEducacion/SectionEducacion";
import SectionCompetencia from "./components/SectionCompetencia/SectionCompetencia";
import { BiRefresh } from 'react-icons/bi';

function App() {
  const user = useUser();



  return (
    <>
    <div className="refresh" onClick={()=>{window.location.reload()}}><BiRefresh/> </div>
    <div className="app">
      <div className="content">
        <header className="header">
          <p className="name">{user.fullname || "Germán Rossi"}</p>
          {user ? (
            <>
              <img
                src={`https://api.multiavatar.com/${Math.random().toString(
                  36
                )}.svg` || '/avatar.svg'}
                alt="logo"
                className="avatar"
              />
            </>
          ) : (
            <p>Cargando...</p>
          )}
        </header>



        <main className="main">
          <section className="columna columna1">
            <SectionDatos titulo="Datos Personales" user={user} />
            <SectionHabilidades
              titulo="Habilidades"
              habilidades={[
                "Disciplinado",
                "Liderazgo",
                "Visionario",
                "Habilidad Numérica",
                "Relaciones Públicas",
              ]}
            />
            <SectionHabilidades
              titulo="Idiomas"
              habilidades={["Español", "Inglés", "Francés", "Portugués"]}
            />
            <SectionHabilidades
              titulo="Informática"
              habilidades={[
                "Microsoft Excel",
                "Microsoft Word",
                "Software de deiboi",
                "Constalux",
                "Cegit",
              ]}
            />
            <SectionCompetencia />
          </section>
          <section className="columna columna2">
            <SectionPerfil />
            <SectionExperiencia />
            <SectionEducacion />
          </section>
        </main>
      </div>
    </div>
    </>
  );
}

export default App;
