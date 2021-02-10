//Create variables here
var dog, happyDog, database, foods, foodStock, dogImage1, dogImage2;

function preload()
{
	dogImage1=loadImage("Dog.png")
  dogImage2=loadImage("happydog.png")
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,20,20)
  dog.scale=0.2;
  database=firebase.database()
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
  setStock(20)
  
}


function draw() { 
  background(46, 139, 87);
  drawSprites();
  textSize(20);
  fill ("yellow")
  stroke ("black")
  text ("Note:press any key to feed pahalvan milk!!!!!!!",10,50);
  
  dog.addImage(dogImage1);
 // console.log("foods in draw"+foods);
  if(keyDown(UP_ARROW)){
          writeStock(foods);
          dog.addImage(dogImage2);
         
  }
  text ("food left:"+foods,250,400)
 
  

}

function readStock(data){
      foods=data.val();
      //console.log("foods in read stock"+foods);
}

function writeStock(x){
  //console.log("x in write stock"+x)

        if(x<=0){
          x=0;
        }else{
          x=x-1
        }
        
          setStock(x)

}

function setStock(x){
  database.ref('/food').set(x)
}