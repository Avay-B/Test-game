var racket1, racket2;
var ball;
var table;


function setup(){
   

    createCanvas(1000,900);

    racket1 = createSprite(10, 500, 20, 100);
    racket2 = createSprite(990 , 500, 20, 100);
    ball = createSprite(500, 500, 10, 50);
    table = createSprite(500, 445, 100, 90);
}
function draw(){
    background("black");
    drawSprites();
    

}
