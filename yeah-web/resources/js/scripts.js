// sticky navigation
$(document).ready(function () {
  var waypoint = new Waypoint({
    element: document.getElementById("sticky-nav-start"),
    handler: function (direction) {},
    // offset: "10%",
  });

  // animations on scroll
  $(".wp-1").waypoint(
    function (direction) {
      $(".wp-1").addClass("animated fadeIn");
    },
    {
      offset: "55%",
    }
  );
  $(".wp-2").waypoint(
    function (direction) {
      $(".wp-2").addClass("animated pulse");
    },
    {
      offset: "55%",
    }
  );
  $(".wp-3").waypoint(
    function (direction) {
      $(".wp-3").addClass("animated fadeInUp");
    },
    {
      offset: "55%",
    }
  );
  waypoint;
});

// function to show content (onClick)
$(document).ready(function () {
  $(".iphonepng-one").show();
  $(".iphonepng-two").hide();
  $(".iphonepng-three").hide();
  $(".faded-color1 h1").css("color", "#0846e2");
  $(".faded-color2 h1").css("color", "#4378fc6e");
  $(".faded-color3 h1").css("color", "#4378fc6e");

  $(".faded-color1 h1").click(function () {
    $(".faded-color1 h1").css("color", "blue");
    $(".faded-color2 h1").css("color", "#4378fc6e");
    $(".faded-color3 h1").css("color", "#4378fc6e");
    $(".iphonepng-two").hide(function () {
      $(".iphonepng-three").hide();
      $(".iphonepng-one").show();
    });
  });

  $(".faded-color2 h1").click(function () {
    $(".faded-color2 h1").css("color", "blue");
    $(".faded-color3 h1").css("color", "#4378fc6e");
    $(".faded-color1 h1").css("color", "#4378fc6e");
    $(".iphonepng-one").hide(function () {
      $(".iphonepng-three").hide();
      $(".iphonepng-two").show();
    });
  });

  $(".faded-color3 h1").click(function () {
    $(".faded-color3 h1").css("color", "blue");
    $(".faded-color2 h1").css("color", "#4378fc6e");
    $(".faded-color1 h1").css("color", "#4378fc6e");
    $(".iphonepng-one").hide(function () {
      $(".iphonepng-two").hide();
      $(".iphonepng-three").show();
    });
  });
});
