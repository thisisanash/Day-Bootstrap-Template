// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.gallery-grid').isotope({
    layoutMode: 'packery',
    itemSelector: '.element-item',
    getSortData: {
        name: '.name',
        symbol: '.symbol',
        number: '.number parseInt',
        category: '[data-category]',
        weight: function (itemElem) {
            var weight = $(itemElem).find('.weight').text();
            return parseFloat(weight.replace(/[\(\)]/g, ''));
        }
    }
});

// bind filter button click
$('#filters').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.filter-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});

// Initiate portfolio lightbox 
const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
});

