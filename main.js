const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = .4 ;
const normalOpacity = 1 ;
imgs.forEach(img => img.addEventListener('click' , imgClick));

imgs[0].style.opacity = opacity;

function imgClick(e){

    imgs.forEach(img => img.style.opacity = normalOpacity )

    current.src = e.target.src;
    current.classList.add('fade-in');
    setTimeout(() => {
        current.classList.remove('fade-in');
    }, 500);
    e.target.style.opacity = opacity ;
    
}