let judul = document.querySelector('p');
judul.innerHTML = 'My To Do List';


// list.innerHTML = `
// <div class="row">
//    <div class="col-8">
//         <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
//             <label class="form-check-label" for="flexCheckDefault">Tugas Baru</label>
//         </div>
//    </div>
//     <div class="col-auto">
//         <div class="btn"><i class="bi bi-trash"></i></div>
//     </div>
// </div>`

let container = document.querySelector('.container');
container.style.margin = '135px auto';
container.style.maxWidth = '550px';
container.style.background = '#ffff';
container.style.borderRadius = '7px';
container.style.padding = '28px 10px';

document.body.style.backgroundImage = 'linear-gradient(to right,grey,lightgreen,lightblue,lightyellow )';


// const judul = document.querySelector('#judul');
// judul.style.color = 'lightgreen';
// judul.style.backgroundColor = 'Salmon';

document.querySelector('#input input').setAttribute('placeholder', 'Masukkan Tugas Baru');
document.querySelector('#input input').removeAttribute('type');

let inputButton = document.querySelector("#input button")
inputButton.innerHTML = "Tambah";

judul.className = 'text-center';
judul.classList.add('text-center','fs-3', 'fw-bold', 'mt-3');
// judul.classList.remove('text-center','fs-3');



// event js


// inputButton.onclick = klik();
// function klik(){
//     alert('OK');
// }

function gantiRed() {
    inputButton.style.backgroundColor = "red";
}

function gantiBlack() {
    inputButton.style.color = "black";
}

inputButton.addEventListener("mouseover", gantiRed);
inputButton.addEventListener("mouseover", gantiBlack);

// Event Click, Submit & preventDefault

// inputButton.addEventListener('click', btnAktif);

// function btnAktif() {
//     console.log("Button aktif!");
// }

document.getElementById('input').addEventListener('submit', sumbitAktif);

function sumbitAktif(){
    console.log("Submit aktif");
}