import { describe, it, expect } from "vitest";
import LineString from "../src/LineString";
import Point from "../src/Point";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.getNumPoints()).to.equal(0);
        expect(g.isEmpty()).to.be.true;
    });

    it("test constructor with coordinates", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);
        expect(g.isEmpty()).to.be.false;
    });
    
    it("should return 'LineString' for getType()",() => {
        const g = new LineString();
        expect(g.getType()).to.equal("LineString");
    });

    it("should return expected points with GetPointN()", () =>{
        const a = new Point([0.0, 0.0]);
        const b = new Point([3.0, 4.0]);
        const g = new LineString([a,b]);

        expect(g.getPointN(0)).to.equal(a);
        expect(g.getPointN(1)).to.equal(b);
    });

    it("should translate each point with translate(dx, dy)", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        g.translate(1.0,1.0);
        expect(g.getPointN(0).getCoordinate()).to.deep.equal([1.0,1.0]);
        expect(g.getPointN(1).getCoordinate()).to.deep.equal([4.0,5.0]);
    });

    it("should not translate an empty lineString", () => {
        const g = new LineString();
        g.translate(1.0,1.0);
        expect(g.isEmpty()).to.be.true;
    });

    it("should clone the lineString's points without sharing the same point", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        g.translate(1.0,1.0);
        expect(g.getPointN(0).getCoordinate()).to.deep.equal([1.0,1.0]);
        expect(g.getPointN(1).getCoordinate()).to.deep.equal([4.0,5.0]);
        const copy = g.clone();
        copy.translate(1.0,1.0);
        expect(copy.getPointN(0).getCoordinate()).to.deep.equal([2.0,2.0]);
        expect(copy.getPointN(1).getCoordinate()).to.deep.equal([5.0,6.0]);
    });
});