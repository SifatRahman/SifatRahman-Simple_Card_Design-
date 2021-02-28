var date=new Date();
var day=date.getDate();
var month=date.getMonth();
var year=date.getFullYear();
for(var i=0;i<4;i++){
document.getElementsByClassName("para")[i].innerHTML="TODAY_DATE="+day+"/"+month+"/"+year;}


for(var i=0;i<4;i++){
document.getElementsByTagName("h1")[i].innerHTML="Hello World";}