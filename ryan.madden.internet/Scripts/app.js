﻿//........................resume....................................
$("#infoExpand").hide();
$("#eduExpand").hide();
$("#expExpand").hide();
$("#otherExpand").hide();


// got to be more efficent way for this............other than function for every element
$("#info").click(function () {
    $("#infoExpand").slideToggle(1000);
})
$("#edu").click(function () {
    $("#eduExpand").slideToggle(1000);
})
$("#exp").click(function () {
    $("#expExpand").slideToggle(1000);
})
$("#other").click(function () {
    $("#otherExpand").slideToggle(1000);
})


$("#expandBtn").click(function () {
    $("#infoExpand").slideToggle(1000);
    $("#eduExpand").slideToggle(1000);
    $("#expExpand").slideToggle(1000);
    $("#otherExpand").slideToggle(1000);
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