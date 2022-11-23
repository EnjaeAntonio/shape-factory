
class Shape {
    constructor(shapes, colours) {
        this.shape = shapes;
        this.colours = colours;

    }
    
    getColour(){
        this._colours = this.colours;
        return this._colours;
    }

    getShape() {
        this._shape = this.shape;
        return this._shape
    }

    getInfo() {
        return `${this.getShape()} ${this.getColour()}`
    }    
}    

export { Shape };