/** Variable Layout */
let body = $(".post-detail");
let heightWindow = window.innerHeight;
// let heightHeader = document.querySelector("header").offsetHeight;

/** Variable Cores */
/** Header */
let header = $(".header");
let hamburger = $(".menu .plate.plate1");
let mainMenu = $(".menu");
let miniMenu = $(".minimenu");
/** Navigation */
let menuNav = $(".nav .nav__menu");
let bdrop = $(".nav .menu-backdrop");
let close = $(".nav .nav__menu .btnhome .close");
/** Footer */
let toTop = $(".container .backToTop");

/** Variable Home Page */
let open = $(".slider .nav__btn .nav__btn-hover");
let btnNav = $(".post-detail .nav__btn");

/** Variable Product Page */
// let btnNavProduct = $(".product-page .bannerProduct .nav__btn");
// let contactBtn = $(".contactus .container .contactus__button .button-primary");
// console.log(contactBtn);

$(document).on(
    "click",
    ".contactus .container .contactus__button .button-primary, .service-page .ourservice .container .tvtk .tvtk__right .button-primary.black",
    function (e) {
        e.preventDefault();
        $(".popup-button").addClass("active");
        $(body).addClass("popup-open");
    }
);
// $(contactBtn).on("click", function (e) {
//     e.preventDefault();
//     $(".popup-button").addClass("active");
//     $(body).addClass("popup-open");
// });
let closeContactBtn = $(
    ".popup-button .info__wrap .info__wrap.container .close"
);
$(closeContactBtn).on("click", function () {
    $(".popup-button").removeClass("active");
    $(body).removeClass("popup-open");
});
/** Variable Project Page */
let btnPaging = $(".paging-btn span");

function toggleNavigation() {
    $(menuNav).toggleClass("active");
    $(bdrop).toggleClass("active");
    $(body).toggleClass("is-show");
    $(btnNav).toggleClass("active");
    //$(btnNavProduct).toggleClass("active");
    $(hamburger).toggleClass("active");
}
function quitNavigation() {
    $(menuNav).removeClass("active");
    $(bdrop).removeClass("active");
    $(body).removeClass("is-show");
    $(btnNav).removeClass("active");
    //$(btnNavProduct).removeClass("active");
    $(hamburger).removeClass("active");
}

$(document).on(
    "click",
    ".post-detail .nav__btn .nav__btn-hover, .menu .plate.plate1 ",
    function () {
        toggleNavigation();
    }
);

$(bdrop).on("click", function () {
    quitNavigation();
});
$(close).on("click", function () {
    quitNavigation();
});

$(toTop).on("click", function () {
    window.scrollTo({
        top: 0,
    });
});

//active slider
function addHeader(height) {
    let scrollY = window.pageYOffset;
    let heightHeader = document.querySelector(".header").offsetHeight;
    if (scrollY > height - heightHeader - heightHeader) {
        $(mainMenu).addClass("active");
        $(miniMenu).addClass("active");
        $(hamburger).addClass("hidden");
        $(header).addClass("opacity");
    } else {
        $(mainMenu).removeClass("active");
        $(miniMenu).removeClass("active");
        $(hamburger).removeClass("hidden");
        $(header).removeClass("opacity");
    }
}

$(document).ready(function () {
    $(document).on("scroll", function () {
        if ($(".homepage").length != 0) {
            let heightBanner =
                document.querySelector(".homepage .slider").offsetHeight;
            addHeader(heightBanner);
        } else if ($(".product-page").length != 0) {
            let heightBanner = document.querySelector(
                ".product-page .bannerProduct"
            ).offsetHeight;
            addHeader(heightBanner);
        } else if ($(".allproduct-page").length != 0) {
            let heightBanner = document.querySelector(
                ".allproduct-page .bannerProduct"
            ).offsetHeight;
            addHeader(heightBanner);
        } else if ($(".service-page").length != 0) {
            let heightBanner = document.querySelector(
                ".service-page .ourservice"
            ).offsetHeight;
            addHeader(heightBanner);
        } else if ($(".projects-page").length != 0) {
            let heightBanner = document.querySelector(
                ".projects-page .bannerProject"
            ).offsetHeight;
            addHeader(heightBanner);
        } else if ($(".news-page").length != 0) {
            let heightBanner = document.querySelector(
                ".news-page .bannerNew"
            ).offsetHeight;
            let heightHeader = document.querySelector(".header").offsetHeight;
            addHeader(heightBanner - heightHeader + 10);
        }
    });
});

