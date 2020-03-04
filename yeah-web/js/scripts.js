// $("document").ready(function() {
//   $("#bar-code-sec").mouseover(function() {
//     $("#bar-code-sec").css("background-color", "yellow");
//   });
// });

$("document").ready(function() {
  $("#bar-code-sec").hover(highlight);

  function highlight() {
    $(this).toggleClass("#bar-code-sec");
  }
});

// $("document").ready(function() {
//   $(".coin-img").on("click", (function() {
//     $(this).toggleClass(".coin-img")
//   });
// });
