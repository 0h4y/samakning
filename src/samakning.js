/*Javascript för samåkning nedan...
Grupp axel, martin L
Hej

Hej från Martin L
*/

//Kör när html laddar
window.onload =function(){

    //Får dagens datum år
    let date=new Date();
    //dagens datum -18 år, och +1 månad för Date() objected listar månader från 0-11, medans setAtrribute(max) tar in det från 1-12
    let maxdate=new Date(date.getFullYear()-18, date.getMonth()+1,date.getDate());
    //Konverterar till sträng, för att det är så setAttribute vill ha det på sitt andra argument
    let maxdateStr=""+maxdate.getFullYear()+"-"+maxdate.getMonth()+"-"+maxdate.getDate();
    //Hittar födelsedatum väljaren, och gör om det till en variabel som man kan använda för saker likt setAttribute
    let fodelsedatum=document.getElementById("fodelsedatum");
    //Gör om Minimum åldern av användarna till 18
    fodelsedatum.setAttribute("max", maxdateStr );
}