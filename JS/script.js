let menu = document.querySelector(".menu");
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let s3 = document.querySelector(".s3");
let menu_box = document.querySelector(".menu-box");

//Цикл фор создан для того чтобы два keyframes не сработали сразу и чтобы код не поломался!!!
//Я разделил кнопку по логике на две основные и на две подосновные части (всего 4 части)
menu.onclick = () => {
  for (let item of menu_box.classList) {
    if (item == "menu-move") {
      menu_box.classList.toggle("menu-move");
      menu_box.classList.toggle("menu-move2");
      setTimeout(() => {
        menu_box.classList.toggle("menu-fix2")
      }, 1000);
    }
  }
  menu_box.classList.toggle("menu-move");
  setTimeout(() => {
    menu_box.classList.toggle("menu-fix")
  }, 1000);

  for (let item of s1.classList) {
    if (item == "for-menu1") {
      s1.classList.toggle("for-menu1");
      s1.classList.toggle("for-180s1");
    }
  }
  for (let item of s2.classList) {
    if (item == "for-menu1") {
      s2.classList.toggle("for-menu1");
      s2.classList.toggle("for-180s2");
    }
  }
  for (let item of s3.classList) {
    if (item == "for-menu2") {
      s3.classList.toggle("for-menu2");
      s3.classList.toggle("for-180s3");
    }
  }
  s1.classList.toggle("for-menu1");
  s2.classList.toggle("for-menu1");
  s3.classList.toggle("for-menu2");
  setTimeout(() => {
    s1.classList.toggle("s1");
    s1.classList.toggle("for-s1");
    s2.classList.toggle("s2");
    s2.classList.toggle("for-s1");
    s3.classList.toggle("s3");
    s3.classList.toggle("for-s3");
  }, 400);
};
