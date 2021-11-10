var bg, bgImg
var canvas
var score = 0
var spaceship, spaceshipImg
var alienship, alienshipImg
var cash
var jwell
var diamonds
var ruby
var track
var diamondsGroup, cashGroup, rubyGroup, jwellGroup

function preload() {
    bgImg = loadImage("Images/newspace.jpg")
    cash = loadImage("Images/cash.png")
    jwell = loadImage("Images/jwell.png")
    ruby = loadImage("Images/ruby.png")
    diamonds = loadImage("Images/diamonds.png")
    spaceshipImg = loadImage("Images/spacecraft2.png")
    alienshipImg = loadImage("Images/alienship.png")
}



function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    track = createSprite(windowWidth / 2, windowHeight / 2)
    track.addImage(bgImg)
    track.scale = 2
    track.velocityY = 2



    spaceship = createSprite(windowWidth / 2, windowHeight - 100)
    spaceship.addImage(spaceshipImg)
    spaceship.scale = 0.5

    diamondsGroup = new Group()
    cashGroup = new Group()
    jwellGroup = new Group()
    rubyGroup = new Group()
    alienGroup = new Group()
}

function draw() {



    background(0);
    track.velocityY = 2
    if (track.y >= windowHeight) {
        track.y = windowHeight / 2
    }
    spawnCash()
    spawnDiamonds()
    spawnRuby()
    spawnJwell()
    spawnAlien()

    if (keyDown(UP_ARROW)) {
        spaceMove(0, -4)
    }
    if (keyDown(LEFT_ARROW)) {
        spaceMove(-4, 0)
    }
    if (keyDown(RIGHT_ARROW)) {
        spaceMove(4, 0)
    }
    if (keyDown(DOWN_ARROW)) {
        spaceMove(0, 4)
    }
    if (spaceship.isTouching(cashGroup)) {
        score = score + 2;
        cashGroup.destroyEach()
    } else if (spaceship.isTouching(diamondsGroup)) {
        score = score + 5;
        diamondsGroup.destroyEach()
    } else if (spaceship.isTouching(rubyGroup)) {
        score = score + 3;
        rubyGroup.destroyEach()
    } else if (spaceship.isTouching(jwellGroup)) {
        score = score + 1;
        jwellGroup.destroyEach()
    }
    if (score >= 10) {
        cashGroup.setVelocityYEach(6)
        diamondsGroup.setVelocityYEach(12)
        rubyGroup.setVelocityYEach(10)
        jwellGroup.setVelocityYEach(8)
        track.velocityY = 10
    }
    drawSprites();
    textSize(30)
    fill("white")
    text("Score: " + score, windowWidth - 300, 40)

}

function spaceMove(x, y) {
    spaceship.x = spaceship.x + x;
    spaceship.y = spaceship.y + y;
}

function spawnCash() {
    if (World.frameCount % 166 === 0) {
        var cashObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        cashGroup.add(cashObj)
        cashObj.addImage(cash)
        cashObj.velocityY = 3;
        cashObj.scale = 0.2
    }
}

function spawnDiamonds() {
    if (World.frameCount % 100 === 0) {
        var diamondsObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        diamondsGroup.add(diamondsObj)
        diamondsObj.addImage(diamonds)
        diamondsObj.velocityY = 7;
        diamondsObj.scale = 0.07
    }
}

function spawnRuby() {
    if (World.frameCount % 257 === 0) {
        var rubyObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        rubyGroup.add(rubyObj)
        rubyObj.addImage(ruby)
        rubyObj.velocityY = 5;
        rubyObj.scale = 0.09
    }
}

function spawnJwell() {
    if (World.frameCount % 359 === 0) {
        var jwellObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        jwellGroup.add(jwellObj)
        jwellObj.addImage(jwell)
        jwellObj.velocityY = 4;
        jwellObj.scale = 0.2
    }
}

function spawnAlien() {
    if (World.frameCount % 650 === 0) {
        var AlienObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        alienGroup.add(alienObj)
        alienObj.addImage(alienshipImg)
        alienObj.velocityY = 7;
        alienObj.scale = 0.07
    }
}