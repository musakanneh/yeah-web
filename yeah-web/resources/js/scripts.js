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

// for API
// function firstCall(e) {
//   e.preventDefault();

//   var htmlForm = document.getElementById("formSample");
//   var form = new FormData(htmlForm);
//   form.append("url", "http://api.theyeah.io/api/v1/waiting_list_post");

//   form.forEach((e, i) => {
//     console.log(i, e);
//   });
// }

// $(document).ready(function() {
//   $("#buttonClick").on("click", "button", firstCall);
// });
var form = new FormData();
form.append("name", "Patrick Sikalinda");
form.append("email", "patrick3@theyeah.io");
form.append("phone_number", "250780698185");

var settings = {
  async: true,
  crossDomain: true,
  url: "http://api.theyeah.io/api/v1/waiting_list_post",
  method: "POST",
  headers: {
    authorization: "Basic MjUwNzgwNjk4MTg4OjEyMzQ=",
    "cache-control": "no-cache",
    "postman-token": "fd5734a9-216d-9b25-a63a-f59640707bc9"
  },
  processData: false,
  contentType: false,
  mimeType: "multipart/form-data",
  data: form
};

$.ajax(settings).done(function(response) {
  console.log(response);
});

// --------------------------
// typer js
// ----------------------------
var typed = new Typed(".type", {
  // alert("here");
  strings: ["easier‌", "quicker", "simpler"],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});
