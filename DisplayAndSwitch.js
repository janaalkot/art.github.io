var Change = document.getElementById('triangle');
var firstSec = document.querySelectorAll('.topthree');
var secondSecSingleVid = document.querySelectorAll('.topone');
var secondSecFourVids = document.querySelectorAll('.topfour');
var thirdSecSingleVid = document.querySelectorAll('.bottomone');
var thirdSecFourVids = document.querySelectorAll('.bottomfour');
var fourthSec = document.querySelectorAll('.bottomthree');
var clicksForTopThree = 0;
var clicksForBottomThree = 0;
var clicksForTopFive = 0;
var clicksForBottomFive = 0;
var right = 0;
var indexForTopThree = 0;
var indexForBottomThree = 0;
var indexForTopFiveOne = 0;
var indexForTopFiveFour = 0;
var indexForBottomFiveOne = 0;
var indexForBottomFiveFour = 0;
document.getElementsByClassName('left').disabled = true;
document.getElementsByClassName('back').disabled = true;
firstSec[0].style.display = 'flex';
firstSec[1].style.display = 'flex';
firstSec[2].style.display = 'flex';
secondSecSingleVid[0].style.display = 'flex';
secondSecFourVids[0].style.display = 'flex';
secondSecFourVids[1].style.display = 'flex';
secondSecFourVids[2].style.display = 'flex';
secondSecFourVids[3].style.display = 'flex';
thirdSecSingleVid[0].style.display = 'flex';
thirdSecFourVids[0].style.display = 'flex';
thirdSecFourVids[1].style.display = 'flex';
thirdSecFourVids[2].style.display = 'flex';
thirdSecFourVids[3].style.display = 'flex';
fourthSec[0].style.display = 'flex';
fourthSec[1].style.display = 'flex';
fourthSec[2].style.display = 'flex';
document.getElementsByClassName('left')[0].disabled = true;
document.getElementsByClassName('left')[0].style.cursor = 'context-menu';
document.getElementsByClassName('left')[0].style.opacity = '0.4';
document.getElementsByClassName('left')[1].disabled = true;
document.getElementsByClassName('left')[1].style.cursor = 'context-menu';
document.getElementsByClassName('left')[1].style.opacity = '0.4';
document.getElementsByClassName('back')[0].disabled = true;
document.getElementsByClassName('back')[0].style.cursor = 'context-menu';
document.getElementsByClassName('back')[0].style.opacity = '0.4';
document.getElementsByClassName('back')[1].disabled = true;
document.getElementsByClassName('back')[1].style.cursor = 'context-menu';
document.getElementsByClassName('back')[1].style.opacity = '0.4';
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