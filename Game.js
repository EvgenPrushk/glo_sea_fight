class Game {
    constructor() {
        this.stage = "preparation";
        this.playerOrder = true;

        this.player = new Topology({
            offsetX: 60,
            offsetY: 90,
        });

        this.computer = new Topology({
            offsetX: 600,
            offsetY: 100,
            secret: true,
        });

        this.computer.randoming();

        requestAnimationFrame(x => this.tick(x));
    }

    tick(timestamp) {
        requestAnimationFrame(x => this.tick(x));

        clearCanvas();
        drawGrid();

        this.player.draw(context);
        this.computer.draw(context);

        if (this.stage === "preparation") {
            this.tickPreparation(timestamp);
        } else if (this.stage === "play") {
            this.tickPlay(timestamp);
        }
        mouse.pleft = mouse.left;
    }

    tickPreparation(timestamp) {

        if (!this.player.isPointUnder(mouse)) {
            return;
        }

        const sheepSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
        const sheepSize = sheepSizes[this.player.sheeps.length];
        const cordinats = this.player.getCoordinats(mouse);

        const sheep = {
            x: cordinats.x,
            y: cordinats.y,
            direct: mouse.s ? 0 : 1,
            size: sheepSize
        };

        if (!this.player.canStay(sheep)) {
            return;
        }

        this.player.drawSheep(context, sheep);

        if (mouse.left && !mouse.pleft) {
            this.player.addSheeps(sheep);

            if (this.player.sheeps.length === 10) {
                this.stage = "play";
            }
        }
    }

    tickPlay(timestamp) {
        if (this.playerOrder) {
            if (!this.computer.isPointUnder(mouse)) {
                return;
            }

            const point = this.computer.getCoordinats(mouse);

            if (mouse.left && !mouse.pleft) {
                this.computer.addChecks(point);
                this.computer.update();
                this.playerOrder = false;
            }
        } 
        else {
            const point = {
                x: Math.floor(Math.random() * 10),
                y: Math.floor(Math.random() * 10),
            };

            this.player.addChecks(point);
            this.player.update();
            this.playerOrder = true;

        }

    }
}