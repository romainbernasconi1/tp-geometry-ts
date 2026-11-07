import Coordinate from "./Coordinate";
import Envelope from "./Envelope";

export default class EnvelopeBuilder {
    private xVals: number[];
    private yVals: number[];

    constructor() {
        this.xVals = [];
        this.yVals = [];
    }

    insert(coordinate: Coordinate): void {
        if (coordinate.length == 0) {
            return;
        }
        this.xVals.push(coordinate[0]);
        this.yVals.push(coordinate[1]);
    }

    build(): Envelope {
        if (this.xVals.length == 0) {
            return new Envelope();
        }
        const xMin = Math.min(...this.xVals);
        const yMin = Math.min(...this.yVals);
        const xMax = Math.max(...this.xVals);
        const yMax = Math.max(...this.yVals);
        return new Envelope([xMin, yMin], [xMax, yMax]);
    }
}