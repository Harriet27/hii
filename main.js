function time(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    document.getElementById('clock').innerHTML = `<h1>${h} : ${m} : ${s}</h1>`;
}
setInterval(time,1000);

var myDate = new Date();
var hour = myDate.getHours();
var greet = '';
if (hour < 12) {
    greet = 'Good Morning';
} else if (hour >= 12 && hour <= 17) {
    greet = 'Good Afternoon';
} else if (hour >= 17 && hour <= 24) {
    greet = 'Good Night';
}
document.getElementById('greetings').innerHTML = `<h1>${greet}, Godeliva</h1>`;