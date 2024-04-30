function onKeyUp() {
    var input, filter, ul, li, a, i, txtValue;
  
    input = document.querySelector('.searchInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.products');
    li = ul.getElementsByTagName('li');
  
    // Show the products block only when there is input
    ul.style.display = filter ? 'block' : 'none';
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }