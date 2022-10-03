
var cl = console.log;

const showModalBtn = document.getElementById('showModalBtn');
const backdrop = document.getElementById('backdrop')
const myModal = document.getElementById('myModal')
const myClose = [...document.querySelectorAll('.myClose')]

const showModalHandler =(e) =>{
    backdrop.classList.toggle('d-none');
    myModal.classList.toggle('d-none');
}




showModalBtn.addEventListener('click', showModalHandler)
myClose.forEach(arr=>{
    arr.addEventListener('click', showModalHandler)
})