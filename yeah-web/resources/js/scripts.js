// var form = new FormData();
// form.append("name", "Musa");
// form.append("email", "patrick3@theyeah.io");
// form.append("phone_number", "250780698185");

// var settings = {
//   async: true,
//   crossDomain: true,
//   url: "http://api.theyeah.io/api/v1/waiting_list_post",
//   method: "POST",
//   headers: {
//     authorization: "Basic MjUwNzgwNjk4MTg4OjEyMzQ=",
//     "cache-control": "no-cache",
//     "postman-token": "fd5734a9-216d-9b25-a63a-f59640707bc9"
//   },

//   processData: false,
//   contentType: false,
//   mimeType: "multipart/form-data",
//   data: form
// };

// $.ajax(settings).done(function(response) {
//   console.log(response);
//   alert(response);
// });
$(document).ready(function() {
  /* For the sticky navigation */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  /* Navigation scroll */
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%"
    }
  );

  /* Mobile navigation */
  $(".js--nav-icon").click(function() {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});
