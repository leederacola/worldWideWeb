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

/**

var answer = "IEHOVA";
var altAnswer = "RYAN";
var guess = "";     <h3 id="name">The Name of God is: (user answer built here)</h3>
user clicks card
on click
    if card id = yes
        card h1 inner text is added to string guess
        if (guess === answer || guess === altAnswer)
            return home
   else
        sean connery dies
        reload 404
--------------------------------------------
<div class="card"id="yes">
        <div class="card-body text-center">
            <h1>I</h1>
        </div>
---------------------------------------------
*/
// select cards on 404
var answer = "IEHOVA";
var altAnswer = "RYAN";
var guess = ""; //  <h3 id="name">The Name of God is: (user answer built here)</h3>

$("#404 > .yes").click(function () {      
    var letter = "";
    //letter = "x";
    letter = this.innerText;
    letter = letter.substring(0, 1);
    guess = guess + letter;  
    console.log("guess = " + guess);
    if (guess == altAnswer || guess == answer) {
        alert("we did it!");
    }

})   

