"use strict"

const button = document.querySelector ('.js-button');
const background = document.querySelector ('.js-background');
const colorResult = document.querySelector('.hidden');

 var randomColor = Math.floor(Math.random()*16777215).toString(16);
 //16777215 es el número de colores hexadecimales que existen
 const setBg = () => {
   const randomColor = Math.floor(Math.random()*16777215).toString(16);
   document.body.style.backgroundColor = "#" + randomColor; 
   return "#" + randomColor;
 } 

const handleColor = (ev) => {
ev.preventDefault();
const result = setBg()
  document.body.style.background = result;
	colorResult.classList.remove('hidden');
	colorResult.innerHTML = `Your hexadecimal color is: ${result}`
	button.style.color=result;
	button.style.borderColor=result;

 }

 button.addEventListener("click", handleColor);