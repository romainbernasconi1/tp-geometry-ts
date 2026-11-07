import Geometry from "./Geometry";
import Points from "./Point";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";

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

    translate(dx: number, dy: number): void{
        for (const point of this.points) {
            point.translate(dx, dy);
        }
    }

    clone(): LineString {
        const copy: Points[] = [];
        for (const point of this.points) {
            copy.push(point.clone());
        }
        return new LineString(copy);
    }

    getEnvelope(): Envelope {
        const builder = new EnvelopeBuilder();
        for (const point of this.points) {
            builder.insert(point.getCoordinate());
        }
        return builder.build();
    }
}