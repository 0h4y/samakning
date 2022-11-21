/*Javascript för bilist nedan...
Grupp, mattias, savio, martin K
*/

//Lägger in dagens datum i currentDateTime
let currentDateTime = new Date();
//variabel som innehåller dagens år
let year = currentDateTime.getFullYear();
//variabel som innehåller dagens månad, getMonth är 0 index based
let month = (currentDateTime.getMonth() + 1);
//variabel som innehåller dagens dag, getDate är 0 index based
let date = currentDateTime.getDate();
//variabel som innehåller nuvarande timme
let hour = currentDateTime.getHours();
//variabel som innehåller nuvarande minut
let minutes = currentDateTime.getMinutes();

//Skriver ut siffran 0 så tiden alltid innehåller 2 siffror
if(hour < 10) {
    hour = '0' + hour;
}

if(minutes < 10) {
    minutes = '0' + minutes;
}

let timeTomorrow = hour + ':' + minutes;
//Tar alltid ut första elementet
let avgångTidElem = document.querySelector("#tid-avgång");
let hemgångTidElem = document.querySelector("#tid-hemgång");

//sätter ett minimum på dagens datum
avgångTidElem.setAttribute("min", timeTomorrow);

//Skriver ut siffran 0 så datum alltid innehåller 2 siffror
if(date < 10) {
  date = '0' + date;
}

if(month < 10) {
  month = '0' + month;
}
//dateTomorrow == dagens datum
let dateTomorrow = year + "-" + month + "-" + date;
//Tar alltid ut första elementet
let avgångElem = document.querySelector("#avgång-datum");
let hemgångElem = document.querySelector("#hemgång-datum");

//sätter ett minimum på dagens datum
avgångElem.setAttribute("min", dateTomorrow);

//Metod för avgångsdadum
avgångElem.onchange = function () {
    //Begränsar hemgång till datumet man väljer i avgång. this.Value är värdet från #avgångs-datum
    hemgångElem.setAttribute("min", this.value);
}



function buttonClick() {
    //Arrayer för tid och datum
    let date1 = [];
    let date2 = [];
    let time1 = [];
    let time2 = [];

    //plockar ut värdena från input
    date1 = document.getElementById("avgång-datum").value;
    date2 = document.getElementById("hemgång-datum").value;
    time1 = document.getElementById("tid-avgång").value;
    time2 = document.getElementById("tid-hemgång").value;

    //Splittar arraysen
    date1 = date1.split("-");
    date2 = date2.split("-");
    time1 = time1.split(":");
    time2 = time2.split(":");

    //Jämför datum 0 elementen är år, 1 månad, 2 dag
    if(date1[0] == date2[0] && date1[1] == date2[1] && date1[2] == date2[2]) {
        //funkar ej.
        if(time1[0] > time2[0] || (time1[0] == time2[0] && time1[1] < time2[1])) {

            window.alert("Samma datum");

        }
    }

  // window.alert("Samma datum");

    

    /*if(avgångElem == hemgångElem) {
        if(avgångTidElem > hemgångTidElem) {
            window.alert("ajabaja");
        }
    }*/
}