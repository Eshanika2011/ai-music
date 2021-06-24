leftWristX = 0
leftWristY = 0
rightWristX = 0
rightWristY = 0
song = ""

function preload() {
    song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(800, 500);
    canvas.center();
    v1 = createCapture(VIDEO);
    v1.hide();
    posenet = ml5.poseNet(v1, modelLoaded);
    posenet.on('pose', gotPoses)

}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log('rightWristX :' + rightWristX);
        console.log('rightWristy :' + rightWristY);

        console.log('leftWristX :' + leftWristX);
        console.log('leftWristY :' + leftWristY);


    }
}

function modelLoaded() {
    console.log("posenethasstarted");
}

function draw() {
    image(v1, 0, 0, 800, 500)
    fill("red");
    stroke("red");
    if (scoreLeftWrist>0.2) {
        
    
    circle(leftWristX, leftWristY, 20);
    number_leftWristY = Number(leftWristY);
    remove_decimalls = floor(number_leftWristYC)
    console.log(remove_decimalls);
    volume = remove_decimalls / 500;
    document.getElementById("volume").innerHTML = "Volume=" + volume;
    song.setVolume(volume);
}

}

function play() {
    song.play();
    song.setVolume(0.7)
    song.rate(1)
}