
var cl = console.log;

const showModalBtn = document.getElementById('showModalBtn');
const backdrop = document.getElementById('backdrop')
const myModal = document.getElementById('myModal')
const myClose = [...document.querySelectorAll('.myClose')]
const titleControl = document.getElementById('title');
const imgUrlControl = document.getElementById('imgUrl');
const ratingControl = document.getElementById('rating')
const movieForm = document.getElementById('movieForm')
const movieContainer = document.getElementById('movieContainer')

let movieArray = [];

const creatMovie = (arr) =>{
    let result = '';
    arr.forEach(everyMovie =>{
     result += `
     <div class="col-md-4">
                 <div class="card">
                     <div class="card-boy">
                         <h3>${everyMovie.title}</h3>
                         <figure>
                             <img src="${everyMovie.imgURL}" alt="${everyMovie.title}" title="${everyMovie.title}">
                             <figcaption>
                                 <p>${everyMovie.rating}/5</p>
                             </figcaption>
                         </figure>
                     </div>
                 </div>
             </div>`
    })
    movieContainer.innerHTML = result;
 }
 
const modalShowHideHandler =(e) =>{
    backdrop.classList.toggle('d-none');
    myModal.classList.toggle('d-none');
}

const onMovieFormHandler=(e)=>{
    e.preventDefault();
    cl(e.target);

    let obj ={
        title:titleControl.value,
        imgURL:imgUrlControl.value,
        rating:ratingControl.value
    }
    movieArray.push(obj);
    cl(movieArray)
    creatMovie(movieArray);
    e.target.reset();
    modalShowHideHandler();
}


showModalBtn.addEventListener('click', modalShowHideHandler)
myClose.forEach(arr=>{
    arr.addEventListener('click', modalShowHideHandler)
})
backdrop.addEventListener('click', modalShowHideHandler)
movieForm.addEventListener('submit', onMovieFormHandler)