/*Javascript för samåkning nedan...
Grupp axel, martin L
Hej

Hej från Martin L
*/
window.onload =function(){
    let date=new Date();
    let maxdate=new Date(date.getFullYear()-18, date.getMonth(),date.getDate());
    document.getElementById("fodelsedatum").setAttribute("max", maxdate );
}