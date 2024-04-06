import * as PIXI from 'pixi.js';

// Asynchronous IIFE
(async () =>
{
    
    const app = new PIXI.Application();

    await app.init({ background: '#1099bb', resizeTo: window });

    document.body.appendChild(app.canvas);

    const { stage } = app;

    const texture = await PIXI.Assets.load('img/ship_E.png');

    const ship = new PIXI.Sprite(texture);

    stage.addChild(ship);

    ship.anchor.set(0.5);

    ship.x = app.screen.width / 2;
    ship.y = app.screen.height / 2;

    // game loop
    app.ticker.add((time)=>{
        ship.rotation += 0.1 * time.deltaTime;
    });


})();
