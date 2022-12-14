/*Javascript för resenär nedan...
Grupp gud, robin
*/

//window.onload körs efter att all HTML renderats klart.
const onload = (window.onload = (event) => {
  //Ett min-värde för datuminmatningen skapas
  const tiden =
    new Date().toISOString().split(":")[0] +
    ":" +
    new Date().toISOString().split(":")[1];

  document.getElementById("nar").setAttribute("min", tiden);

  //Nedan i onload loopas informationen ut för den nyligen registrerade användaren.
  //Loopningen sker från localstorage till en table som genererad i div:en "userData"
  //Användarnas lagras i JSON-format, däran används JSON.parse
  const userdata = document.getElementById("userData");
  let allaAnvandare = new Array();
  allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));

  //Endast senaste användaren är intressant
  const senasteAnvandaren = allaAnvandare.pop();

  //Värden från objektet allaAnvändare överförs till en array
  //för att lätt kunna loopas ihop med titlarna och samma räknare
  const värden = [
    senasteAnvandaren.Förnamn,
    senasteAnvandaren.Efternamn,
    senasteAnvandaren.fodelsedatum,
    senasteAnvandaren.mobil,
    senasteAnvandaren.epost,
  ];

  //const värden = Object.values(senasteAnvandaren);

  const dataNamn = [
    "Förnamn:",
    "Efternamn:",
    "Födelsedatum:",
    "Mobilnummer:",
    "E-post:",
  ];

  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  for (let i = 0; i < värden.length; i++) {
    const element = värden[i];
    const row = document.createElement("tr");

    const dataText = document.createTextNode(dataNamn[i]);
    const dataCell = document.createElement("td");
    dataCell.appendChild(dataText);

    const text = document.createTextNode(värden[i]);
    const cell = document.createElement("td");
    cell.appendChild(text);
    if (!(i == 4)) {
      cell.classList.add("capitalize");
    }

    row.appendChild(dataCell);
    row.appendChild(cell);

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);

  userdata.appendChild(tbl);
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

function validering() {
  //Alla fält som ska valideras hämtas in
  const från = document.getElementById("fran").value;
  const till = document.getElementById("till").value;
  const när = document.getElementById("nar").value;
  const pris = document.getElementById("pris").value;

  if (när.length < 1) {
    Swal.fire("Fyll i ett datum för din resa");
    return false;
  }
  if (från.length < 1) {
    Swal.fire("Fyll i en startpunkt på din resa");
    return false;
  }
  if (till.length < 1) {
    Swal.fire("Fyll i en slutpunkt på din resa");
    return false;
  }
  if (pris.length < 1) {
    Swal.fire("Fyll i ersättning för din resa");
    return false;
  } else {
    return true;
  }
}

const saveResForm = (event) => {
  if (!validering()) {
    return;
  }
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

  let allaAnvandare = new Array();

  allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));

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
    anvandareIndex: allaAnvandare.length - 1,
    resetyp: "Resenär",
  };

  //if (valideraIndata(resFormData));

  //TODO: Validera alla fält innan koden nedan körs

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
  console.log(JSON.parse(localStorage.getItem("allaAnvändare")));

  window.location.href = "index.html";
};
