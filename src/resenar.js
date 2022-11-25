/*Javascript för resenär nedan...
Grupp gud, robin
*/

/* console.log(new Date().toISOString().slice("0", "16")); //Ofset for current timezone */

const onload = (window.onload = (event) => {
  //TODO: Skapa en loop för att ladda alla fälten från localstorage, använd arrayen nedan
  let faltAttKolla = [
    "antalResenarer",
    "antalResenarer",
    "enkelPendling",
    "nar",
    "friText",
    "fran",
    "till",
    "pris",
  ];

  //TODO: kolla separat för varje fält i localstorage (skapa en ny function)
  if (localStorage.getItem("antalResenarer")) {
    let antalResenarer = localStorage.getItem("antalResenarer");
    let enkelPendling = localStorage.getItem("enkelPendling");
    let nar = localStorage.getItem("nar");
    let friText = localStorage.getItem("friText");
    let fran = localStorage.getItem("fran");
    let till = localStorage.getItem("till");
    let pris = localStorage.getItem("pris");

    let eAntalResenarer = document.getElementById("antalResenarer");
    let eEnkelPendling = document.getElementById("enkelPendling");
    let eNar = document.getElementById("nar");
    let eFriText = document.getElementById("friText");
    let eFran = document.getElementById("fran");
    let eTill = document.getElementById("till");
    let ePris = document.getElementById("pris");

    eAntalResenarer.value = antalResenarer;
    eEnkelPendling.value = enkelPendling;
    eNar.value = nar;
    eFriText.value = friText;
    eFran.value = fran;
    eTill.value = till;
    ePris.value = pris;
  }

  if (document.getElementById("nar") === "") {
    let currentDate = new Date().toISOString().slice("0", "16");
    document.getElementById("nar").value = currentDate;
  }

  console.log(new Date().toISOString().slice("0", "16"));

  const userdata = document.getElementById("userData");

  let allaAnvandare = new Array();

  allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));
  userdata.innerHTML(allaAnvandare.pop());
});

const antalResenarer = document.getElementById("antalResenarer");
const enkelPendling = document.getElementById("enkelPendling");
const nar = document.getElementById("nar");
const friText = document.getElementById("friText");
const fran = document.getElementById("fran");
const till = document.getElementById("till");
const pris = document.getElementById("pris");

const form = document.querySelector("form");

const emailError = document.querySelector("#mail + span.error");

antalResenarer.addEventListener("input", (event) => {
  if (antalResenarer.validity.typeMismatch) {
    antalResenarer.setCustomValidity("Ett nummer förväntas här");
  }
});

fran.addEventListener("input", (event) => {
  if (antalResenarer.validity.typeMismatch) {
    antalResenarer.setCustomValidity("mail!!");
  }
});

const saveResForm = (event) => {
  // preventDefault() hindrar sidan att laddas om

  const antalResenarer = document.getElementById("antalResenarer");
  const enkelPendling = document.getElementById("enkelPendling");
  const nar = document.getElementById("nar");
  const friText = document.getElementById("friText");
  const fran = document.getElementById("fran");
  const till = document.getElementById("till");
  const pris = document.getElementById("pris");

  const form = document.querySelector("form");

  const emailError = document.querySelector("#mail + span.error");

  antalResenarer.addEventListener("input", (event) => {
    if (antalResenarer.validity.typeMismatch) {
      antalResenarer.setCustomValidity("Ett nummer förväntas här");
    }
  });

  fran.addEventListener("input", (event) => {
    if (fran.validity.typeMismatch) {
      fran.setCustomValidity("mail");
    }
  });

  //Lagra datan från formuläret i objektet {resFormData}
  //ex: resFormData.antalResenarer innehåller sedan antaler resenärer
  const resFormData = {
    antalResenarer: antalResenarer.value,
    enkelPendling: enkelPendling.value,
    nar: nar.value,
    friText: friText.value,
    fran: fran.value,
    till: till.value,
    pris: pris.value,
  };

  //if (valideraIndata(resFormData));

  //TODO: Validera alla fält innan koden nedan körs

  //Alla fälten sparas med respektive nyckel i localstorage
  localStorage.setItem("antalResenarer", resFormData.antalResenarer);
  localStorage.setItem("enkelPendling", resFormData.enkelPendling);
  localStorage.setItem("nar", resFormData.nar);
  localStorage.setItem("friText", resFormData.friText);
  localStorage.setItem("fran", resFormData.fran);
  localStorage.setItem("till", resFormData.till);
  localStorage.setItem("pris", resFormData.pris);

  // localStorage.setItem("allaResor", JSON.stringify(allaResor));

  // const resa = {antalResenarer: resFormData.antalResenarer, };

  let allaResorArray = new Array();

  if (localStorage.getItem("allaResor")) {
    allaResorArray = JSON.parse(localStorage.getItem("allaResor"));
  }

  //console.log(allaResorArray);

  allaResorArray.push(resFormData);

  //console.log(allaResorArray);

  localStorage.setItem("allaResor", JSON.stringify(allaResorArray));

  console.log(JSON.parse(localStorage.getItem("allaResor")));
};
