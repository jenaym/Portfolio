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

    const projects = [
        {
            id: "liquidAssets",
            name: "Liquid Assets",
            pic: "assets/images/liquidAssets.png",
            deployedLink: "https://tranquil-meadow-47203.herokuapp.com/",
            github: "https://github.com/jenaym/Project-3"
        },
        {
            id: "recipeWolves",
            name: "Recipe Wolves",
            pic: "assets/images/recipeWolves.png",
            deployedLink: "https://peaceful-eyrie-53353.herokuapp.com/",
            github: "https://github.com/jenaym/Project-2"
        },
        {
            id: "project1",
            name: "IDK You Decide",
            pic: "assets/images/Project1.png",
            deployedLink: "https://zhangjt9317.github.io/",
            github: "https://github.com/Zhangjt9317/Team-7-First-Web-Dev-Project"
        },
        {
            id: "trivia",
            name: "Trivia",
            pic: "assets/images/trivia.png",
            deployedLink: "https://zhangjt9317.github.io/Team-7-First-Web-Dev-Project/",
            github: "https://github.com/jenaym/TriviaGame"
        },
        {
            id: "train",
            name: "Train Scheduler",
            pic: "assets/images/train.png",
            deployedLink: "https://jenaym.github.io/Firebase-Assignment.Train-Scheduler/",
            github: "https://github.com/jenaym/Firebase-Assignment.Train-Scheduler"
        },
        {
            id: "liriBot",
            name: "Liri-Bot",
            pic: "assets/images/node.png",
            deployedLink: "https://jenaym.github.io/liri-node-app",
            github: "https://github.com/jenaym/liri-node-app"
        },
        {
            id: "bamazon",
            name: "Bamazon",
            pic: "assets/images/bamazon.png",
            deployedLink: "https://github.com/jenaym/Node.js-MySQL",
            github: "https://github.com/jenaym/Node.js-MySQL"
        },
        {
            id: "friendFinder",
            name: "Friend Finder",
            pic: "assets/images/friendFinder.png",
            deployedLink: "https://afternoon-oasis-17744.herokuapp.com/",
            github: "https://github.com/jenaym/FriendFinder"
        }

    ]

    // const deployedLink = ["https://tranquil-meadow-47203.herokuapp.com/", "https://peaceful-eyrie-53353.herokuapp.com/", "https://zhangjt9317.github.io/Team-7-First-Web-Dev-Project/"]
    
    for (var i = 0; i < projects.length; i++) {
        var col = $("<div>");
        col.addClass("col-sm-3 col-md-3 col-lg-3");
            var work = $("<div>");
            work.addClass("work");
            work.attr("id", projects[i].id);

                var pic = $("<img>").addClass("image");
                pic.attr("src", projects[i].pic);
                pic.attr("style", "width:100%");
        // , ("alt", projects[i].id), ("style", "width:100%"));
                var text = $("<div>").addClass("text");
                var title = "<h3>" + projects[i].name + "</h3>"
                text.append(title);
            
                var overlay = $("<div>").addClass("overlay");
                    var link = $("<a>").attr("href", projects[i].deployedLink);
                    link.append("<i class='fa fa-link' aria-hidden='true'></i>");
                    
                overlay.append(link);
                
                var githubLink = "<a href=" + projects[i].github + ">" + projects[i].name + " GitHub Repo</a>";

            work.append(pic, text, overlay, githubLink);

        col.append(work);
        $("#projectRow").append(col);
    }
});

// external js: isotope.pkgd.js

// init Isotope
var iso = new Isotope( '.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
  });
  
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    // numberGreaterThan50: function( itemElem ) {
    //   var number = itemElem.querySelector('.number').textContent;
    //   return parseInt( number, 10 ) > 50;
    // },
    // show if name ends with -ium
    ium: function( itemElem ) {
      var name = itemElem.querySelector('.name').textContent;
      return name.match;
    }
  };
  
  // bind filter button click
  var filtersElem = document.querySelector('.filters-button-group');
  filtersElem.addEventListener( 'click', function( event ) {
    // only work with buttons
    if ( !matchesSelector( event.target, 'button' ) ) {
      return;
    }
    var filterValue = event.target.getAttribute('data-filter');
    // use matching filter function
    filterValue = filterFns[ filterValue ] || filterValue;
    iso.arrange({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  var buttonGroups = document.querySelectorAll('.button-group');
  for ( var i=0, len = buttonGroups.length; i < len; i++ ) {
    var buttonGroup = buttonGroups[i];
    radioButtonGroup( buttonGroup );
  }
  
  function radioButtonGroup( buttonGroup ) {
    buttonGroup.addEventListener( 'click', function( event ) {
      // only work with buttons
      if ( !matchesSelector( event.target, 'button' ) ) {
        return;
      }
      buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
      event.target.classList.add('is-checked');
    });
  }
  
// (function($) {

//     'use strict';
  
//     var $filters = $('.filter [data-filter]'),
//       $boxes = $('.boxes [data-color]');
  
//     $filters.on('click', function(e) {
//       e.preventDefault();
//       var $this = $(this);
      
//       $filters.removeClass('active');
//       $this.addClass('active');
  
//       var $filterColor = $this.attr('data-filter');
  
//       if ($filterColor == 'all') {
//         $boxes.removeClass('is-animated')
//           .fadeOut().promise().done(function() {
//             $boxes.addClass('is-animated').fadeIn();
//           });
//       } else {
//         $boxes.removeClass('is-animated')
//           .fadeOut().promise().done(function() {
//             $boxes.filter('[data-color = "%blue%"]')
//             // $boxes.filter('[data-color = "' + $filterColor + '"]')
//               .addClass('is-animated').fadeIn();
//           });
//       }
//     });
  
//   })(jQuery);

// $("#allProjects").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").show();
//     $("#trivia").show();
//     $("#train").show();
//     $("#liriBot").show();
//     $("#bamazon").show();
//     $("#friendFinder").show()
// });

// $("#frontEnd").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").show();
//     $("#trivia").show();
//     $("#train").show();
//     $("#liriBot").hide();
//     $("#bamazon").hide();
//     $("#friendFinder").show();
// });

// $("#backEnd").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").show();
//     $("#trivia").show();
//     $("#train").show();
//     $("#liriBot").show();
//     $("#bamazon").show();
//     $("#friendFinder").show();
// });

// $("#HTML5").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").show();
//     $("#trivia").show();
//     $("#train").show();
//     $("#liriBot").hide();
//     $("#bamazon").hide();
//     $("#friendFinder").show();
// });

// $("#nodeJS").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").hide();
//     $("#trivia").hide();
//     $("#train").hide();
//     $("#liriBot").show();
//     $("#bamazon").show();
//     $("#friendFinder").show();

// });


// $("#mySQL").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").hide();
//     $("#trivia").hide();
//     $("#train").hide();
//     $("#liriBot").hide();
//     $("#bamazon").show();
//     $("#friendFinder").hide();

// });

// $("#express").on("click", function (event) {
//     $("#recipeWolves").show();
//     $("#project1").hide();
//     $("#trivia").hide();
//     $("#train").hide();
//     $("#liriBot").hide();
//     $("#bamazon").hide();
//     $("#friendFinder").show();
// });

// $("#firebase").on("click", function(event) {
//     $("#project1").show();
//     $("#train").show();
//     $("#recipeWolves").hide();
//     $("#trivia").hide();
//     $("#liriBot").hide();
//     $("#bamazon").hide();
//     $("#friendFinder").hide();

// })





