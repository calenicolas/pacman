const should = require("should");
const Pacman = require("../pacman.js");
const Cell = require('../cell.js');
const Wall = require('../wall.js');

describe("creando un pacman", function () {

    it("el pacman se mueve un casillero a la derecha", function () {

        const expectedPosition = {
            x: 1,
            y: 0
        };

        const pacman = new Pacman();

        pacman.moveRight();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero a la izquierda", function () {

        const expectedPosition = {
            x: -1,
            y: 0
        };

        const pacman = new Pacman();

        pacman.moveLeft();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero para arriba", function () {

        const expectedPosition = {
            x: 0,
            y: 1
        };

        const pacman = new Pacman();

        pacman.moveUp();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero para abajo", function () {

        const expectedPosition = {
            x: 0,
            y: -1
        };

        const pacman = new Pacman();

        pacman.moveDown();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman deberia avanzar, si hay una celda vacia, hacia arriba", function () {
        const expectedPosition = {
            x: 0,
            y: 1
        };

        const pacman = new Pacman();
        const cell = new Cell();

        pacman.goUp(cell);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman deberia avanzar, si hay una celda vacia, hacia la derecha", function () {
        const expectedPosition = {
            x: 1,
            y: 0
        };

        const pacman = new Pacman();
        const cell = new Cell();

        pacman.goRight(cell);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman deberia avanzar, si hay una celda vacia, hacia abajo", function () {
        const expectedPosition = {
            x: 0,
            y: -1
        };

        const pacman = new Pacman();
        const cell = new Cell();

        pacman.goDown(cell);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman deberia avanzar, si hay una celda vacia, hacia la izquierda", function () {
        const expectedPosition = {
            x: -1,
            y: 0
        };

        const pacman = new Pacman();
        const cell = new Cell();

        pacman.goLeft(cell);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });
    

    it('el pacman no deberia avanzar cuando se choca con una pared hacia arriba', function(){
        const expectedPosition = {
            x: 0,
            y: 0
        };

        const pacman = new Pacman();
        const wall = new Wall();

        pacman.goUp(wall);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);

    });

    it('el pacman no deberia avanzar cuando se choca con una pared hacia la derecha', function(){
        const expectedPosition = {
            x: 0,
            y: 0
        };

        const pacman = new Pacman();
        const wall = new Wall();

        pacman.goRight(wall);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);

    });

    it('el pacman no deberia avanzar cuando se choca con una pared hacia abajo', function(){
        const expectedPosition = {
            x: 0,
            y: 0
        };

        const pacman = new Pacman();
        const wall = new Wall();

        pacman.goDown(wall);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);

    });

    it('el pacman no deberia avanzar cuando se choca con una pared hacia la izquierda', function(){
        const expectedPosition = {
            x: 0,
            y: 0
        };

        const pacman = new Pacman();
        const wall = new Wall();

        pacman.goLeft(wall);

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);

    });
});