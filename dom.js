let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000';

var items = document.getElementsByClassName('title');

items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';



let li  = document.getElementsByTagName('li');

for(let i=0;i<li.length;i++) {
        li[i].style.fontWeight = 'bold';
     }

//      let secondItem = document.querySelector('.list-group-item:nth-child(2)');

//      secondItem.style.backgroundColor = 'green';
     
//      let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
     
//      thirdItem.style.visibility = 'hidden';

// let secondItem = document.querySelectorAll('.list-group-item');
// secondItem[1].style.backgroundColor = 'green';

// let odd = document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++){
//         odd[i].style.color = 'green';
// }

let itemList = document.querySelector('#items');
itemList.parentElement.style.backgroundColor = 'cyan';

itemList.children[1].style.backgroundColor = 'yellow';

console.log(itemList.lastChild);
itemList.lastElementChild.textContent = 'Hello world';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
itemList.previousElementSibling.style.color = 'blue';

let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'hello1';
newDiv.setAttribute('title', 'Hello div');

let newDivText = document.createTextNode('Hello world');
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);

let parentNode = document.getElementById('items');

parentNode.innerHTML = '<li>Hello World</li>' + parentNode.innerHTML;

