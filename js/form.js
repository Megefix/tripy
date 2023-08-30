const wrapper = document.querySelector(".modal-wrapper");
const btn = document.querySelectorAll(".modal__btn");
const inputs = document.querySelectorAll(".modal__int");
const logIn = document.querySelectorAll(".contacts__btn");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = function () {
  wrapper.classList.add("hidden");
  document.body.classList.remove("no-scroll");
};
//Send button
btn.forEach(function (item) {
  item.onclick = function () {
    for (int of inputs) {
      if (int.value === "") {
        alert("Ви не заповнили форму");
        break;
      } else {
        alert("Вашу форму надіслано");
        break;
      }
    }
    inputs.forEach(function (item) {
      item.value = "";
    });
  };
});
//Form appearance
logIn.forEach(function (item) {
  item.onclick = function () {
    wrapper.classList.remove("hidden");
    document.body.classList.add("no-scroll");
    nav.classList.remove("mobile-nav--open");
    menuIcon.classList.remove("nav-icon--active");
    fade.classList.remove("mobile-nav-fade--open");
  };
});
