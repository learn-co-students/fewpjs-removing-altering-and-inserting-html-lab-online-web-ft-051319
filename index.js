main.remove();

let newHeader = document.createElement('h1');

document.body.appendChild(newHeader);

newHeader = document.querySelector('h1');

newHeader.setAttribute("id", "victory");

newHeader = document.querySelector('h1#victory');

newHeader.innerHTML = "Haley is the champion";