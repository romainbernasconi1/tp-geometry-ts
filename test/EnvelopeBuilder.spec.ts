import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => {
    it("should build an empty envelope without insert", () => {
        const builder = new EnvelopeBuilder();
        const result = builder.build();
        expect(result.isEmpty()).to.be.true;
    });
    it("should ignore empty coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([]);
        const result = builder.build();
        expect(result.isEmpty()).to.be.true;
    });
    it("should build an envelope from one coordinate", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([3.0,4.0]);
        const result = builder.build();
        expect(result.toString()).to.equal("[3,4,3,4]");
    });
    it("should build an envelope from several coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const result = builder.build();
        expect(result.getXmin()).to.equal(0.0);
        expect(result.getYmin()).to.equal(0.0);
        expect(result.getXmax()).to.equal(2.0);
        expect(result.getYmax()).to.equal(3.0);
        expect(result.toString()).to.equal("[0,0,2,3]");
    });
});