// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');
// pBaru.appendChild(teksPBaru);

// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = document.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// const sectionAA = document.getElementById('a');

// const link = document.getElementsByTagName('a')[0];
// sectionAA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!!!');

// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);

// pBaru.style.backgroundColor = 'lightgrey';
// liBaru.style.backgroundColor = 'coral';
// h2Baru.style.backgroundColor = 'lightblue';

// event js

//event handler
// const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = 'coral';
// }

//event listener

// const p3 = document.querySelector('.p3');
// p3.addEventListener('click', function(){
//     p3.style.backgroundColor = 'lightblue';
// })

// p3.addEventListener('click', function(){
//     p3.style.color = 'white';
// })

//event handler inline HTML atribute
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightcoral' ;
// }

//method element
// const p2 = document.querySelector('.p2');

// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }
// p2.onclick = ubahWarnaP2;

const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru lagi');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})