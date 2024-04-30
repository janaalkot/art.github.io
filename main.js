/*const changeimg {

    {
       img:'magic - Copy.jpeg',
        text:'HONOR is pleased to announce its participation in MWC 2024 where the latest range of HONOR flagship phones the HONOR Magic V2 RSR the HONOR Magic6 series will be unveiled, as well as other revolutionary innovations. At 2 00 PM CET on February 2 2024, HONOR will be physically present at the MWC event site in Barcelona, ​​as well as live online\n
        We calls you to join us as we unveil our latest innovations which underscore our commitment to providing a smarter lifestyle for everyone'
    },
    {
       img:'castle.webp',
       text:'Advertising Neventis offers full service planning, services and key stakeholders. I chose a group to announce a partnership with Fira Barcelona to organize international exhibitions in Qatar. Fira Barcelona has provided its services to the causes of 70 exhibitions 15 of which have received global rankings as the best conservators according to their different categories. She was able to declare Events the ultimate good student in the region very quickly due to her experience and the advantage that the events industry provides. It held and managed the most important and successful exhibitions and events, including: the Qatar International Motor Show, the Doha Jewelery and Watches Exhibition the Qatar Trade Fair and the Cityscape Exhibition, in partnership with Informa'
    },
    {
    img: 'alaa.png',
    text: 'Elan Events conceives, hosts and delivers live entertainment events for the community in Qatar in partnership with world-leading companies in this field. These events include concerts, shows, and sports... in line with the country's family entertainment strategy. The activities that were implemented included the Emir Cup the Doha Cultural Festival and many other family entertainment activities'.   

    },
    }
const img=document.getElementById('img'),
      text=document.getElementById('text'),
      button1=document.getElementById('bt1'),
      button2=document.getElementById('bt2'),
var zero =1;
function xx(){
const item =changeimg;
img.src =item.img;
text.textContent=item.text;
}
button2.onclick=function(){
zero++;
if(zero>=changeimg.length-1){}
xx();
}
button1.onclick=function(){
    zero--;
    if(zero<changeimg.length-1){}
    xx();
    }
*/
let currentSlide=0;
const slides=document.querySelectorAll('.slide');
const prevbtn=document.getElementById('prevbtn');
const nextbtn=document.getElementById('nextbtn');
function showSlide(index){
    slides.forEach((slide)=>{
        slide.style.display='none';
    });
    slides[index].style.display='block'
}
function nextSlide(){
currentSlide=(currentSlide+1)%slides.length;
showSlide(currentSlide);
}
function prevSlide(){
    currentSlide=(currentSlide-1+slides.length)%slides.length;
    showSlide(currentSlide);
    }
    showSlide(currentSlide);
    nextbtn.addEventListener('click',nextSlide)
    prevbtn.addEventListener('click',prevSlide)


function changeStyle(){
var currentStyle= document.getElementById('stylesheet').getAttribute('href');
if(currentStyle==='ali.css'){
document.getElementById('stylesheet').setAttribute('href','wafaa.css');
}
else{
    document.getElementById('stylesheet').setAttribute('href','ali.css');
}
}