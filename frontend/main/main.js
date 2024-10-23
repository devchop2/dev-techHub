document.querySelectorAll(".menu a").forEach((menuItem) => {
  menuItem.addEventListener("click", function (event) {
    event.preventDefault(); // 기본 링크 동작 방지

    // 메뉴에서 클릭된 항목의 data-file 속성을 가져옴
    const file = this.getAttribute("data-file");
    OpenPanel(file);
    // 해당 파일을 불러와 콘텐츠 영역에 삽입
  });
});

const OpenPanel = function (file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 오류 발생");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("content-area").innerHTML = data;
    })
    .catch((error) => {
      console.error("파일을 불러오는 중 오류가 발생했습니다:", error);
    });
};
