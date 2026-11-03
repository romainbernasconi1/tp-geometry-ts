import Geometry from "./Geometry";
import Points from "./Point";

export default class LineString implements Geometry {

    private points: Points[];

    constructor(points?:Points[]){
        this.points = points ? points : [];
    }

    getType(): string {
        return "LineString";
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number) {
        return this.points[n];
    }

    isEmpty(): boolean {
        return this.points.length == 0;
    }
}