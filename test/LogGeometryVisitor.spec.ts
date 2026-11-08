import { describe, it, expect, beforeEach } from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {

    let messages: string[];
    let visitor: LogGeometryVisitor;

    beforeEach(() => {
        messages = [];
        visitor = new LogGeometryVisitor((message) => messages.push(message));
    });

    it("should log an empty point", () => {
        new Point().accept(visitor);
        expect(messages).to.deep.equal(["Je suis un point vide."]);
    });

    it("should log a point", () => {
        new Point([2.0,3.0]).accept(visitor);
        expect(messages).to.deep.equal(["Je suis un point avec x=2.0 et y=3.0."]);
    });
    
    it("should log an empty LineString", () => {
        new LineString().accept(visitor);
        expect(messages).to.deep.equal(["Je suis une polyligne vide."]);
    });

    it("should log a LineString", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([1.0,1.0]),
            new Point([5.0,5.0])
        ]);
        g.accept(visitor);
        expect(messages).to.deep.equal(["Je suis une polyligne définie par 3 point(s)."]);
    });

    it("should use console.log by default", () => {
        const defaultVisitor = new LogGeometryVisitor();
        expect(() => new Point([2.0,3.0]).accept(defaultVisitor)).to.not.throw();
    });
});