//gnb
$(function () {
    const $window = $(window);
    const $header = $("header");
    const $menu = $(".gnb>li");
    const $submenu = $(".submenu");
    const duration = 400;
    const duration2 = 150;

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

    // 메뉴 리스트 버튼
    const $btn = $(".meun-btn > li");
    const $btn2 = $(".all-menu-btn > li");

    btnAction(0);
    btn2Action(0);

    $btn.on("click", function () {
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
    });

    function btnAction(index) {
        $btn.removeClass("on");
        $btn.eq(index).addClass("on");
    }

    // 서브
    $btn2.on("click", function () {
        $(this).siblings().removeClass("on");
        $(this).toggleClass("on");
    });

    function btn2Action(index) {
        $btn2.removeClass("on");
        $btn2.eq(index).addClass("on");
    }
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
