namespace SpriteKind {
    export const Banana = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.powerUp.play()
    info.changeScoreBy(-10)
    mySprite.startEffect(effects.fountain, 200)
})
info.onCountdownEnd(function () {
    effects.confetti.startScreenEffect()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 200)
    info.changeScoreBy(10)
})
let Coconut: Sprite = null
let Banana: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(4)
mySprite = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . f f 
c c c c c d d d e e f c . f e f 
. f d d d d d e e f f . . f e f 
. . f f f f f e e e e f . f e f 
. . . . f e e e e e e e f f e f 
. . . f e f f e f e e e e f f . 
. . . f e f f e f e e e e f . . 
. . . f d b f d b f f e f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.startCountdown(240)
game.onUpdateInterval(3500, function () {
    Banana = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . f f f . . 
. . . . . . . . . . . f f f . . 
. . . . . . . . . . . 5 5 5 . . 
. . . . . . . . . . . 5 5 5 . . 
. . . . . . . . . . . 5 5 5 . . 
. . . . . . . . . . . 5 5 5 . . 
. . . . . . . . . . . 5 5 5 . . 
. . . . . . . . . . 5 5 5 5 . . 
. . . . . . . . . 5 5 5 5 . . . 
. . . . . . . 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
    Banana.setKind(SpriteKind.Food)
})
game.onUpdateInterval(550, function () {
    Coconut = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . e e e e e e e . . . . 
. . . . e e e e e e e e e . . . 
. . . . e e e e f e e e e . . . 
. . . e e e e e e e f e e . . . 
. . . e e e e e f e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e e . . . 
. . . e e e e e e e e e . . . . 
. . . e e e e e e e e . . . . . 
. . . . e e e e e . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Math.randomRange(-50, 50), Math.randomRange(-50, 50))
})
