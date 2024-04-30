function changeStyle() {
var currentStyle= document.getElementById('stylesheet').getAttribute('href');
if(currentStyle==='mystyle.css'){
document.getElementById('stylesheet').setAttribute('href','theme2.css');
}
else{
    document.getElementById('stylesheet').setAttribute('href','mystyle.css');
}
}
/*function changeStyle(){
var button = document.getElementById("bmj");
if(button.classList.contains("mystyle")){
    button.classList.remove("mystyle.css");
    button.classList.add("theme2.css");

}else{
    button.classList.remove("theme2.css");
    button.classList.add("mystyle.css");
}

}*/