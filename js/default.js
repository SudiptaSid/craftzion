// Left Sidemenu
$("#leftmenu_toggle").click(function(){
    $("#cs_leftmenu").addClass("show");
});
$("#leftmenu_close").click(function(){
    $("#cs_leftmenu").removeClass("show");
});
// Right Sidemenu
$("#rightmenu_toggle").click(function(){
    $("#cs_rightmenu").addClass("show");
});
$("#rightmenu_close").click(function(){
    $("#cs_rightmenu").removeClass("show");
});
// Mobile Search
$("#search_toggle").click(function(){
    $("#cs_mobile_search").toggleClass("show");
});

// Slick Slider
$(document).ready(function() {
    // Text Verical Slider
    $(".text_slider").slick({
        dots: false,
        arrows: false,
        infinite: true,
        vertical: true,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:2000,
    });
    // Full Banner Slider
    $(".banner_slider").slick({
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:2000,
    });
    // Thumbnail Slider
    $('.thumb4_slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    // Product Page Left Image
    $('.slider_main_img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true,
        asNavFor: '.slider_nav_img',
    });
    $('.slider_nav_img').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider_main_img',
        arrows: false,
        dots:false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
    // Product Modal Image
    $('.slider_main_img1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots:false,
        fade: true,
        asNavFor: '.slider_nav_img1',
    });
    $('.slider_nav_img1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider_main_img1',
        arrows: false,
        dots:false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    });
});

// Date Countdown
var myDate = new Date();
myDate.setDate(myDate.getDate() + 3);
$("#countdown").countdown(myDate, function (event) {
    $(this).html(
        event.strftime(
            '<div class="timer-wrapper"><div class="time">%D</div><span class="text">days</span></div><div class="timer-wrapper"><div class="time">%H</div><span class="text">hours</span></div><div class="timer-wrapper"><div class="time">%M</div><span class="text">minutes</span></div><div class="timer-wrapper"><div class="time">%S</div><span class="text">seconds</span></div>'
        )
    );
});

// Mobile Filter
$("#product_filterS").click(function() {
    $("#mobile_filter").addClass("view");
});
$("#m_filter_modalC").click(function() {
    $("#mobile_filter").removeClass("view");
});

// Form Toggle
$("#forgot_pass").click(function() {
    $("#loginForm").addClass("d-none");
    $("#recoverPasswordForm").removeClass("d-none");
});
$("#forgot_cancel").click(function() {
    $("#loginForm").removeClass("d-none");
    $("#recoverPasswordForm").addClass("d-none");
});

$("#edit_update_form").click(function() {
    $("#updateDetails").removeClass("d-none");
});
$("#close_edit_form").click(function() {
    $("#updateDetails").addClass("d-none");
});

$("#edit_address_form").click(function() {
    $("#updateAddress").removeClass("d-none");
});
$("#close_address_form").click(function() {
    $("#updateAddress").addClass("d-none");
});

// Image Modal
$("#open_pro_modal").click(function() {
    $("#img_modal").addClass("show");
});
$("#close_pro_modal").click(function() {
    $("#img_modal").removeClass("show");
});