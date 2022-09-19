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
     
      fullname: "Germán Rossi",
      email: "germanrossi@gmail.com",
      municipality: "City Bell",
      province: "La Plata",
      address: "Calle 24 5532",
      
    };
  }

  return user;
}
