const canvas = document.getElementById('canvas1');
// instance of canvas 2d api object
const ctx = canvas.getContext('2d')
// los valores deben ser los mismos definidos en css para el correcto escalado
canvas.width = 1020;
canvas.height = 576;
// blank new image  object
const image1 = new Image()
image1.src= 'tmg.png'

//when image is fully loaded excecute the callback
image1.addEventListener('load', () => {
    //draw image, arguments --> image, x corordinate, y coordinate, width, height
    ctx.drawImage(image1, 0, 0);
} )