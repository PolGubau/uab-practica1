import { useEffect, useState } from "react";
// German Rossi
export default function useUser() {
  let [user, setUser] = useState("");
  useEffect(() => {
    // https://randomuser.me/api
    fetch("https://api.generadordni.es/v2/profiles/person?results=1").then(
      (result) => {
        result
          .json()

          .then((data) => {
            setUser(data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  }, []);

  if (!user) {
    user = {
      nif: "91746960Y",
      nie: "Y7052433A",
      nombre: "ESTEBAN",
      apellido1: "BECERRA",
      apellido2: "SOLER",
      sexo: "hombre",
      nombre_completo: "ESTEBAN BECERRA SOLER",
      fecha_nacimiento: "09/01/1956",
      edad: 66,
      telefono: "780878235",
      nombre_usuario: "esteban_56",
      email: "esteban_56@hotmail.co.uk",
      contrasenya: "cP7iM1pD",
      municipio: "Ábalos",
      municipio_ine: "26001",
      provincia: "Rioja, La",
      provincia_ine: "26",
      direccion: "Gran vía Miguel Hernández",
      numero_via: "31",
      codigo_postal: "26454",
      iban: "ES6720858315708734000150",
      bic: "CAZRESBB292",
      tarjeta: "4045957009411901",
      tarjeta_fecha: "01/26",
      tarjeta_cvc: "222",
      ssn: "399246275784",
      pasaporte: "DFB480495Q",
    };
  }

  return user;
}
