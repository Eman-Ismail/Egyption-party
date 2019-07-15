$(document).ready(function() {

    $(".open").click(
        function() {
            $('.sidebar').animate({ width: '250px' }, 500, function() {
                $(".sidebar").css("display", "block");
            });
            $(this).animate({ marginLeft: '260px' }, 500);
        }
    )

    $(".closebtn").click(
        function() {
            $('.sidebar').animate({ width: '0' }, 500, function() {
                $(".sidebar").css("display", "none");
            });
            $(".open").animate({ marginLeft: '6px' }, 500);
        })

    //================singer=========================================================



    $("h1").click(function() {

        $(this).next().slideDown(500)
        $(".singer-disc").not($(this).next()).slideUp(500);

    })

    //============================count dwon timer===============================================

    var day = document.getElementById("timer-day"),
        hour = document.getElementById("timer-hour"),
        minute = document.getElementById("timer-minute"),
        sec = document.getElementById("timer-sec");


    function countdown() {
        var now = new Date();
        var eventDate = new Date(2019, 11, 30);

        var currentTiime = now.getTime();

        var eventTime = eventDate.getTime();

        var remTime = eventTime - currentTiime;

        var s = Math.floor(remTime / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24) - 30;

        h %= 24;
        m %= 60;
        s %= 60;

        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        day.innerHTML = "<h3>" + d + " D" + "</h3>";
        day.innerHTML = "<h3>" + d + " D" + "</h3>";

        hour.innerHTML = "<h3>" + h + " h" + "</h3>";
        minute.innerHTML = "<h3>" + m + " m" + "</h3>";
        sec.innerHTML = "<h3>" + s + " s" + "</h3>";

        setTimeout(countdown, 1000);
    }

    countdown();


    /*				
    var nowDate = new Date();
    	d = nowDate.getDay(1),
     h = nowDate.getHours(),
    	m	=nowDate.getMonth(9),	
     s = nowDate.getSeconds();
	
    console.log(d)
    */
    //=============================================================================
    var text = document.getElementById("my-textarea");
    var max = document.getElementById("max");

    text.onkeyup = function() {

        if (this.value.length < 100) {
            max.innerHTML = 100 - this.value.length;
        } else {
            max.innerHTML = "your available character finished";
        }

    }

    //=============================================================

    $("a").click(function() {

        var href = $(this).attr("href");
        var offset = $(href).offset().top;

        $("body").animate({ scrollTop: offset }, 1000)

    })


    $("#btn").click(function() {

        $(".rr").nextAll().not(".rr").css({ "color": "red" });

    })










}); //Ready fun