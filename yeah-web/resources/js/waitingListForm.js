$(document).ready(function() {
  $("#buttonClick").click(function() {
    var name = $("#name").val();
    var email = $("#email").val();
    var phone_number = $("#phone_number").val();

    $.ajax({
      type: "post",
      url: "https://api.theyeah.io/api/v1/waiting_list_post",
      data: {
        name: name,
        phone_number: phone_number,
        email: email
      },
      contentType: "application/x-www-form-urlencoded",
      success: function(responseData, textStatus, jqXHR) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Thanks! Happy testing 👍🏾",
          footer:
            '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        Swal.fire({
          icon: "success",
          title: "Done",
          text: "Thanks! Happy testing 👍🏾",
          footer:
            '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
        });
      }
    });
  });
});
