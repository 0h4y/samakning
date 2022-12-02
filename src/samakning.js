/*Javascript för samåkning nedan... Grupp Axel, Martin L*/

// Kör när html laddar
window.onload = function () {
  // Får dagens datum år
  let date = new Date();
  // dagens datum -18 år, och +1 månad för Date() objected listar månader från 0-11, medans setAtrribute(max) tar in det från 1-12
  let maxdate = new Date(
    date.getFullYear() - 18,
    date.getMonth() + 1,
    date.getDate() + 1
  );
  if (date.getMonth() == 11) {
    maxdate = new Date(
      date.getFullYear() - 18,
      date.getMonth(),
      date.getDate() + 1
    );
  }
  // Konverterar till sträng, för att det är så setAttribute vill ha det på sitt andra argument
  let maxdateStr = maxdate.toISOString().split("T")[0];

  // Hittar födelsedatum väljaren, och gör om det till en variabel som man kan använda för saker likt setAttribute
  let fodelsedatum = document.getElementById("fodelsedatum");
  // Gör om Minimum åldern av användarna till 18
  fodelsedatum.setAttribute("max", maxdateStr);

  // dagens datum -120 år, och +1 månad för Date() objected listar månader från 0-11, medans setAtrribute(min) tar in det från 1-12
  let mindate = new Date(
    date.getFullYear() - 120,
    date.getMonth() + 1,
    date.getDate()
  );
  if (date.getMonth() == 11) {
    mindate = new Date(
      date.getFullYear() - 120,
      date.getMonth(),
      date.getDate()
    );
  }
  // Konverterar till sträng, för att det är så setAttribute vill ha det på sitt andra argument
  let mindateStr = mindate.toISOString().split("T")[0];
  // Gör om Maxåldern av användarna till 120år
  fodelsedatum.setAttribute("min", mindateStr);
};
// Kollar validering på form, när man trycker på submit
function validering() {
  // Skapar variabgel indikator för ifall valideringen har gått igenom
  let valid = 0;

  // Skaffar alla element med klassen namn
  const namn = document.querySelectorAll(".namn");
  // Går igenom alla elemenr med klassen namn
  namn.forEach((element) => {
    // Skaffar symbolerna i texten
    let text = element.value;
    if (text.length < 1) {
      // Tillfällig alert
      Swal.fire("Otillåtna tecken i " + element.id);

      // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
      valid++;
    }
    // Går igenom varje symbol
    for (let i = 0; i < text.length; i++) {
      // Väljer index i strängen
      let thisLetter = text[i];
      // Går igenom charcode på symbolen
      let thisLetterChar = thisLetter.charCodeAt(0);
      // Ser till att endast svenska alfabetet, bindesträck, och space är giltigt
      if (
        thisLetterChar > 32 &&
        (thisLetterChar < 45 || thisLetterChar > 45) &&
        (thisLetterChar < 65 || thisLetterChar > 90) &&
        (thisLetterChar < 97 || thisLetterChar > 122) &&
        (thisLetterChar < 196 || thisLetterChar > 197) &&
        (thisLetterChar < 227 || thisLetterChar > 230) &&
        (thisLetterChar < 214 || thisLetterChar > 214) &&
        (thisLetterChar < 246 || thisLetterChar > 246)
      ) {
        // Tillfällig alert
        Swal.fire("Otillåtna tecken i " + element.id);
        // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
        valid++;
        // Alertar inte flera gånger
        break;
      }
    }
  });

  // Skaffar element från mobil-id
  const mobil = document.querySelector("#mobil");
  // Hämtar värdet från elementet, sparar till numbers

  let numbers = mobil.value;
  console.log(numbers.length);
  if (numbers.length != 10) {
    // Tillfällig alert
    Swal.fire("Mobilnumret måste vara 10 siffror!");
    // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
    valid++;
  }
  // Går genom varje symbol i mobil
  for (let i = 0; i < numbers.length; i++) {
    // Väljer index
    const thisNumber = numbers[i];
    // Går genom charcode (symbol)
    let thisNumberChar = thisNumber.charCodeAt(0);
    // Tillåter endast siffror
    if (thisNumberChar < 48 || thisNumberChar > 57) {
      // Tillfällig alert
      Swal.fire("Otillåtna tecken i Mobilnummer!");
      // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
      valid++;
      // Alertar inte flera gånger
      break;
    }
  }

  // Skaffar element från epost-id
  const email = document.querySelector("#epost");
  // Hämtar värdet från elementet
  let adress = email.value;
  if (adress.includes("å" || "ä" || "ö")) {
    Swal.fire("En Epostadress får inte innehålla å, ä eller ö");
    // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
    valid++;
  }

  // Om värdet inte innehåller @
  if (!adress.includes("@")) {
    // Tillfällig alert
    Swal.fire("En Epostadress måste innehålla @.");
    // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
    valid++;
  }
  // Om värdet inte innehåller .
  if (!adress.includes(".")) {
    // Tillfällig alert
    Swal.fire("En Epostadress måste innehålla en .");
    // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
    valid++;
  }
  if (!document.getElementById("fodelsedatum").value) {
    // Tillfällig alert
    Swal.fire("Fyll i ett födelsedatum tack.");
    // Om man inte fyller i rätt så ökar valid så att man inte kan gå vidare om det är felaktigt
    valid++;
  }
  // Kollar ifall det har kommit något problem i formuläret
  if (valid == 0) {
    document.getElementById("collapseForm").style.display = "none";
    document.getElementById("bilreseval").style.visibility = "visible";
    document.getElementById("bilreseval").style.position = "relative";
    document.getElementById("form").style.justifyContent = "space-around";

    //Skickar data till AnvandarData
    const AnvandarDataObject = {
      Förnamn: document.getElementById("Förnamn").value,
      Efternamn: document.getElementById("Efternamn").value,
      fodelsedatum: document.getElementById("fodelsedatum").value,
      mobil: document.getElementById("mobil").value,
      epost: document.getElementById("epost").value,
    };

    let allaAnvandareArray = new Array();

    if (localStorage.getItem("allaAnvändare")) {
      allaAnvandareArray = JSON.parse(localStorage.getItem("allaAnvändare"));
    }

    allaAnvandareArray.push(AnvandarDataObject);

    localStorage.setItem("allaAnvändare", JSON.stringify(allaAnvandareArray));

    console.log(JSON.parse(localStorage.getItem("allaAnvändare")));
  }
}
