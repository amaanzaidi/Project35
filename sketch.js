var dog,happyDog,database,foodS,foodStock,dogImage;

function preload()
{
dogImage = loadImage('dogImg.png');
happyDog = loadImage('dogImg1.png');
}

function setup() {
  database = firebase.database();
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(happyDog);
}

  drawSprites();
  textSize(22);
  fill("yellow");
  text("Remaining food "+foodS,160,150); 
  
  

}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
   x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    'Food':x
  })
}

