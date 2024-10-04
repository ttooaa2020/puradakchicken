//gnb
$(function () {
    const $window = $(window);
    const $header = $("header");
    const $menu = $(".gnb>li");
    const $submenu = $(".submenu");
    const duration = 400;
    const duration2 = 150;

    // gnb
    $menu.on("mouseenter", function () {
        $(this).addClass("on");
        $header.addClass("active");
        $submenu.stop().slideDown(duration);
    });

    $menu.on("mouseleave", function () {
        $(this).removeClass("on");
        $header.removeClass("active");
        $submenu.stop().slideUp(duration2);
    });

    $window.on("wheel", function (e) {
        e.originalEvent.wheelDelta > 0 ? $header.removeClass("hide") : $header.addClass("hide");
    });
});

// 모바일 메뉴
const btnMenu = document.querySelector(".btn-m");
const mobileMenu = document.querySelector(".mobile-menu");
const btnClose = document.querySelector(".btn-close");

btnMenu.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

// 대상 .classList.remove('클래스명)//

btnClose.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});
