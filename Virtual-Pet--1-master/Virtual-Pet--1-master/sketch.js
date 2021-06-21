var dog, happyDog, database, foodS, foodStock,saddog

function preload()
{
	//load images here
  happyDog=loadImage("images/dogImg1.png")
  saddog=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500,500);
  database=firebase.database()
  dog=createSprite(250,300,150,150)
  dog.addImage(saddog)
  dog.scale=0.2
  foodStock=database.ref("food")
  foodStock.on("value",readStock)
  
}
function readStock(data){
  foodS=data.val()
}

function draw() {  
background (46, 139, 87)
  drawSprites();
  //add styles here
if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDog)
  
}
text("foodremaing:"+foodS,170,200)
}
function writeStock(x){
  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
}


