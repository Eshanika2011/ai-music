song=""
function preload() {
    song=loadSound("music.mp3");
}
function setup() {
    canvas=createCanvas(800,500);
    canvas.center();
    v1=createCapture(VIDEO);
    v1.hide();
}
function draw() {
    image(v1,0,0,800,500)
}
function play() {
    song.play();
}