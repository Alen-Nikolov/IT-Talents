$(function () {
    var tank1 = $('img#tank1');
    var tank2 = $('img#tank2');

    window.addEventListener("keydown", function (e) {
        // space and arrow keys
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);
    var movesHorizontally = 8;
    var movesVertically = 8;
    var movesHorizontallyTank2 = tank2.position().left;
    var movesVerticallyTank2 = tank2.position().top;
    var keys = {};
    function controlsForTank1() {
        for (var i in keys) {
            console.log(i);
            if (i == 39) {
                tank1.attr("class", "rotate90");
                if (movesHorizontally <= window.innerWidth - 85) {
                    movesHorizontally += 8;
                }
                tank1.css("left", (movesHorizontally) + "px")

            }
            //down
            if (i == 40) {
                tank1.attr("class", "rotate180");
                if (movesVertically <= 545) {
                    movesVertically += 8;
                }
                tank1.css("top", (movesVertically) + "px")

            }
            //left
            if (i == 37) {
                tank1.attr("class", "rotate270");
                if (movesHorizontally >= 18) {
                    movesHorizontally -= 8;
                }
                tank1.css("left", (movesHorizontally) + "px")

            }
            //up
            if (i == 38) {
                tank1.attr("class", "rotate0");
                if (movesVertically >= 18) {
                    movesVertically -= 8;
                }
                tank1.css("top", (movesVertically) + "px")

            }
            if (i == 68) {
                tank2.attr("class", "rotate90");

                if (movesHorizontallyTank2 <= window.innerWidth - 85) {
                    movesHorizontallyTank2 += 8;
                }
                tank2.css("left", (movesHorizontallyTank2) + "px")

            }
            //down
            if (i == 83) {
                tank2.attr("class", "rotate180");

                if (movesVerticallyTank2 <= 545) {
                    movesVerticallyTank2 += 8;
                }
                tank2.css("top", (movesVerticallyTank2) + "px")

            }
            //left
            if (i == 65) {
                tank2.attr("class", "rotate270");

                if (movesHorizontallyTank2 >= 18) {
                    movesHorizontallyTank2 -= 8;
                }
                tank2.css("left", (movesHorizontallyTank2) + "px")

            }
            //up
            if (i == 87) {
                tank2.attr("class", "rotate0");

                if (movesVerticallyTank2 >= 18) {
                    movesVerticallyTank2 -= 8;
                }
                tank2.css("top", (movesVerticallyTank2) + "px")

            }
        }
    }

    $(document).on('keydown', function (event) {
        keys[event.which] = true;
        controlsForTank1();

    })
    $(document).keyup(function (e) {
        delete keys[e.which];
        controlsForTank1();
    });
})