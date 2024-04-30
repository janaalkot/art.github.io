   //list for the text divs
   const textNodeList = document.querySelectorAll(".small");
   //list for the two images in a row divs
   const twoImagesNodeList = document.querySelectorAll("div.one");
   //list for the div of the images that are displayed three in a row
   const threeImagesNodeList = document.querySelectorAll("div.four");
   //list for the div of the div that contains the div of the text and the div of the image in the three images in a row rows
   const threeImagesBoxNodeList = document.querySelectorAll("div.five");
   //displaying 2 images by returning the index of the  div of image and the div of the text
   function displayTwo(index2, index1){
   if(index1%5 == 1){
    twoImagesNodeList[index2].style.order = "-1";
    twoImagesNodeList[index2-1].style.order = "1";
    textNodeList[index1-1].style.order = "1";
    textNodeList[index1].style.order = "-1"; }
   textNodeList[index1].style.display = "flex";
   textNodeList[index1].style.flex = "0 0 49.5%";
   textNodeList[index1].style.height = "700px";
   textNodeList[index1].style.overflow = "auto";
   twoImagesNodeList[index2].style.cursor = "context-menu";
   }
     //displaying 3 images by returning the index of the  div of image and the div of the text
   function displayThree(index2, index1){
   threeImagesBoxNodeList[index2].style.order = "-1";
   if(index1%5 == 3){
    threeImagesBoxNodeList[index2-1].style.order = "1";
    threeImagesBoxNodeList[index2+1].style.order = "1";
    threeImagesBoxNodeList[index2-1].style.flex = "0 0 49.5%";
    threeImagesBoxNodeList[index2+1].style.flex = "0 0 49.5%"; }
   if(index1%5 == 4){
    threeImagesBoxNodeList[index2-2].style.order = "1";
    threeImagesBoxNodeList[index2-1].style.order = "1";
    threeImagesBoxNodeList[index2-1].style.flex = "0 0 49.5%";
    threeImagesBoxNodeList[index2-2].style.flex = "0 0 49.5%"; }
   else{
    threeImagesBoxNodeList[index2+1].style.flex = "0 0 49.5%";
    threeImagesBoxNodeList[index2+2].style.flex = "0 0 49.5%"; }
   threeImagesBoxNodeList[index2].style.flex = "0 0 100%";
   threeImagesNodeList[index2].style.flex = "0 0 49.5%";
   textNodeList[index1].style.display = "flex";
   textNodeList[index1].style.flex = "0 0 49.5%";
   textNodeList[index1].style.height = "500px";
   textNodeList[index1].style.overflow = "auto";
   threeImagesNodeList[index2].style.cursor = "context-menu";
   }
     //hiding 2 images by returning the index of the  div of image and the div of the text
   function hideTwo(ind1, ind2){
   if(ind1%5 == 1){
    twoImagesNodeList[ind2].style.order = "1";
    textNodeList[ind1].style.order = "1"; }
   textNodeList[ind1].style.display = "none";
   twoImagesNodeList[ind2].style.cursor = "pointer";
   }
     //hiding 3 images by returning the index of the div of image and the div of the text
   function hideThree(ind1, ind2){
   threeImagesBoxNodeList[ind2].style.flex = "0 0 32.9%";
   if(ind1%5 == 3){
    threeImagesBoxNodeList[ind2].style.order = "-1";
    threeImagesBoxNodeList[ind2-1].style.order = "-1";
    threeImagesBoxNodeList[ind2+1].style.order = "1";
    threeImagesBoxNodeList[ind2+1].style.flex = "0 0 32.9%";
    threeImagesBoxNodeList[ind2-1].style.flex = "0 0 32.9%"; }
   if(ind1%5 == 4){
    threeImagesBoxNodeList[ind2].style.order = "1";
    threeImagesBoxNodeList[ind2-1].style.order = "-1";
    threeImagesBoxNodeList[ind2-2].style.order = "-1";
    threeImagesBoxNodeList[ind2-2].style.flex = "0 0 32.9%";
    threeImagesBoxNodeList[ind2-1].style.flex = "0 0 32.9%"; }
   else{
    threeImagesBoxNodeList[ind2].style.order = "-1";
    threeImagesBoxNodeList[ind2+1].style.order = "1";
    threeImagesBoxNodeList[ind2+2].style.order = "1";
    threeImagesBoxNodeList[ind2+1].style.flex = "0 0 32.9%";
    threeImagesBoxNodeList[ind2+2].style.flex = "0 0 32.9%"; }
   threeImagesNodeList[ind2].style.flex = "0 0 99%";
   textNodeList[ind1].style.display = "none";
   threeImagesNodeList[ind2].style.cursor = "pointer";
   }

   function display() {
      threeImagesBoxNodeList[10].style.order = "-1";
      threeImagesBoxNodeList[9].style.order = "1";
      threeImagesBoxNodeList[11].style.order = "1";
      threeImagesBoxNodeList[9].style.flex = "0 0 49.5%";
      threeImagesBoxNodeList[11].style.flex = "0 0 49.5%";
      threeImagesBoxNodeList[10].style.flex = "0 0 100%";
   threeImagesNodeList[10].style.flex = "0 0 49.5%";
   textNodeList[18].style.display = "flex";
   textNodeList[18].style.flex = "0 0 49.5%";
   textNodeList[18].style.height = "500px";
   textNodeList[18].style.overflow = "auto";
   threeImagesNodeList[10].style.cursor = "context-menu";
   }

    function hide() {
      threeImagesBoxNodeList[10].style.flex = "0 0 32.9%";
      threeImagesBoxNodeList[10].style.order = "-1";
      threeImagesBoxNodeList[9].style.order = "-1";
      threeImagesBoxNodeList[11].style.order = "1";
      threeImagesBoxNodeList[11].style.flex = "0 0 32.9%";
      threeImagesBoxNodeList[9].style.flex = "0 0 32.9%";
      threeImagesNodeList[10].style.flex = "0 0 99%";
      textNodeList[18].style.display = "none";
      threeImagesNodeList[10].style.cursor = "pointer";
    }