class Map {
    obstacles = [];
    tiles = [];


    constructor(tileSize) {
        this.tileSize = tileSize;
    }

    draw() {
        for (let i = 0; i < this.obstacles.length; i++) this.obstacles[i].show();
        for (let i = 0; i < this.tiles.length; i++) this.tiles[i].show();
    }

    drawVerticaleStreet(x, y, length) {
        x *= this.tileSize;
        y *= this.tileSize;
        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(i * this.tileSize + x, 0 + y, this.tileSize, this.tileSize, introTiles[0]));
        }

        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(i * this.tileSize + x, this.tileSize + y, this.tileSize, this.tileSize, introTiles[1]));

        }
        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(i * this.tileSize + x, this.tileSize * 2 + y, this.tileSize, this.tileSize, introTiles[1]));

        }
        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(i * this.tileSize + x, this.tileSize * 3 + y, this.tileSize, this.tileSize, introTiles[0]));
        }
    }

    drawHorizontalStreet(x, y, length) {
        x *= this.tileSize;
        y *= this.tileSize;
        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(0 + x, i * this.tileSize + y, this.tileSize, this.tileSize, introTiles[0]));
        }

        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(this.tileSize + x, i * this.tileSize + y, this.tileSize, this.tileSize, introTiles[1]));

        }
        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(this.tileSize * 2 + x, i * this.tileSize + y, this.tileSize, this.tileSize, introTiles[1]));

        }
        for (let i = 0; i < length; i++) {
            this.tiles.push(new Tile(this.tileSize * 3 + x, i * this.tileSize + y, this.tileSize, this.tileSize, introTiles[0]));
        }
    }

    drawTiles(x, y, x1, y1, image, secretValue) {
        if (secretValue ===null || typeof  secretValue ==='undefined') secretValue = 1;
        x *= this.tileSize;
        y *= this.tileSize;
        x1 *= this.tileSize;
        y1 *= this.tileSize;

        for (let i = x; i < x1; i++) {
            for (let j = y; j < y1; j++) {
                this.tiles.push(new Tile(i, j, this.tileSize * secretValue, this.tileSize * secretValue, image));
            }
        }

    }
}