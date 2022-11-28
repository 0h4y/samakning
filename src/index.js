import { dummy } from "./dummyAnvändare.js";
/*Javascript för startsidan nedan... görs sist av allt*/

const onload = (window.onload = async () => {
  dummy();
  const allaResorDiv = document.getElementById("allaResorTabell");
  allaResorDiv.style = "background-color: #cccccc;";
  allaResorDiv.innerHTML = "Nedan presenteras alla registrerade resor:";
  generateTable();
});

/* En funktion för att generera en dynamisk tabell som innehåller data från localstorage */
const generateTable = async () => {
  const allaResorDiv = document.getElementById("allaResorTabell");

  /* HTML-elementen Table och Tbody skapas*/
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  /* Element för rubrikraden skapas nedan, än så länge är de bara element som inte finns i DOM:en*/
  const headRow = document.createElement("tr");

  const franTd = document.createElement("td");
  const tillTd = document.createElement("td");
  const antalResenarerTd = document.createElement("td");
  const enkelPendlingTd = document.createElement("td");
  const narTd = document.createElement("td");
  const friTextTd = document.createElement("td");
  const prisTd = document.createElement("td");
  const anvandareTd = document.createElement("td");

  const franHeaderText = document.createTextNode("Från:");
  const tillHeaderText = document.createTextNode("Till:");
  const antalResenarerHeaderText = document.createTextNode("Antal resenärer:");
  const enkelPendlingHeaderText = document.createTextNode("Enkel/pendling:");
  const narHeaderText = document.createTextNode("När:");
  const friTextHeaderText = document.createTextNode("Övrigt:");
  const prisHeaderText = document.createTextNode("Pris:");
  const anvandareHeaderText = document.createTextNode("Registrerad av:");

  /* Elementen skapas i DOM:en inifrån och ut. (TEXT -> <td> -> <tr> -> <tbody> -> <table>) */

  franTd.appendChild(franHeaderText);
  tillTd.appendChild(tillHeaderText);
  antalResenarerTd.appendChild(antalResenarerHeaderText);
  enkelPendlingTd.appendChild(enkelPendlingHeaderText);
  narTd.appendChild(narHeaderText);
  friTextTd.appendChild(friTextHeaderText);
  prisTd.appendChild(prisHeaderText);
  anvandareTd.appendChild(anvandareHeaderText);

  headRow.appendChild(franTd);
  headRow.appendChild(tillTd);
  headRow.appendChild(antalResenarerTd);
  headRow.appendChild(enkelPendlingTd);
  headRow.appendChild(narTd);
  headRow.appendChild(friTextTd);
  headRow.appendChild(prisTd);
  headRow.appendChild(anvandareTd);

  tblBody.appendChild(headRow);

  tbl.appendChild(tblBody);

  allaResorDiv.appendChild(tbl);

  /* En array för att hålla data från localstorage skapas, användare respektive resor */
  let allaAnvandare = new Array();
  let allaResor = new Array();

  /* Vi kontrollerar om det finns data i localstorage, datan parsas från json-format till javascript*/
  if (localStorage.getItem("allaResor")) {
    allaResor = await JSON.parse(localStorage.getItem("allaResor"));
  }
  if (localStorage.getItem("allaAnvändare")) {
    allaAnvandare = await JSON.parse(localStorage.getItem("allaAnvändare"));
  }

  const keys = Object.keys(allaResor[0]);

  const keysArray = [
    "fran",
    "till",
    "antalResenarer",
    "enkelPendling",
    "nar",
    "friText",
    "pris",
    "anvandareIndex",
  ];

  /* Data från localstorage loopas ut på respektive rad  
      se: 
      https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces

      Första loopen ger en ny rad (här loopar vi över allaResor som är en array)
      Andra nivån ger respektive kolumn på raden (här loopar vi över respektive resa)
  */
  for (let i = 0; i < allaResor.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < keysArray.length; j++) {
      const cell = document.createElement("td");

      const textToCell = allaResor[i][keysArray[j]];
      let cellText = document.createTextNode(textToCell);

      if (j === 7) {
        const fornamn = allaAnvandare[textToCell].Förnamn;
        const efternamn = allaAnvandare[textToCell].Efternamn;
        cellText = document.createTextNode(fornamn + " " + efternamn);
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    tblBody.appendChild(row);
    tbl.appendChild(tblBody);
  }

  tbl.setAttribute("border", "2");
};
