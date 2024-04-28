//variable for the glyphicon in the nav bar
var Change = document.getElementById('triangle');
//for the vids of the first section
var firstSec = document.querySelectorAll('.topthree');
//for the single big vid to the left in the second section
var secondSecSingleVid = document.querySelectorAll('.topone');
//for the 4 small vids to the right in the second section
var secondSecFourVids = document.querySelectorAll('.topfour');
//for the single big vid to the left in the third section
var thirdSecSingleVid = document.querySelectorAll('.bottomone');
//for the 4 small vids to the right in the third section
var thirdSecFourVids = document.querySelectorAll('.bottomfour');
//for the vids of the fourth section
var fourthSec = document.querySelectorAll('.bottomthree');
//number of clicks on the right / forward button in the first section
var clicksForTopThree = 0;
//number of clicks on the right / forward button in the fourth section
var clicksForBottomThree = 0;
//number of clicks on the right / forward button in the second section
var clicksForTopFive = 0;
//number of clicks on the right / forward button in the third section
var clicksForBottomFive = 0;
//variable to used in condition to switch between making the glyphicon point to the right and to the bottom in the nav bar
var right = 0;
//index for the vids that get displayed in the first section
var indexForTopThree = 0;
//index for the vids that get displayed in the fourth section
var indexForBottomThree = 0;
//index for the big vid that gets displayed in the second section
var indexForTopFiveOne = 0;
//index for the small vids that get displayed in the second section
var indexForTopFiveFour = 0;
//index for the big vid that gets displayed in the third section
var indexForBottomFiveOne = 0;
//index for the small vids that get displayed in the third section
var indexForBottomFiveFour = 0;
//the intial case when the website loads
//the first three vids that get displayed in the first section
for (let index = 0; index < 3; index++) {
    firstSec[index].style.display = 'flex';    
}
//the first vid to the left that get displayed in the second section
secondSecSingleVid[0].style.display = 'flex';
//the first four vids to the right that get displayed in the second section
for (let index = 0; index < 4; index++) {
    secondSecFourVids[index].style.display = 'flex';    
}
//the first vid to the left that get displayed in the third section
thirdSecSingleVid[0].style.display = 'flex';
//the first four vids to the right that get displayed in the third section
for (let index = 0; index < 4; index++) {
    thirdSecFourVids[index].style.display = 'flex';    
}
//the first three vids that get displayed in the fourth section
for (let index = 0; index < 3; index++) {
    fourthSec[index].style.display = 'flex';    
}
//the buttons that display the earlier vids are disabled like so
for (let index = 0; index < 2; index++) {
    document.getElementsByClassName('left')[index].disabled = true;
    document.getElementsByClassName('left')[index].style.cursor = 'context-menu';
    document.getElementsByClassName('left')[index].style.opacity = '0.4';
    document.getElementsByClassName('back')[index].disabled = true;
    document.getElementsByClassName('back')[index].style.cursor = 'context-menu';
    document.getElementsByClassName('back')[index].style.opacity = '0.4';
}
//the function that changes the glyphicon in the nav bar
function sectionsDisplayAndHide(){
    if(right == 1){
        Change.innerHTML = '&#xe250;';
        right = 0;   
        document.getElementById('dropdownlist').style.display = 'none';
    }
    else{
        Change.innerHTML = '&#xe252;';
        right = 1;
        document.getElementById('dropdownlist').style.display = 'block';
    } 
}
//the function that displays the later vids in the first section
function topthreeVidsNext(){
    indexForTopThree+=3;
    clicksForTopThree++;
    document.getElementsByClassName('left')[0].disabled = false;
    document.getElementsByClassName('left')[0].style.cursor = 'pointer';
    document.getElementsByClassName('left')[0].style.opacity = '1';
    firstSec[indexForTopThree].style.display = 'flex';
    firstSec[indexForTopThree+1].style.display = 'flex';
    firstSec[indexForTopThree+2].style.display = 'flex';
    firstSec[indexForTopThree-1].style.display = 'none';
    firstSec[indexForTopThree-2].style.display = 'none';
    firstSec[indexForTopThree-3].style.display = 'none';
    if(clicksForTopThree == 3){
        document.getElementsByClassName('right')[0].disabled = true;
        document.getElementsByClassName('right')[0].style.cursor = 'context-menu';
        document.getElementsByClassName('right')[0].style.opacity = '0.4';
        alert("We'll add more vids and features in the future so, stay tuned for updates!");
    }
}
//the function that displays the earlier vids in the first section
function topthreeVidsPrev(){
    indexForTopThree-=3;
    clicksForTopThree--;
    document.getElementsByClassName('right')[0].disabled = false;
    document.getElementsByClassName('right')[0].style.cursor = 'pointer';
    document.getElementsByClassName('right')[0].style.opacity = '1';
    if(!clicksForTopThree){
        document.getElementsByClassName('left')[0].disabled = true;
        document.getElementsByClassName('left')[0].style.cursor = 'context-menu';
        document.getElementsByClassName('left')[0].style.opacity = '0.4';
    }
    firstSec[indexForTopThree].style.display = 'flex';
    firstSec[indexForTopThree+1].style.display = 'flex';
    firstSec[indexForTopThree+2].style.display = 'flex';
    firstSec[indexForTopThree+3].style.display = 'none';
    firstSec[indexForTopThree+4].style.display = 'none';
    firstSec[indexForTopThree+5].style.display = 'none';
}
//the function that displays the later vids in the fourth section
function bottomthreeVidsNext(){
    indexForBottomThree+=3;
    clicksForBottomThree++;
    document.getElementsByClassName('left')[1].disabled = false;
    document.getElementsByClassName('left')[1].style.cursor = 'pointer'; 
    document.getElementsByClassName('left')[1].style.opacity = '1'; 
    fourthSec[indexForBottomThree].style.display = 'flex';
    fourthSec[indexForBottomThree+1].style.display = 'flex';
    fourthSec[indexForBottomThree+2].style.display = 'flex';
    fourthSec[indexForBottomThree-1].style.display = 'none';
    fourthSec[indexForBottomThree-2].style.display = 'none';
    fourthSec[indexForBottomThree-3].style.display = 'none';
    if(clicksForBottomThree == 4){
        document.getElementsByClassName('right')[1].disabled = true;
        document.getElementsByClassName('right')[1].style.cursor = 'context-menu';    
        document.getElementsByClassName('right')[1].style.opacity = '0.4';   
        alert("We'll add more vids and features in the future so, stay tuned for updates!");
    }
}
//the function that displays the earlier vids in the fourth section
function bottomthreeVidsPrev(){
    indexForBottomThree-=3;
    clicksForBottomThree--;
    document.getElementsByClassName('right')[1].disabled = false;
    document.getElementsByClassName('right')[1].style.cursor = 'pointer';
    document.getElementsByClassName('right')[1].style.opacity = '1'; 
    if(!clicksForBottomThree){
        document.getElementsByClassName('left')[1].disabled = true;
        document.getElementsByClassName('left')[1].style.cursor = 'context-menu';
        document.getElementsByClassName('left')[1].style.opacity = '0.4';
    }
    fourthSec[indexForBottomThree].style.display = 'flex';
    fourthSec[indexForBottomThree+1].style.display = 'flex';
    fourthSec[indexForBottomThree+2].style.display = 'flex';
    fourthSec[indexForBottomThree+3].style.display = 'none';
    fourthSec[indexForBottomThree+4].style.display = 'none';
    fourthSec[indexForBottomThree+5].style.display = 'none';
}
//the function that displays the later vids in the second section
function topfiveVidsNext(){
    indexForTopFiveOne++;
    indexForTopFiveFour+=4;
    clicksForTopFive++;
    document.getElementsByClassName('back')[0].disabled = false;
    document.getElementsByClassName('back')[0].style.cursor = 'pointer';
    document.getElementsByClassName('back')[0].style.opacity = '1';
    secondSecSingleVid[indexForTopFiveOne].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour+1].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour+2].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour+3].style.display = 'flex';
    secondSecSingleVid[indexForTopFiveOne-1].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour-1].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour-2].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour-3].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour-4].style.display = 'none';
    if(clicksForTopFive == 2){
        document.getElementsByClassName('forward')[0].disabled = true;
        document.getElementsByClassName('forward')[0].style.cursor = 'context-menu';
        document.getElementsByClassName('forward')[0].style.opacity = '0.4';
        alert("We'll add more vids and features in the future so, stay tuned for updates!");
    }
}
//the function that displays the earlier vids in the second section
function topfiveVidsPrev(){
    indexForTopFiveOne--;
    indexForTopFiveFour-=4;
    clicksForTopFive--;
    document.getElementsByClassName('forward')[0].disabled = false;
    document.getElementsByClassName('forward')[0].style.cursor = 'pointer';
    document.getElementsByClassName('forward')[0].style.opacity = '1';
        if(!clicksForTopFive){
        document.getElementsByClassName('back')[0].disabled = true;
        document.getElementsByClassName('back')[0].style.cursor = 'context-menu';
        document.getElementsByClassName('back')[0].style.opacity = '0.4';
    }
    secondSecSingleVid[indexForTopFiveOne].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour+1].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour+2].style.display = 'flex';
    secondSecFourVids[indexForTopFiveFour+3].style.display = 'flex';
    secondSecSingleVid[indexForTopFiveOne+1].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour+4].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour+5].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour+6].style.display = 'none';
    secondSecFourVids[indexForTopFiveFour+7].style.display = 'none';
}
//the function that displays the later vids in the third section
function bottomfiveVidsNext(){
    indexForBottomFiveOne++;
    indexForBottomFiveFour+=4;
    clicksForBottomFive++;
    document.getElementsByClassName('back')[1].disabled = false;
    document.getElementsByClassName('back')[1].style.cursor = 'pointer';
    document.getElementsByClassName('back')[1].style.opacity = '1';
    thirdSecSingleVid[indexForBottomFiveOne].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour+1].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour+2].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour+3].style.display = 'flex';
    thirdSecSingleVid[indexForBottomFiveOne-1].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour-1].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour-2].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour-3].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour-4].style.display = 'none';
    if(clicksForBottomFive == 3){
        document.getElementsByClassName('forward')[1].disabled = true;
        document.getElementsByClassName('forward')[1].style.cursor = 'context-menu';
        document.getElementsByClassName('forward')[1].style.opacity = '0.4';
        alert("We'll add more vids and features in the future so, stay tuned for updates!");
    }
}
//the function that displays the earlier vids in the third section
function bottomfiveVidsPrev(){
    indexForBottomFiveOne--;
    indexForBottomFiveFour-=4;
    clicksForBottomFive--;
    document.getElementsByClassName('forward')[1].disabled = false;
    document.getElementsByClassName('forward')[1].style.cursor = 'pointer';
    document.getElementsByClassName('forward')[1].style.opacity = '1';
        if(!clicksForBottomFive){
        document.getElementsByClassName('back')[1].disabled = true;
        document.getElementsByClassName('back')[1].style.cursor = 'context-menu';
        document.getElementsByClassName('back')[1].style.opacity = '0.4';
    }
    thirdSecSingleVid[indexForBottomFiveOne].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour+1].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour+2].style.display = 'flex';
    thirdSecFourVids[indexForBottomFiveFour+3].style.display = 'flex';
    thirdSecSingleVid[indexForBottomFiveOne+1].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour+4].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour+5].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour+6].style.display = 'none';
    thirdSecFourVids[indexForBottomFiveFour+7].style.display = 'none';
}
