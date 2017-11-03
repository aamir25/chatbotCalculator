var selectedPlatforms = 0;
function swapImage(id,primary,secondary) {
  src = document.getElementById(id).src;
  if (src.match(primary)) {
    document.getElementById(id).src=secondary;
    selectedPlatforms++
  } else {
    document.getElementById(id).src=primary;
    selectedPlatforms--
  }

  $("#page1_next").prop('disabled', selectedPlatforms < 1);
}
$(document).ready(function(){
 $(".platform").click(function(){
   console.log("hey");
 })
})
