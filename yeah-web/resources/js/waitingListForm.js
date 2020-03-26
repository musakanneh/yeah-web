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
                        title: 'Done',
                        text: 'Thank you signing up',
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }
                else if(responseData == 2){

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: "The error it's on our side :)",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }

                else if(responseData == 5){

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: "That email is already used :)",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }

                else if(responseData == 6){

                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: "That phone number already used :)",
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }

                else{

                    Swal.fire({
                        icon: 'Error',
                        title: 'Incomplete',
                        text: 'Missing fields',
                        footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                    });
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occured',
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }
        })



    });


});


