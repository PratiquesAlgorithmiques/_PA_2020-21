var img, img2, img3
var counter = 1

function preload() {
  img1 = loadImage('cat1.jpg');
  img2 = loadImage('cat2.jpg');
  img3 = loadImage('cat3.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255)
}

function draw() {
    //background(0)

    if (counter == 1) {
        image(img1, mouseX, mouseY)

    } else if (counter == 2) {

        image(img2, mouseX, mouseY)

    } else if (counter == 3) {
        image(img3, mouseX, mouseY)
    }
}

function mousePressed() {
    counter = counter + 1

    if (counter > 3) { 
        counter = 1
    }
}