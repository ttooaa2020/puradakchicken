// 클래스가 "all-btn-more"인 요소 선택
const showMoreButton = document.querySelector(".menu-moer");

// 클래스가 "menu-all-list"인 모든 리스트 항목 선택
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
