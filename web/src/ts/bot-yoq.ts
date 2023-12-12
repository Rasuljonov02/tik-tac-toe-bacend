
const newbtn: HTMLButtonElement = document.querySelector(".new")!;
const x: HTMLParagraphElement = document.querySelector(".x")!;
const conteneLogin: HTMLDivElement = document.querySelector(".conteneLogin")!;
const con: HTMLDivElement = document.querySelector(".con")!;
const contaner: HTMLDivElement = document.querySelector(".contaner")!;
const conlar: HTMLDivElement = document.querySelector(".conlar")!;

newbtn.addEventListener("click", () => {
  conteneLogin.style.display = "grid";
  newbtn.style.display = "none";
  x.style.display = "grid";
  con.style.display = "grid";
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

export function cel() {
  conteneLogin.style.display = "none";
  newbtn.style.display = "none";
  x.style.display = "none";
  conlar.style.display = "grid";
  contaner.style.display = "none";

}
