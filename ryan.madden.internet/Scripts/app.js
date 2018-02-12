//........................resume....................................

$(".resumeToggle").hide();

$(".resumeToggle").cick(function () {  
    $(".resumeToggle").slideToggle(1000);
})



//...............404.........................


var answer = "IEHOVA";
var altAnswer = "RYAN";
var guess = ""; //  ID updateName


$("#pathPic").hide();
$("#footSteps").hide();
$("#name").hide();
$("#404").hide();
$("#updateName").hide();
$("#fail").hide();
$("#pass").hide();

$(document).ready(function ()
{   
    $("#pathPic").slideDown(5000);
    $("#footSteps").fadeIn(10000);
    $("#name").fadeIn(10000);
    $("#404").fadeIn(10000);  
    $("#updateName").fadeIn(10000);

    $("#404 > .yes").click(function () {
            var letter = "";
            letter = this.innerText;
            letter = letter.substring(0, 1);
            guess = guess + letter;

            $("#updateName").text(guess);


            console.log("guess = " + guess);
            if (guess == altAnswer || guess == answer) {
                $("#puzzle").fadeOut(1000);
                $("#pass").fadeIn(5000);
                guess = "";
            }
    });
    $("#404 > .no").click(function () {
        $("#puzzle").fadeOut(1000);
        $("#fail").fadeIn(5000);
        guess = "";
    })
   

});