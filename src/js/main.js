var $overlayer = $(".overlayer");
var length;
var $current;
/////////////
//EXAMPLE 1//
/////////////

$('body').on('click', '.container-rocket-simple .img-rocket', function() {
    var $current = $(this);
    var src = $(this).attr("src");
    var srcHd = $(this).data("hd");
    // J'insere
    $(".light-box .pic").html("<img src=" + srcHd + " class= img-rocket alt= >");
    $overlayer.fadeIn(500);
    $('.btn-next, .btn-prev').addClass('simple');
});

$('.btn-close,.overlayer').click(function(){
    $overlayer.fadeOut(500);

});
////////////////
// //EXAMPLE 2//
// /////////////

$("body").on("click",'.container-rocket-gallery .img-rocket', function(){
    length = $('.container-rocket .img-rocket').length;
    $current = $(this);

    var src = $(this).attr("src");
    var srcHd = $(this).data("hd");
    $('.btn-next, .btn-prev').removeClass('simple');

    $(".light-box .pic").html("<img src=" + srcHd + " class= img-rocket alt= >");
    $overlayer.fadeIn(500);
});

$overlayer.click(function(){
    $(this).fadeOut(500);
});

////////////////
// //EXAMPLE 3//
// /////////////

$("body").on("click",'.container-rocket-float .img-rocket', function(){
    length = $('.container-rocket .img-rocket').length;
    $current = $(this);

    var src = $(this).attr("src");
    var srcHd = $(this).data("hd");
    $('.btn-next, .btn-prev').removeClass('simple');

    $(".light-box .pic").html("<img src=" + srcHd + " class= img-rocket alt= >");
    $overlayer.fadeIn(500);
});

$overlayer.click(function(){
    $(this).fadeOut(500);
});


var galleries = [];
var currentGallery;
var newGallery;
var $imgs;
$('[data-rocket]').each(function(){
    currentGallery = $(this).data('rocket');
    $imgs = $('[data-rocket="'+currentGallery+'"] img');
    galleries.push({
        dataRocket: currentGallery,
        imgs: $imgs
    });
});
//
// var wtf = $('[data-rocket]').map(function(){
//     return this;
// });

console.log(galleries);
console.log(wtf);


////NEXT////

    $(".btn-next").click(function(e) {
        e.stopPropagation();
        currentSrc = $('.pic>img').attr('src');
        $current = $('[data-hd="'+ currentSrc +'"]');

        var $next = $current.next();
        if ($next.length == 0) {
            $next = $('.container-rocket-gallery img').first();
        }
        var srcHdNext = $next.data("hd");
        $(".light-box .pic").html("<img src=" + srcHdNext + " class= img-rocket alt= >");
    });

    ////PREV////

        $(".btn-prev").click(function(e) {
            e.stopPropagation();
            currentSrc = $('.pic>img').attr('src');
            $current = $('[data-hd="'+ currentSrc +'"]');
            var $prev = $current.prev();
            if ($prev.length == 0) {
                $prev = $('.container-rocket-gallery img').last();
            }
            var srcHdPrev = $prev.data("hd");
            $(".light-box .pic").html("<img src=" + srcHdPrev + " class= img-rocket alt= >");
        });

// GOGO team rocket ;)
// Meerchi!! On zyva les potos !! Youpiie!!
