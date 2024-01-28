//This code randomly changes the color of text.
//Simple exercise I did to learn exporting and working in between JS and HTML / CSS files.

//function to access innerHTML of an html element and change text
const changeText =(domElement, newText) => {
  domElement.innerHTML = newText;
}

//function to randomly change color of the domElement
const changeToFunkyColor =(domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  domElement.style.color = `rgb(${r}, ${g}, ${b})`;
}

// creates resource that includes both functions
const resources = {changeText,
  changeToFunkyColor}

//exports for use in HTML files
export { resources as default };
