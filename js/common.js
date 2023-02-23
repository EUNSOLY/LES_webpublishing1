const $ham = document.querySelector(".ham");
const $header = document.querySelector(".hd_wrap");
const $tap_key = document.querySelectorAll(".tap_key");
const $tap_img = document.querySelectorAll(".img_box > img");
console.log($tap_key);
console.log($tap_img);

// 햄버거 버튼 토굴
$ham.addEventListener("click", () => {
  $header.classList.toggle("on");
});

// 배열 돌아다니면서 add, remove 진행
$tap_key.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    $tap_key.forEach((i) => {
      console.log(i);
      i.classList.remove("on");
    });
    $tap_img.forEach((a) => {
      a.classList.remove("on");
      console.log(a);
    });
    $tap_key[idx].classList.add("on");
    $tap_img[idx].classList.add("on");
  });
});
