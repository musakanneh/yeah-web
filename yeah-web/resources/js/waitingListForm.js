$(document).ready(function(){


    $("#buttonClick").click(function(){

        alertDialogBox("");


    });





});


function alertDialogBox(folder_path) {


    var name = $("#name").val();
    var email = $("#email").val();
    var phone_number_without_code = $("#phone_number").val().toString();
    var country_code = $("#countrycode").val().toLocaleLowerCase();
    var phone_number = country_code.concat(phone_number_without_code);

    if(!folder_path == ""){

    }







    $.ajax({
        type: "POST",
        url: "../waitinglist/index.php",
        method: 'POST',
        crossDomain: true,
        crossOrigin: true,
        cache: false,
        async: true,
        data: {
            name: name,
            phone_number: phone_number,
            email: email,
        },
        contentType: "application/x-www-form-urlencoded",
        headers: {
            'Access-Control-Allow-Methods': '*',
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Headers" : "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Control-Allow-Origin": "*",
            "cache-control": "no-cache",
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        success: function(responseData, textStatus, jqXHR) {

            if(responseData == 1){
                Swal.fire({
                    title: 'Thank you!',
                    // text: 'Thanks for expressing interest in Yeah, we are excited to create a product for you.',
                    html : "<br><p style='width:400px'><hr><p><br>" +
                        "<p style='font-size: 18px;color: black'>Thanks for expressing interest in Yeah, we are excited to create a product for you.</p><br>" +
                        "<p style='font-size: 30px;color: black'>Follow us</p><br>" +
                        "\t<div class=\"col-md-12\">\n" +
                        "                    <ul class=\"social-network social-circle\">\n" +
                        "                        <li><a target=\"_blank\" href=\"https://www.facebook.com/Yeah-Generation-111408140352882/?modal=admin_todo_tour\" class=\"icoFacebook\" title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a></li>\n" +
                        "                        <li><a target=\"_blank\" href=\"https://twitter.com/YeahGeneration\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a></li>\n" +
                        "                        <li><a target=\"_blank\" href=\"https://www.instagram.com/theyeahgen/?hl=en\" class=\"icoTwitter\" title=\"Twitter\"><i class=\"fa fa-instagram\"></i></a></li>\n" +
                        "                    </ul>\t\t\t\t\n" +
                        "\t\t\t\t</div>",
                    imageUrl: folder_path+'resources/img/success.png',
                    confirmButtonColor: '#0a1ed1',
                    confirmButtonText:
                        '<i class="fa fa-thumbs-up bt-submitted"></i>',
                    imageWidth: 100,
                    imageHeight: 100,
                    imageAlt: 'completed',
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }
            else if(responseData == 2){

                Swal.fire({
                    imageUrl: folder_path+'resources/img/error.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    confirmButtonColor: '#0a1ed1',
                    title: 'Error',
                    // text: "Sorry, an error occurred. Kindly refresh your browser and resubmit the form.",
                    html : "<br><p style='width:400px'><hr><p><br>" +
                        "<p style='font-size: 18px;color: black'>Sorry, an error occurred. Kindly refresh your browser and resubmit the form.</p><br>",
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }

            else if(responseData == 5){

                Swal.fire({
                    imageUrl: folder_path+'resources/img/error.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    confirmButtonColor: '#0a1ed1',
                    title: 'Error',
                    // text: "A user with that email already exists.",
                    html : "<br><p style='width:400px'><hr><p><br>" +
                        "<p style='font-size: 18px;color: black'>A user with that email already exists.</p><br>",
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }

            else if(responseData == 6){

                Swal.fire({
                    imageUrl: folder_path+'resources/img/error.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    confirmButtonColor: '#0a1ed1',
                    title: 'Error',
                    // text: "A user with that phone number already exists.",
                    html : "<br><p style='width:400px'><hr><p><br>" +
                        "<p style='font-size: 18px;color: black'>A user with that phone number already exists.</p><br>",
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }

            else{

                Swal.fire({
                    imageUrl: folder_path+'resources/img/error.png',
                    imageWidth: 100,
                    imageHeight: 100,
                    confirmButtonColor: '#0a1ed1',
                    title: 'Incomplete',
                    html : "<br><p style='width:400px'><hr><p><br>" +
                        "<p style='font-size: 18px;color: black'>Complete the missing fields.</p><br>",
                    footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
                });
            }


        },
        error: function(jqXHR, textStatus, errorThrown) {
            Swal.fire({
                imageUrl: folder_path+'resources/img/error.png',
                imageWidth: 100,
                imageHeight: 100,
                confirmButtonColor: '#0a1ed1',
                title: 'Error',
                html : "<br><p style='width:400px'><hr><p><br>" +
                    "<p>Sorry, an error occurred. Kindly refresh your browser and resubmit the form.</p><br>",
                footer: '<a href="mailto:yeah@theyeah.io?Subject=Question" target="_top">Have questions?</a>'
            });



        }
    })

}


function redirectpage() {

    setInterval(function(){
            window.location.href = "https://www.theyeah.io";
        },
        3000);


}


