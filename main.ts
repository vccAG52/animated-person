scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 9 . . . . . 
    . . . . 9 d d d d d d 9 . . . . 
    . . . . 9 d f d d f d 9 . . . . 
    . . . 9 d d d d d d d d 9 . . . 
    . . . 9 d f d d d d f d 9 . . . 
    . . . 9 9 d f f f f d 9 9 . . . 
    d . . 9 9 3 d d d d 3 9 9 . . d 
    . d . 9 9 3 3 3 3 3 3 9 9 . d . 
    . . d 9 9 3 3 3 3 3 3 9 9 d . . 
    . . . d 3 3 3 3 3 3 3 3 d . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . d . . . . . . d . . . . 
    . . . . 3 . . . . . . 3 . . . . 
    `, SpriteKind.Player)
forever(function () {
    mySprite.destroy()
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 d d d d d d 9 . . . . 
        . . . . 9 d f d d f d 9 . . . . 
        . . . 9 d d d d d d d d 9 . . . 
        . . . 9 d f d d d d f d 9 . . . 
        . . . 9 9 d f f f f d 9 9 . . . 
        d . . 9 9 3 d d d d 3 9 9 . . d 
        . d . 9 9 3 3 3 3 3 3 9 9 . d . 
        . . d 9 9 3 3 3 3 3 3 9 9 d . . 
        . . . d 3 3 3 3 3 3 3 3 d . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . . . . d . . . . . . d . . . . 
        . . . . 3 . . . . . . 3 . . . . 
        `, SpriteKind.Player)
    pause(500)
    mySprite.destroy()
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 9 . . . . . 
        . . . . 9 d d d d d d 9 . . . . 
        . . . . 9 d f d d f d 9 . . . . 
        . . . 9 d d d d d d d d 9 . . . 
        . . . 9 d f d d d d f d 9 . . . 
        . . . 9 9 d f f f f d 9 9 . . . 
        . . . 9 9 3 d d d d 3 9 9 . . . 
        . . . 9 9 3 3 3 3 3 3 9 9 . . . 
        . . . 9 9 3 3 3 3 3 3 9 9 . . . 
        d d d d 3 3 3 3 3 3 3 3 d d d d 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . . . . d . . . . . . d . . . . 
        . . . . 3 . . . . . . 3 . . . . 
        `, SpriteKind.Player)
    pause(500)
})
