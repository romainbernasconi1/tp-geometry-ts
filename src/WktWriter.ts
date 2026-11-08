import Geometry from "./Geometry";
import LineString from "./LineString";
import Point from "./Point";

export default class WktWriter {

    write(geometry: Geometry): string {
        if (geometry instanceof Point) {
            return this.writePoint(geometry);
        } else if (geometry instanceof LineString) {
            return this.writeLineString(geometry);
        } else {
            throw new TypeError("geometry type not supported");
        }
    }

    private writePoint(point: Point): string {
        if (point.isEmpty()) {
            return "POINT EMPTY";
        }
        return "POINT(" + this.writeCoordinate(point) + ")";
    }

    private writeLineString(lineString: LineString): string {
        if (lineString.isEmpty()) {
            return "LINESTRING EMPTY";
        }
        const coordinates: string[] = [];
        for (let i = 0; i < lineString.getNumPoints(); i++) {
            coordinates.push(this.writeCoordinate(lineString.getPointN(i)));
        }
        return "LINESTRING(" + coordinates.join(",") + ")";
    }

    private writeCoordinate(point: Point): string {
        return this.writeNumber(point.x()) + " " + this.writeNumber(point.y());
    }

    private writeNumber(value: number): string {
        // 3 devient "3.0" mais 1.25 reste "1.25"
        if (Number.isInteger(value)) {
            return value.toFixed(1);
        }
        return value.toString();
    }

}