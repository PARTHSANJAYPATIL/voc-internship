let namei = document.querySelector("#namei");
let emaili = document.querySelector("#emaili");
let phonei = document.querySelector("#phonei");
let psummeryi = document.querySelector("#psummeryi");
let edui = document.querySelector("#edui");
let skillsi = document.querySelector("#skillsi");
let experiencei = document.querySelector("#experiencei");

let namet = document.querySelector("#namet");
let emailt = document.querySelector("#emailt");
let phonet = document.querySelector("#phonet");
let psummeryt = document.querySelector("#psummeryt");
let edut = document.querySelector("#edut");
let skillst = document.querySelector("#skillst ul");
let experiencet = document.querySelector("#experiencet");


namei.addEventListener("input", (ev) => {
  let val = namei.value;
  namet.innerHTML = val;
});

emaili.addEventListener("input", (ev) => {
  let val = emaili.value;
  emailt.innerHTML = val;
});

phonei.addEventListener("input", (ev) => {
  let val = phonei.value;
  phonet.innerHTML = val;
});

psummeryi.addEventListener("input", (ev) => {
  let val = psummeryi.value;
  psummeryt.innerHTML = val;
});

edui.addEventListener("input", (ev) => {
  let val = edui.value;
  edut.innerHTML = val;
});

skillsi.addEventListener("input", (ev) => {
  let val = skillsi.value;
  skillst.innerHTML = val;
});

experiencei.addEventListener("input", (ev) => {
  let val = experiencei.value;
  experiencet.innerHTML = val;
});

function show(){
  console.log("show");
}






