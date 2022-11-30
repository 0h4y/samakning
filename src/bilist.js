/*Javascript för bilist nedan...
Grupp, mattias, savio, martin K
*/

const onload = (window.onload = (event) => {
  const userdata = document.getElementById("userData");

  let allaAnvandare = new Array();

  allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));

  const senasteAnvandaren = allaAnvandare.pop();

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

    row.appendChild(dataCell);
    row.appendChild(cell);

    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);

  userdata.appendChild(tbl);
});

//Lägger in dagens datum i currentDateTime
let currentDateTime = new Date();
//variabel som innehåller dagens år
let year = currentDateTime.getFullYear();
//variabel som innehåller dagens månad, getMonth är 0 index based
let month = currentDateTime.getMonth() + 1;
//variabel som innehåller dagens dag, getDate är 0 index based
let date = currentDateTime.getDate();
//variabel som innehåller nuvarande timme
let hour = currentDateTime.getHours();
//variabel som innehåller nuvarande minut
let minutes = currentDateTime.getMinutes();

//Skriver ut siffrasn 0 så tiden alltid innehåller 2 siffror
if (hour < 10) {
  hour = "0" + hour;
}

if (minutes < 10) {
  minutes = "0" + minutes;
}

let timeTomorrow = hour + ":" + minutes;
//Tar alltid ut första elementet
let avgångTidElem = document.querySelector("#avgangTid");
let hemgångTidElem = document.querySelector("#hemgangTid");

//sätter ett minimum på dagens datum
//avgångTidElem.setAttribute("min", timeTomorrow);

//Skriver ut siffrasn 0 så datum alltid innehåller 2 siffror
if (date < 10) {
  date = "0" + date;
}

if (month < 10) {
  month = "0" + month;
}
//dateTomorrow == dagens datum
let dateTomorrow = year + "-" + month + "-" + date;
//Tar alltid ut första elementet
let avgångElem = document.querySelector("#avgangDatum");
let hemgångElem = document.querySelector("#hemgangDatum");

//sätter ett minimum på dagens datum
avgångElem.setAttribute("min", dateTomorrow);

//Metod för avgångsdadum
// avgångElem.onchange = function () {
//   //Begränsar hemgång tilsl datumet man väljer i avgång. this.Value är värdet från #avgångs-datum
//   hemgångElem.setAttribute("min", this.value);
// };

function buttonClick(event) {
  //Arrayer för tid och datum
  let date1 = [];
  let date2 = [];
  let time1 = [];
  let time2 = [];

  //plockar ut värdena från input
  date1 = document.getElementById("avgangDatum").value;
  // date2 = document.getElementById("hemgangDatum").value;
  time1 = document.getElementById("avgangTid").value;
  time2 = document.getElementById("hemgangTid").value;

  //Splittar arraysen
  date1 = date1.split("-");
  date2 = date2.split("-");
  time1 = time1.split(":");
  time2 = time2.split(":");

  //Jämför datum 0 elementen är år, 1 månad, 2 dag
  if (date1[0] == date2[0] && date1[1] == date2[1] && date1[2] == date2[2]) {
    //funkar ej.
    if (time1[0] > time2[0] || (time1[0] == time2[0] && time1[1] > time2[1])) {
      window.alert("Du kan ej åka hem innan du har anlänt.");
    }
  }
}

//Local storage
function saveResForm(event) {
  // buttonClick(event);
  // preventDefault() hindrar sidan att laddas om

  let allaAnvandare = new Array();

  allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));

  //Lagra datan från formuläret i objektet {resFormData}
  //ex: resFormData.antalResenarer innehåller sedan antaler resenärer
  const resFormData = {
    antalResenarer: document.getElementById("antPlats").value,
    enkelPendling: document.getElementById("turResa").value,
    nar:
      document.getElementById("avgangDatum").value +
      "T" +
      document.getElementById("avgangTid").value,
    fran: document.getElementById("startResa").value,
    till: document.getElementById("slutResa").value,
    pris: document.getElementById("pris").value,
    friText: document.getElementById("textRuta").value,
    anvandareIndex: allaAnvandare.lenght,
  };

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
}
