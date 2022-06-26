
var currentImage = 0;
var imagenes = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg'];
const content = document.getElementById('content');
const next = document.getElementById('next')
const previous = document.getElementById('previous')


function cambiarImage(){
    var newSlide = document.createElement('img')
    newSlide.src = `slides/${imagenes[currentImage]}`
    newSlide.className = 'fadeinimg';
    content.appendChild(newSlide)
    if(content.children.length > 2){
        content.removeChild(children[0])
    }


}

next.addEventListener('click', function(event){
    event.preventDefault()
    currentImage++
   if(currentImage > (imagenes.length-1)){currentImage = 0}
    cambiarImage()
})

previous.addEventListener('click', function(event){
    event.preventDefault()
    currentImage--
    if(currentImage < 0){currentImage = imagenes.length-1}
    cambiarImage()
})



