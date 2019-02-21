$(document).ready(function () {
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    $(".smoothscroll").on('click', function (event) {
        if (this.hash != "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
                800, function () {
                    window.location.hash = hash;
                });
        }
    });
});

$("#allProjects").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").show();
    $("#trivia").show();
    $("#train").show();
    $("#liriBot").show();
    $("#bamazon").show();
    $("#friendFinder").show()
});

$("#frontEnd").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").show();
    $("#trivia").show();
    $("#train").show();
    $("#liriBot").hide();
    $("#bamazon").hide();
    $("#friendFinder").show();
});

$("#backEnd").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").show();
    $("#trivia").show();
    $("#train").show();
    $("#liriBot").show();
    $("#bamazon").show();
    $("#friendFinder").show();
});

$("#HTML5").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").show();
    $("#trivia").show();
    $("#train").show();
    $("#liriBot").hide();
    $("#bamazon").hide();
    $("#friendFinder").show();
});

$("#nodeJS").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").hide();
    $("#trivia").hide();
    $("#train").hide();
    $("#liriBot").show();
    $("#bamazon").show();
    $("#friendFinder").show();

});


$("#mySQL").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").hide();
    $("#trivia").hide();
    $("#train").hide();
    $("#liriBot").hide();
    $("#bamazon").show();
    $("#friendFinder").hide();

});

$("#express").on("click", function (event) {
    $("#recipeWolves").show();
    $("#project1").hide();
    $("#trivia").hide();
    $("#train").hide();
    $("#liriBot").hide();
    $("#bamazon").hide();
    $("#friendFinder").show();
});

$("#firebase").on("click", function(event) {
    $("#project1").show();
    $("#train").show();
    $("#recipeWolves").hide();
    $("#trivia").hide();
    $("#liriBot").hide();
    $("#bamazon").hide();
    $("#friendFinder").hide();

})





