// .ham가 클릭이 되면
// .gnb에 .on 이 적용되도록 작업 진행

const $ham = document.querySelector(".ham");
const $gnb = document.querySelector(".gnb");

$ham.addEventListener("click", () => {
  $gnb.classList.toggle("on");
});

// 모바일, pc의 gnb가 따로 있는 경우( 원소스가 기준이 되기때문에
// 반복이 되어지는 것이 있으면 자바스크립트로 쏴준다.)
// const $gnb_suce = ` <ul>
// <li>
//   <a href="#none">경기생활문화센터</a>
//   <ul class="sub">
//     <li><a href="#none">센터소개</a></li>
//     <li><a href="#none">조직도</a></li>
//     <li><a href="#none">사업안내</a></li>
//     <li><a href="#none">오시는 길</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#none">경기도생활문화</a>
//   <ul class="sub">
//     <li><a href="#none">센터소개</a></li>
//     <li><a href="#none">조직도</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#none">기록자료</a>
//   <ul class="sub">
//     <li><a href="#none">센터소개</a></li>
//     <li><a href="#none">조직도</a></li>
//     <li><a href="#none">사업안내</a></li>
//     <li><a href="#none">사업안내</a></li>
//     <li><a href="#none">오시는 길</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#none">웹진</a>
//   <ul class="sub">
//     <li><a href="#none">센터소개</a></li>
//     <li><a href="#none">조직도</a></li>
//     <li><a href="#none">사업안내</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#none">소통</a>
//   <ul class="sub">
//     <li><a href="#none">센터소개</a></li>
//     <li><a href="#none">조직도</a></li>
//     <li><a href="#none">사업안내</a></li>
//     <li><a href="#none">오시는 길</a></li>
//   </ul>
// </li>
// <li>
//   <a href="#none">경기상상캠퍼스</a>
//   <ul class="sub">
//     <li><a href="#none">센터소개</a></li>
//     <li><a href="#none">조직도</a></li>
//   </ul>
// </li>
// </ul>`;
// const $gnb_m = document.querySelector(".gnb_m");

// $gnb.innerHTML = $gnb_suce;
// $gnb_m.innerHTML = $gnb_suce;
