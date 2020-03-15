class Game {
    constructor () {
        this.stage = "preparation";

        this.player = new Topology({
            offsetX: 60,
            offsetY: 90,
        });

        this.computer = new Topology({
            offsetX: 600,
            offsetY: 100,
        });

        // this.player.
        //     addSheeps(
        //         {x: 0, y: 0, direct: 0, size: 3 },
        //         {x: 0, y: 2, direct: 1, size: 4 }
        //     )
        //     .addChecks(
        //         {x: 5, y:  5 },
        //         {x: 5, y: 4 }
        //     );


        requestAnimationFrame(x => this.tick(x));
    }

    tick (timestamp){
        requestAnimationFrame( x => this.tick(x));

        clearCanvas();
        drawGrid();

        this.player.draw(context);
        this.computer.draw(context);
        if (this.stage === "preparation") {
            this.tickPreparation(timestamp);
        }
    }

    tickPreparation (timestamp) {
        // console.log(timestamp);
        
    }
}