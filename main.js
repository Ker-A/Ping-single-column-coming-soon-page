const email = document.querySelector('input');
const button = document.querySelector('button');
const error  = document.querySelector('.formulario p');

button.addEventListener("click", () => {
    if (error.classList.contains('noactive')) {
        error.classList.remove('noactive');
        error.classList.add('active');
        email.classList.add('input-error');
    }else{
        error.classList.remove('active');
        error.classList.add('noactive');
        email.classList.remove('input-error');
    }
});
