// sticky navigation
$(document).ready(function() {
  var waypoint = new Waypoint({
    element: document.getElementById("sticky-nav-start"),
    handler: function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    offset: "10%"
  });

  // animations on scroll
  $(".wp-1").waypoint(
    function(direction) {
      $(".wp-1").addClass("animated fadeIn");
    },
    {
      offset: "55%"
    }
  );

  $(".wp-2").waypoint(
    function(direction) {
      $(".wp-2").addClass("animated pulse");
    },
    {
      offset: "55%"
    }
  );

  $(".wp-3").waypoint(
    function(direction) {
      $(".wp-3").addClass("animated fadeInUp");
    },
    {
      offset: "55%"
    }
  );
  waypoint;
});


var form = new FormData();
form.append("name ", "KannehMusa");
form.append("email", "kannemusa@yeah.io");
form.append("phone_number", "0799257950");

var settings = {
  url: "http://api.theyeah.io/api/v1/waiting_list_post",
  method: "POST",
  timeout: 0,
  headers: {
    name: "Musa Kanneh",
    email: "musas.kanneh@gmail.com",
    phone_number: "0782579509"
  },
  processData: false,
  mimeType: "multipart/form-data",
  contentType: false,
  data: form
};

$.ajax(settings).done(function(response) {
  if (response == 201) {
    alert("Done");
    console.log(response);
    document.getElementById("#name").value = "";
    document.getElementById("#email").value = "";
    document.getElementById("#phone_number").value = "";
    document.window.location.href = "index.html";
  }
});

// form submission
// $(function() {
//   $("#buttonClick").click(function() {
//     alert("Successfully submitted!");
//     setTimeout(function() {
//       alert("setTimeout");
//       document.getElementById("#name").value = "";
//     }, 2000);
//   });
// });
