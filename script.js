function changeStyle(){
var currentStyle= document.getElementById('stylesheet').getAttribute('href');
if(currentStyle==='ali.css'){
document.getElementById('stylesheet').setAttribute('href','wafaa.css');
}
else{
    document.getElementById('stylesheet').setAttribute('href','ali.css');
}
