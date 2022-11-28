const onload = (window.onload = async () => {
    


    allaAnvandare = JSON.parse(localStorage.getItem("allaAnvändare"));
    if(allaAnvandare.slutResa="Malta"){
        allaAnvandare.splice(0,3);
        
    }
    localStorage.setItem("allaAnvändare", JSON.stringify(allaAnvandare));
    console.log(allaAnvandare);




    

    const Malta = {
        Förnamn: "Joakim",
        Efternamn:"Von Anka",
        fodelsedatum: "1967-06-06",
        mobil: "0000000000",
        epost: "Joakimvonanka@hotmail.com",
        turResa: "on",
        avgangsDatum: "2054-05-02",
        avgangTid: "19:00",
        hemgangDatum: "2054-05-03",
        hemgangTid: "10:00",
        startResa: "Mjölby",
        slutResa: "Malta",
        pris: "20",
        textRuta:"Ej rökare",
      };
      
  
      let allaAnvandareArray = new Array();
  
      if (localStorage.getItem("allaAnvändare")) {
        allaAnvandareArray = JSON.parse(localStorage.getItem("allaAnvändare"));
      }
  
      allaAnvandareArray.unshift(Malta);
      allaAnvandareArray.unshift(Malta);
      allaAnvandareArray.unshift(Malta);

  
      localStorage.setItem("allaAnvändare", JSON.stringify(allaAnvandareArray));
      console.log(JSON.parse(localStorage.getItem("allaAnvändare")));



});