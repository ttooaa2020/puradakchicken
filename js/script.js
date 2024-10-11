//gnb
AOS.init();
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
    const $btn = $(".meun-btn > li > button");
    const $btn2 = $(".all-menu-btn > li > button");

    btnAction(0);
    btn2Action(0);

    $btn.on("click", function () {
        $(this).toggleClass("on");
        $(this).closest("li").siblings().find("button").removeClass("on");
    });

    function btnAction(index) {
        $btn.removeClass("on");
        $btn.eq(index).addClass("on");
    }

    // 서브
    $btn2.on("click", function () {
        $(this).toggleClass("on");
        $(this).closest("li").siblings().find("button").removeClass("on");
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

    // 메인탭
    // 대상을 변수에 저장
    const $tabMenu = $(".tab-menu > li");
    const $tabCon = $(".tab-con-item");

    tabAction(0);

    // 탭메뉴를 클릭 했을때
    $tabMenu.on("click", function (e) {
        // a의 기본 동작막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tabAction(tabIdx);
    });

    // 공통의 동작을 함수로 정의
    function tabAction(index) {
        // 탭메뉴 활성화
        $tabMenu.removeClass("on");
        $tabMenu.eq(index).addClass("on");

        // 인덱스에 해당하는 $tabCon 보이기
        $tabCon.hide();
        $tabCon.eq(index).show();
    }

    // 서브탭
    // 대상을 변수에 저장
    const $tabMenu2 = $(".all-menu-btn > li");
    const $tabCon2 = $(".all-tab-item");

    tab2Action(0);

    // 탭메뉴를 클릭 했을때
    $tabMenu2.on("click", function (e) {
        // a의 기본 동작막기
        e.preventDefault();

        // 선택한 탭메뉴의 인덱스 구하기
        const tabIdx = $(this).index();
        console.log(tabIdx);

        tab2Action(tabIdx);
    });

    // 공통의 동작을 함수로 정의
    function tab2Action(index) {
        // 탭메뉴 활성화
        $tabMenu2.removeClass("on");
        $tabMenu2.eq(index).addClass("on");

        // 인덱스에 해당하는 $tabCon 보이기
        $tabCon2.hide();
        $tabCon2.eq(index).show();
    }

    // 더보기 버튼
    const MoreButton = document.querySelector(".menu-more");
    const allItems = document.querySelectorAll(".menu-all-list > li");

    // 버튼 클릭 이벤트 리스너 추가
    MoreButton.addEventListener("click", function () {
        // 각 리스트 아이템을 순회하면서 display를 "block"으로 설정
        allItems.forEach((item) => {
            item.style.display = "block";
        });

        // 클릭 후 버튼 숨기기
        MoreButton.style.display = "none";
    });
});
