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