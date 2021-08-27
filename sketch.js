let player;
let bgImg;
let playerImg;
let obsImg;
let obstacles = [];
let wordclassifer;

function preload() {
  bgImg = loadImage("background.jpg");
  playerImg = loadImage("player.gif");
  obsImg = loadImage("obstacle.gif");
  gmImg = loadImage("gameover2.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordclassifer = ml5.soundClassifier("SpeechCommands18w", options);
}

function setup() {
  createCanvas(700, 800);
  player = new Player();
  wordclassifer.classify(heardWord);
}

function heardWord(error, results) {
  console.log(results[0].label + " " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function draw() {
  background(bgImg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      image(gmImg, width / 4 - 50, height / 4 - 50, 500, 500);
      noLoop();
    }
  }

  player.show();
  player.move();
}
function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}
