var park , boy, left_boundary, right_boundary;
var parkImg, boyImg;
function preload()
{
  //pre-load images
  parkImg = loadImage ('path.png');
  boyImg = loadAnimation ('Jake1.png', 'Jake2.png','jake3.png', 'jake4.PNG','jake5.png');
                          
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  //create sprites here 
  path = createSprite(width/2, 200);
  path.addImage(parkImg); 
  path.velocityY = 4;
  path.scale = 1.2;
  
  boy = createSprite(width/2,height-20,30,30);
  boy.addAnimation("jake_running", boyImg);
  
  left_boundary = createSprite (0,0, 100, 800);
  right_boundary = createSprite (410,0, 100, 800);
  left_boundary.visible = false;
  right_boundary.visible = false;
}

function draw() {
  background(0);
  boy.x = World.mouseX;
  if (path.y > height) 
    {
      path.y = height/2;
    }
  edges = createEdgeSprites ();
  boy.collide (edges [3]);
  boy.collide (left_boundary);
  boy.collide (right_boundary);
  drawSprites ();
}
