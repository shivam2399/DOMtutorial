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

