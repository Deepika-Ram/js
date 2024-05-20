const buttonA = document.querySelector("button");
buttonA.addEventListener("click",update);
function update()
{
  const x=prompt("name");
  buttonA.textContent=x;
}