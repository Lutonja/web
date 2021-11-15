setInterval(connected, 1000);

function connected(){
    switch (navigator.onLine){
        case true:
            $("#on").fadeOut(1000);
                $("#on").css("background-color", "green");
                $("#st").css("background-color", "rgb(217, 245, 215)");
                $("#on").fadeIn(1000);
                document.getElementById("status").innerHTML = "online";
                break;
        case false:
            $("#on").fadeOut(1000);
                $("#on").css("background-color", "red");
                $("#on").fadeIn(1000);
                $("#st").css("background-color", "rgb(245, 224, 215)");
                document.getElementById("status").innerHTML = "offline";
                break;
        default:
            $("#on").fadeOut(1000);
                $("#on").css("background-color", "rgb(148, 147, 147)");
                $("#on").fadeIn(1000);
                $("#st").css("background-color", "rgb(148, 147, 147)");
                document.getElementById("status").innerHTML = "status";
    }
}

    $("#leo").click(function(){
        $(this).fadeOut(500);
        $("#p1").fadeOut(500);
    });

