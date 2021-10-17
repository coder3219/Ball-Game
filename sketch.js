var score = 0
var gameState = "Play"
function setup() {
  createCanvas(800, 400);
  paddle = createSprite(790, 200, 20, 80)
  ball = createSprite(400, 200, 20, 20)
  paddle.shapeColor="yellow"
  ball.shapeColor="cyan"
}


function draw() {
  background("grey");
  fill ("blue")
  textSize(20)
  text("score=" + score, 30, 50)
  if (gameState == "Play") {
    paddle.y = World.mouseY
    if (keyDown("space")) {
      ball.velocityX = 5
      ball.velocityY = 5
    }
    if (ball.isTouching(paddle)) {
      score = score + 1
    }
    edges = createEdgeSprites()
    ball.bounceOff(paddle)
    ball.bounceOff(edges[3])
    ball.bounceOff(edges[2])
    ball.bounceOff(edges[0])
    if (ball.isTouching(edges[1])) {
      gameState = "end"
    }

  }
  if (gameState == "end") {
    fill ("red")
    text("game over", 380, 200)
  }
  drawSprites();


}