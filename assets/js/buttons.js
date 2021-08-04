const primaryBtn = document.querySelector('.primary-button');
const btnCursor = document.querySelector(".iconify");

primaryBtn.addEventListener('mouseover',function(){
    btnCursor.style.transform = 'rotateY'
})