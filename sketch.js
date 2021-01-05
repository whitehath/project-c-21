var edges;
var canvas;
var music;
var fixedRect1,fixedRect2,fixedRect3,fixedRect4;
var movingRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    movingRect = createSprite(400,200,50,50);
    movingRect.shapeColor = "darkgreen";
    movingRect.velocityX=4;
    movingRect.velocityY=8;
    movingRect.debug = false;
    movingRect.velocityX=-1;
    fixedRect1 = createSprite(55, 580, 200, 50);
    fixedRect1.shapeColor = "blue";
    //gameObject1.velocityX=1;
    fixedRect2 = createSprite(270, 580, 200, 50);
    fixedRect2.shapeColor = "darkorange";
    //gameObject2.velocityX=-1;
    fixedRect3 = createSprite(485, 580, 200, 50);
    fixedRect3.shapeColor = "darkred";
    fixedRect4 = createSprite(699, 580, 200, 50);
    fixedRect4.shapeColor = "darkgreen";
    

}


function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    movingRect.bounceOff(edges);
    
    if(fixedRect1.isTouching(movingRect)&&movingRect.bounceOff(fixedRect1)){
        movingRect.shapeColor="blue";
        music.play();
    }
                
    if(fixedRect2.isTouching(movingRect)&&movingRect.bounceOff(fixedRect2)){
        movingRect.shapeColor="darkorange";
        music.play();
        

    }

    if(fixedRect3.isTouching(movingRect)){
        movingRect.shapeColor="darkred";
        music.stop();
        movingRect.velocityX=0;
        movingRect.velocityY=0;
    
    }

    if(fixedRect4.isTouching(movingRect)&&movingRect.bounceOff(fixedRect4)){
        movingRect.shapeColor="darkgreen";
        music.play();
    }
    
    
    drawSprites();  
    }




