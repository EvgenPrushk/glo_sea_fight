class Game {
    constructor () {
        this.stay = "preparation";

        this.player = new Topology({
            offsetX: 50,
            offsetY: 87,
        });

        this.player.
            addSheeps(
                {x: 0, y: 0, direct: 0, size: 3},
                {x: 0, y: 2, direct: 1, size: 4},
            )
            .addChecks(
                {x: 5, y:   7},
                {x: 5, y: 4},
            );


        requestAnimationFrame(x => this.tick(x))
    }

    tick (timestamp){
        requestAnimationFrame( x => this.tick(x))

        clearCanvas();
        drawGrid();
        this.player.draw(context);
    }
}