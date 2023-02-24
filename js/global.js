const $ham = document.querySelector(".ham");

$ham.addEventListener("click", (e) => {
  document.body.classList.toggle("on");
  $gnb.classList.toggle("on");
});

const $btns = document.querySelectorAll(".btns>button");
const $imgs = document.querySelector(".imgs");
console.log($btns);
console.log($imgs);

// 탭메뉴 이미지태그 집어넣는 방식으로 사용
$btns.forEach((item, idx) => {
  item.addEventListener("click", () => {
    // console.log(idx);
    // console.log(item);
    $imgs.innerHTML = `<img src="./img/image${idx + 1}.jpg" alt="1" />`;
  });
});
