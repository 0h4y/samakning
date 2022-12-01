export const dummy = () => {
  // Dummyanvändare
  const Anv0 = {
    Förnamn: "Joakim",
    Efternamn: "Von Anka",
    fodelsedatum: "1967-06-06",
    mobil: "0000000000",
    epost: "Joakimvonanka@hotmail.com",
  };

  const Res0 = {
    antalResenarer: "4",
    enkelPendling: "on",
    nar: "2054-05-02T19:00",
    fran: "Mjölby",
    till: "Malta",
    pris: "20",
    friText: "Ej rökare",
    anvandareIndex: 0,
    resetyp: "Bilist",
  };

  // Dummyanvändare
  const Anv1 = {
    Förnamn: "Kalle",
    Efternamn: "Karlsson",
    fodelsedatum: "1994-12-23",
    mobil: "0000000001",
    epost: "kalle.karlsson@hotmail.com",
  };
  const Res1 = {
    antalResenarer: "3",
    enkelPendling: "off",
    nar: "2023-01-15T08:00",
    fran: "Linköping",
    till: "Stockholm",
    pris: "20",
    friText: "Inga djur med i bilen",
    anvandareIndex: 1,
    resetyp: "Bilist",
  };

  // Dummyanvändare
  const Anv2 = {
    Förnamn: "Johanna",
    Efternamn: "Eriksson",
    fodelsedatum: "1950-09-30",
    mobil: "0000000002",
    epost: "johanna.eriksson@gmail.com",
  };
  const Res2 = {
    antalResenarer: "2",
    enkelPendling: "Enkel",
    nar: "2022-11-10T10:00",
    fran: "Ljungsbro",
    till: "Jönköping",
    pris: "15",
    friText: "Vi är två personer som söker bilresa som ska åka",
    anvandareIndex: 2,
    resetyp: "Resenär",
  };

  // Skapar två arrayer, en för resor, och en för användare
  let allaAnvandareArray = new Array();
  let allaResorArray = new Array();

  // Kollar om det finns några resor
  if (localStorage.getItem("allaResor")) {
    // Hämtar data från localstorage och skickar in det i arrayen
    allaResorArray = JSON.parse(localStorage.getItem("allaResor"));
  }

  // Kollar om det finns några användare
  if (localStorage.getItem("allaAnvändare")) {
    // Hämtar data från localstorage och skickar in det i arrayen
    allaAnvandareArray = JSON.parse(localStorage.getItem("allaAnvändare"));
  }

  // Lägger till 3st dummyanvändare på index 0,1,2
  allaAnvandareArray.splice(0, 3, Anv0, Anv1, Anv2);
  allaResorArray.splice(0, 3, Res0, Res1, Res2);

  // Lägger till dummydatan i localstorage
  localStorage.setItem("allaAnvändare", JSON.stringify(allaAnvandareArray));
  localStorage.setItem("allaResor", JSON.stringify(allaResorArray));

  // För att vi ska se att det funkar
  console.log(JSON.parse(localStorage.getItem("allaAnvändare")));
  console.log(JSON.parse(localStorage.getItem("allaResor")));
};
