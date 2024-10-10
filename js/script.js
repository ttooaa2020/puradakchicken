//gnb
$(function () {
    AOS.init();
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

    //비주얼
    const topSlider = new Swiper(".top-slider", {
        loop: true,
        autoplay: true, //자동으로 슬라이드 적용
        speed: 1000, //기본값 300 = 0.3초

        // 캐러셀 만들기
        slidesPerView: 1, // 보여질 슬라이드 갯수

        pagination: {
            el: ".top-slider-wrap .pagination",
            clickable: true, // 페이지네이션 클릭이 되도록 만드는것
        },

        // Navigation arrows
        navigation: {
            nextEl: ".top-slider-wrap .btn-next",
            prevEl: ".top-slider-wrap .btn-prev ",
        },
    });

    // 모바일 더보기
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

    // 더보기 버튼
    const showMoreButton = document.querySelector(".menu-moer");

    const allItems = document.querySelectorAll(".menu-all-list > li");

    // 버튼 클릭 이벤트 리스너 추가
    showMoreButton.addEventListener("click", function () {
        // 각 리스트 아이템을 순회하면서 display를 "block"으로 설정
        allItems.forEach((item) => {
            item.style.display = "block";
        });

        // 클릭 후 버튼 숨기기
        showMoreButton.style.display = "none";
    });
});
