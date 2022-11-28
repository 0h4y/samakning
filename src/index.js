/*Javascript för startsidan nedan... görs sist av allt*/

const onload = (window.onload = async () => {
  const allaResorTabell = document.getElementById("allaResorTabell");
  allaResorTabell.style = "background-color: #cccccc;";
  allaResorTabell.innerHTML = "dawd";
  generateTable();
});

/* En funktion för att generera en dynamisk tabell som innehåller data från localstorage */
const generateTable = () => {
  const htmlTable = document.createElement("table");
  const tBydy = document.createElement("tbody");

  let allaAnvandare = new Array();
  let allaResor = new Array();

  if (localStorage.getItem("allaResor")) {
    allaResor = JSON.parse(localStorage.getItem("allaResor"));
  }
  if (localStorage.getItem("allaAnvändare")) {
    allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));
  }

  const keys = Object.keys(allaAnvandare[0]);

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

  for (let i = 0; i < allaResor.length; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < keys.length; j++) {
      const cell = document.createElement("td");

      const cellText = document.createTextNode();

      /*
      se: 
      https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
      */
    }
  }
};
