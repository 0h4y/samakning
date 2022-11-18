/*Javascript för resenär nedan...
Grupp gud, robin
*/

const saveResForm = (event) => {
  // preventDefault() hindrar sidan att laddas om
  event.preventDefault();

  //Lagra datan från formuläret i objektet {resFormData}
  //ex: resFormData.antalResenarer innehåller sedan antaler resenärer
  const resFormData = {
    antalResenarer: document.getElementById("antalResenarer").value,
    enkelPendling: document.getElementById("enkelPendling").value,
    nar: document.getElementById("nar").value,
    friText: document.getElementById("friText").value,
    fran: document.getElementById("fran").value,
    till: document.getElementById("till").value,
    pris: document.getElementById("pris").value,
  };

  //Skriver ut hela objektet i consolen
  console.log(resFormData);

  //Skriver ut "antalResenarer"
  console.log(resFormData.antalResenarer);

  //Skriver ut "enkelPendling"
  console.log(resFormData.enkelPendling);
};
