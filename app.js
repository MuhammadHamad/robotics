// let topRow = document.querySelector(".top-row");
// let bottomRow = document.querySelector(".bottom-row");
// let logo = document.querySelector(".logo-img");

let toggle_bar = document.querySelector(".bars");
let sidebar = document.querySelector(".sidebar");

// window.addEventListener("scroll", () => {
//   // console.log(window.scrollY);
//   if (window.scrollY > 150) {
//     bottomRow.classList.add("navScroll");
//   } else {
//     bottomRow.classList.remove("navScroll");
//   }
// });

toggle_bar.addEventListener("click", function () {
  console.log(toggle_bar.firstElementChild);
  if (toggle_bar.firstElementChild.classList.contains("fa-bars")) {
    toggle_bar.firstElementChild.classList.replace("fa-bars", "fa-times");
  } else {
    toggle_bar.firstElementChild.classList.replace("fa-times", "fa-bars");
  }
  sidebar.classList.toggle("sidebaractive");
});