let $homeSlider = $(".slider__list");
$homeSlider.flickity({
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 5000,
    pauseAutoPlayOnHover: false,
});
let $sliderList = $(".productWrap");

let $productSlider1 = $("#slider-prod1");
let $productSlider2 = $("#slider-prod2");
let $productSlider3 = $("#slider-prod3");
let $productSlider4 = $("#slider-prod4");
let $productSlider5 = $("#slider-prod5");
$productSlider1.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
});
$productSlider2.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
});
$productSlider3.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
});
$productSlider4.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
});
$productSlider5.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
});
//button productpage

$(document).on(
    "click",
    ".product-page .listProduct .product .productWrap .product__control product__btn.prev",
    function () {
        let $id_slider = $(this).grandparent();
        console.log($id_slider);
    }
);
// $(function () {
//     $($btnSlider).on("click", function(){

// })
$(
    ".product-page .listProduct .product .productWrap .product__control .product__btn.prev"
).on("click", function () {
    $productSlider1.flickity("previous");
});
$(
    ".product-page .listProduct .product .productWrap .product__control .product__btn.next"
).on("click", function () {
    $productSlider1.flickity("next");
});
let imgDetailProduct = document.querySelector(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-slider .detail__left-slider-item a img"
);

let $detailProduct = $(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-slider"
);
$detailProduct.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    //draggable: false,
    prevNextButtons: false,
    pageDots: false,
    on: {
        change: function (index) {
            let number = $(
                ".detailproduct-page .detailProduct .container .detail__left .detail__left-valimg span"
            );
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(1));
        },
    },
});

$(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-button .btn.prev"
).on("click", function () {
    $detailProduct.flickity("previous");
});

$(
    ".detailproduct-page .detailProduct .container .detail__left .detail__left-button .btn.next"
).on("click", function () {
    $detailProduct.flickity("next");
});

var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;
        for (var i = 0; i < numNodes; i++) {
            figureEl = thumbElements[i]; // <figure> element
            if (figureEl.nodeType !== 1) {
                continue;
            }
            linkEl = figureEl.children[0]; // <a> element
            size = linkEl.getAttribute("data-size").split("x");
            item = {
                src: linkEl.getAttribute("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
            };
            if (figureEl.children.length > 1) {
                item.title = figureEl.children[1].innerHTML;
            }
            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute("src");
            }
            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        var eTarget = e.target || e.srcElement;
        var clickedListItem = closest(eTarget, function (el) {
            return el.tagName && el.tagName.toUpperCase() === "FIGURE";
        });
        if (!clickedListItem) {
            return;
        }
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;
        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }
            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }
        if (index >= 0) {
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};
        if (hash.length < 5) {
            return params;
        }
        var vars = hash.split("&");
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split("=");
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }
        return params;
    };
    var openPhotoSwipe = function (
        index,
        galleryElement,
        disableAnimation,
        fromURL
    ) {
        var pswpElement = document.querySelectorAll(".pswp")[0],
            gallery,
            options,
            items;
        items = parseThumbnailElements(galleryElement);
        options = {
            galleryUID: galleryElement.getAttribute("data-pswp-uid"),
            getThumbBoundsFn: function (index) {
                var thumbnail = items[index].el.getElementsByTagName("img")[0], // find thumbnail
                    pageYScroll =
                        window.pageYOffset ||
                        document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width,
                };
            },
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
        };
        if (fromURL) {
            if (options.galleryPIDs) {
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }
        if (isNaN(options.index)) {
            return;
        }
        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }
        gallery = new PhotoSwipe(
            pswpElement,
            PhotoSwipeUI_Default,
            items,
            options
        );
        gallery.init();
    };
    var galleryElements = document.querySelectorAll(gallerySelector);
    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(
            hashData.pid,
            galleryElements[hashData.gid - 1],
            true,
            true
        );
    }
};

// initPhotoSwipeFromDOM(".newsDetail-page .container .newDetail .content");
let $productAnother = $(".detailproduct-page .anotherProduct .product__slider");
// let $allProductSlider = $("#allproduct_slider");
$productAnother.flickity({
    cellAlign: "left",
    contain: true,
    //wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
});
$(".detailproduct-page .anotherProduct .product__button .btn.prev").on(
    "click",
    function () {
        $productAnother.flickity("previous");
    }
);

$(".detailproduct-page .anotherProduct .product__button .btn.next").on(
    "click",
    function () {
        $productAnother.flickity("next");
    }
);

$(btnPaging).on("click", function () {
    $(btnPaging).removeClass("active");
    $(this).toggleClass("active");
});
// GSAP
// let openNav = new gsap.timeline();

// openNav.staggerFromTo()
