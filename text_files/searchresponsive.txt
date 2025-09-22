function searchFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue, val;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');
  val = 0;
  
  

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("div")[0];
    txtValue = a.id;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      val += 1100;
      document.getElementById("page").style.height = val + "px";
    } else {
      li[i].style.display = "none";
    }
  }

  if (filter == "") {
    document.getElementById("page").style.height = "";
  }
}