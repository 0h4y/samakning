import { dummy } from "./dummyAnvändare.js";
/*Javascript för startsidan nedan... görs sist av allt*/

const onload = (window.onload = async () => {
  dummy();
  const allaResorDiv = document.getElementById("allaResorTabell");
  //allaResorDiv.style = "background-color: #cccccc;";
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
  const headHeadRow = document.createElement("tr");

  const resetypTd = document.createElement("td");
  const franTd = document.createElement("td");
  const tillTd = document.createElement("td");
  const antalResenarerTd = document.createElement("td");
  const enkelPendlingTd = document.createElement("td");
  const narTd = document.createElement("td");
  const friTextTd = document.createElement("td");
  const prisTd = document.createElement("td");
  const anvandareTd = document.createElement("td");

  // td till översta
  const rubrikForTabellenTd = document.createElement("td");

  // en rubrik över alla andra rubriker
  const rubrikForTabellenText = document.createTextNode(
    "Nedan presenteras alla registrerade resor:"
  );

  // Rubriker för tabellen som presenterar alla resor
  const resetypHeaderText = document.createTextNode("Resenär / Bilist:");
  const franHeaderText = document.createTextNode("Från:");
  const tillHeaderText = document.createTextNode("Till:");
  const antalResenarerHeaderText = document.createTextNode("Antal resenärer:");
  const enkelPendlingHeaderText = document.createTextNode("Enkel/pendling:");
  const narHeaderText = document.createTextNode("När:");
  const friTextHeaderText = document.createTextNode("Övrigt:");
  const prisHeaderText = document.createTextNode("Ersättning per mil:");
  const anvandareHeaderText = document.createTextNode("Registrerad av:");

  /* Elementen skapas i DOM:en inifrån och ut. (TEXT -> <td> -> <tr> -> <tbody> -> <table>) */

  rubrikForTabellenTd.appendChild(rubrikForTabellenText);
  rubrikForTabellenTd.colSpan = "9";

  resetypTd.appendChild(resetypHeaderText);
  franTd.appendChild(franHeaderText);
  tillTd.appendChild(tillHeaderText);
  antalResenarerTd.appendChild(antalResenarerHeaderText);
  enkelPendlingTd.appendChild(enkelPendlingHeaderText);
  narTd.appendChild(narHeaderText);
  friTextTd.appendChild(friTextHeaderText);
  prisTd.appendChild(prisHeaderText);
  anvandareTd.appendChild(anvandareHeaderText);

  //alla rubriker läggs in till <tr> i DOM:en
  headHeadRow.appendChild(rubrikForTabellenTd);

  headRow.appendChild(resetypTd);
  headRow.appendChild(franTd);
  headRow.appendChild(tillTd);
  headRow.appendChild(antalResenarerTd);
  headRow.appendChild(enkelPendlingTd);
  headRow.appendChild(narTd);
  headRow.appendChild(friTextTd);
  headRow.appendChild(prisTd);
  headRow.appendChild(anvandareTd);

  //<tr> läggs till i <tbody>
  tblBody.appendChild(headHeadRow);
  tblBody.appendChild(headRow);

  //<tbody> läggs till i <table>
  tbl.appendChild(tblBody);

  //<table> läggs till i diven class="allaResor"
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

  const keysArray = [
    "resetyp",
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

      cell.classList.add("toUpperTd");

      if (j === 6) {
        cell.classList.remove("toUpperTd");
      }

      let textToCell = allaResor[i][keysArray[j]];
      // Gör om datum så att den skrivs utan 'T', som kommer från ISOString();
      if (j == 5) {
        textToCell = textToCell.replace("T", " ");
      }
      let cellText = document.createTextNode(textToCell);

      if (j === 7) {
        cellText = document.createTextNode(textToCell + "kr");
      }
      if (j === 8) {
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
};
