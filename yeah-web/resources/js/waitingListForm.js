$(document).ready(function(){


    $("#buttonClick").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var phone_number = $("#phone_number").val();

        // $.post("http://api.theyeah.io/api/v1/waiting_list_post",
        //     {
        //         name: name,
        //         phone_number: phone_number,
        //         email: email,
        //     },
        //     function(data,status){
        //         alert("I'm clikced");
        //         alert("Data: " + data + "\nStatus: " + status);
        //     });

        $.ajax({
            type: "GET",
            url: "https://www.theyeah.io/waitinglist",
            data: {
                name: name,
                phone_number: phone_number,
                email: email,
            },
            contentType: "application/x-www-form-urlencoded",
            success: function(responseData, textStatus, jqXHR) {

                if(responseData == 1){
                    Swal.fire({
                        icon: 'success',
                        title: 'Completed',
                        text: 'Thanks for expressing interest in Yeah, we are excited to create a product for you',
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }
                else if(responseData == 2){

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: "Sorry, an error occurred. Kindly refresh your browser and resubmit the form:)",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }

                else if(responseData == 5){

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: "A user with that email already exists :)",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }

                else if(responseData == 6){

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: "A user with that phone number already exists :)",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }

                else{

                    Swal.fire({
                        icon: 'Error',
                        title: 'Incomplete',
                        text: "Complete the missing fields",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Sorry, an error occurred. Kindly refresh your browser and resubmit the form:)',
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }
        })



    });


});


