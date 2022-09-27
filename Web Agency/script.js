// ********* set date ************
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());
// ********* nav toggle ************
$(document).ready(function () {

    $('#menu-btn').click(changeNav);

    function changeNav() {
        $('#links').toggle(2000);
      $('#menu-btn').toggleClass('turn');
}


})