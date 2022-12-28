//WAS: const btnEL = document.getElementsByClassName("btn");
//WAS: const containerEL = document.getElementsByTagName("a");
//IS: queryselector is for getting CSS, getElements is for HTML
const btnEl = document.querySelector(".btn");

//WAS: object.addEventListener("mouseover", () => {
//IS: forgot to change "Object" to btnEl
btnEl.addEventListener("mouseover", (event) => {
  const btnEl = document.querySelector(".btn");
  //added 'event'
  // useful to see what pageX does: console.log(event.pageX);
  //const btnhoverEL = document.querySelector(".btn::before");
  //btnhoverEL.style.backgroundColor = "blue";
  const newposX = event.offsetX;
  const newposY = event.offsetY;
  //document.querySelector(".btn::before").style.top = posY;
  //document.querySelector(".btn::before").style.left = posX;
  document.querySelector("html").style.setProperty("--leftPos", newposX + "px");
  document.querySelector("html").style.setProperty("--topPos", newposY + "px");
  //dont forget to include units + "px" when setting properties
  //this also works because we can access variables, but not ::before
  //btnEl.style.setProperty("--leftPos", newposX + "px");
  //btnEl.style.setProperty("--topPos", newposY + "px");
});
