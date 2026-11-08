import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor {
    private log: (message: string) => void;

    constructor(log?: (message: string) => void) {
        this.log = log ? log : console.log;
    }

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.log("Je suis un point vide.");
            return;
        }
        this.log("Je suis un point avec x=" + this.writeNumber(point.x()) + " et y=" + this.writeNumber(point.y()) + ".");
    }

    visitLineString(lineString: LineString): void {
        if (lineString.isEmpty()) {
            this.log("Je suis une polyligne vide.");
            return;
        }
        this.log("Je suis une polyligne définie par " + lineString.getNumPoints() + " point(s).");
    }

    private writeNumber(value: number): string {
        if (Number.isInteger(value)) {
            return value.toFixed(1);
        }
        return value.toString();
    }

}