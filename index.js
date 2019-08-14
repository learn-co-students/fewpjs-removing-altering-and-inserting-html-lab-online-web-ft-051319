// Write your code here!

let main_element = document.querySelector('#main');

main_element.remove();

let newHeader = document.createElement('h1'); 
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";