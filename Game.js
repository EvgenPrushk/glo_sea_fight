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
        mouse.pleft = mouse.left;
    }

    tickPreparation (timestamp) {
   
        if (!this.player.isPointUnder(mouse)) {
            return;
        }

        const sheepSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        const sheepSize = sheepSizes[this.player.sheeps.length];
        const cordinats = this.player.getCoordinats(mouse);           

        const sheep = {
            x:  cordinats.x,
            y:  cordinats.y,
            direct: mouse.s ? 0 : 1,
            size: sheepSize
        };

        if (!this.player.canStay(sheep)) {
            return ;
        }

        this.player.drawSheep(context, sheep);  

        if (mouse.left && !mouse.pleft) {
            this.player.addSheeps(sheep);
        }  
    }
}