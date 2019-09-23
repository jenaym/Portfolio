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


    // external js: isotope.pkgd.js

    // init Isotope
    var iso = new Isotope('.grid', {
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    // filter functions
    var filterFns = {
        // show if name ends with -ium
        nameMatch: function (itemElem) {
            var name = itemElem.querySelector('.name').textContent;
            return name.match;
        }
    };

    // bind filter button click
    var filtersElem = document.querySelector('.filters-button-group');
    filtersElem.addEventListener('click', function (event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        var filterValue = event.target.getAttribute('data-filter');
        // use matching filter function
        filterValue = filterFns[filterValue] || filterValue;
        iso.arrange({ filter: filterValue });
    });

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll('.button-group');
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
        var buttonGroup = buttonGroups[i];
        radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
        buttonGroup.addEventListener('click', function (event) {
            // only work with buttons
            if (!matchesSelector(event.target, 'button')) {
                return;
            }
            buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
            event.target.classList.add('is-checked');
        });
    }

});