const nav = document.getElementById("nav")
const navImg = document.getElementById("nav-btn-img")
const navBtn = document.getElementById("navbtn")


navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navImg.src = "./img/icons/nav-close.svg"

  } else {
    navImg.src = "./img/icons/nav-open.svg"
  }
}


AOS.init({
  disable: 'mobile'
});