/*Javascript för bilist nedan...
Grupp, mattias, savio, martin K
*/

//window.onload körs efter att all HTML renderats klart.
const onload = (window.onload = (event) => {
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

  //Titelvärden för att förklara datan som loopas ut.
  const dataNamn = [
    "Förnamn:",
    "Efternamn:",
    "Födelsedatum:",
    "Mobilnummer:",
    "E-post:",
  ];

  //element <table> och <tbody> skapas
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  //Loop av Titelvärden, Användardata och tillhärande <tr> och <td> element för en snygg table.
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

  //Färdig <table> läggs till på sidan i "userData" div:en
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

//Validering för att säkerställa att alla fält har fått indata
function validering() {
  //Alla fält som ska valideras hämtas in
  const från = document.getElementById("startResa").value;
  const till = document.getElementById("slutResa").value;
  const datum = document.getElementById("avgangDatum").value;
  const tid = document.getElementById("avgangTid").value;
  const pris = document.getElementById("pris").value;

  if (datum.length < 1) {
    Swal.fire("Fyll i ett datum för din resa");
    return false;
  }
  if (tid.length < 1) {
    Swal.fire("Fyll i en tid för din resa");
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

//Local storage
function saveResForm(event) {
  if (!validering()) {
    return;
  }

  //Användarna som registrerats hämtas för att kunna skapa koppling mellan resan och användaren.
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
    anvandareIndex: allaAnvandare.length - 1,
    resetyp: "Bilist",
  };

  //En array för att hålla alla resor skapas
  let allaResorArray = new Array();

  //Om det finns resor sparade i local storage, hämtas dessa och parsas från JSON format till javascript
  //Datan lagras i JSON-format då localstorage endast kan spara strängar.
  if (localStorage.getItem("allaResor")) {
    allaResorArray = JSON.parse(localStorage.getItem("allaResor"));
  }

  //Den nya resan läggs till i array:en
  allaResorArray.push(resFormData);

  //Arrayen sparas åter till localstorage i JSON-format
  localStorage.setItem("allaResor", JSON.stringify(allaResorArray));

  //Loggning nedan för test
  console.log(JSON.parse(localStorage.getItem("allaResor")));
  console.log(JSON.parse(localStorage.getItem("allaAnvändare")));

  //Till sist skickas personen vidare till startsidan där alla resor presenteras
  window.location.href = "index.html";
}
