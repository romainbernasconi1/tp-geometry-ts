import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    
    it("should return 'Point' for getType()",() => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");
    });
    it("should translate coordinates with translate(dx, dy)",() => {
        const p = new Point([3.0,4.0]);
        p.translate(1.0,1.0);
        expect(p.x()).to.equal(4.0);
        expect(p.y()).to.equal(5.0);
    });
    it("should not translate coordinates with translate(dx, dy) when point is empty",() => {
        const p = new Point();
        p.translate(1.0,1.0);
        expect(p.isEmpty()).to.be.true;
    });

    it("should clone the point's coordinates and not share the same coordinates",() => {
        const p = new Point([3.0,4.0]);
        p.translate(1.0,1.0);
        const copy = p.clone();
        copy.translate(1.0,1.0);
        expect(p.getCoordinate()).to.deep.equal([4.0,5.0])
        expect(copy.getCoordinate()).to.deep.equal([5.0,6.0])
    });

    it("should clone an empty point",() => {
        const p = new Point();
        const copy = p.clone();
        expect(copy.isEmpty()).to.be.true;
    });
});

