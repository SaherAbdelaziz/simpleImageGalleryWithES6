const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = .4 ;
const normalOpacity = 1 ;
imgs.forEach(img => img.addEventListener('click' , imgClick));


function imgClick(e){

    imgs.forEach(img => img.style.opacity = normalOpacity )

    current.src = e.target.src;

    e.target.style.opacity = opacity ;
    
}