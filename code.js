var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundary1 = createSprite(200, 141, 300, 5);
var boundary2 = createSprite(200, 291, 300, 5);
var sam = createSprite(60, 214, 20, 20);
sam.shapeColor = "green";
var car1 = createSprite(120, 160, 15, 15);
var car2 = createSprite(165, 275, 15, 15);
var car3 = createSprite(240, 160, 15, 15);
var car4 = createSprite(275, 265, 15, 15);
car1.shapeColor = "red";
car2.shapeColor = "red";
car3.shapeColor = "red";
car4.shapeColor = "red";
car1.velocityY = 8;
car2.velocityY = -8;
car3.velocityY = 8;
car4.velocityY = -8;
var lives = 0;
function draw() {
  background("white");
  text("Lives ="+lives, 246, 96);
  noStroke();
  fill("lightblue");
  rect(55, 140, 50, 150);
  noStroke();
  fill("yellow");
  rect(300, 140, 50, 150);
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  if (keyDown(UP_ARROW)) {
    sam.y=sam.y-5
    
  }
  if (keyDown(DOWN_ARROW)) {
    sam.y=sam.y+5
  }
  if (keyDown(RIGHT_ARROW)) {
    sam.x=sam.x+5
  }
 if(sam.isTouching(car1)||
    sam.isTouching(car2)||
    sam.isTouching(car3)||
    sam.isTouching(car4)||
    sam.isTouching(boundary1)||
    sam.isTouching(boundary2)){
      sam.x=60
      sam.y=214
      lives=lives+1
    } 
  if (sam.x > 305) {
    fill("red");
    textSize(20);
    text("you won game over", 110, 330);
  }
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
