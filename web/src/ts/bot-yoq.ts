const newbtn: HTMLButtonElement = document.querySelector(".new")!;
const x: HTMLParagraphElement = document.querySelector(".x")!;
const conteneLogin: HTMLDivElement = document.querySelector(".conteneLogin")!;
const contaner: HTMLDivElement = document.querySelector(".contaner")!;


newbtn.addEventListener("click", () => {
   conteneLogin.style.display = "grid";
  newbtn.style.display = "none";
  x.style.display = "grid";
});

x.addEventListener("click", () => {
 conteneLogin.style.display = "none";
newbtn.style.display = "grid";
x.style.display = "none";
});

export function yoq() {
 conteneLogin.style.display = "none";
 newbtn.style.display = "grid";
 x.style.display = "none";
 location.reload();
}