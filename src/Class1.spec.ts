import { expect } from "chai";
import * as Mocha from "mocha";

import { Class1 } from "./Class1";

describe("Testing class 1", () => {
    let testRunner: Class1;
    beforeEach(() => {
        testRunner = new Class1();
    });

    it("should fail", () => {
        expect(true).to.equal(false);
    });
});
