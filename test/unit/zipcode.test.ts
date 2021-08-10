/**
 * @author WMXPY
 * @namespace PatternChoreUS
 * @description Zipcode
 * @override Unit Test
 */

import { Pattern, validatePatternSchema } from "@sudoo/pattern";
import { Verifier, VerifyResult } from "@sudoo/verify";
import { expect } from "chai";
import * as Chance from "chance";
import { createUSZipcodePattern } from "../../src";

describe('Given (US Zipcode) Patterns', (): void => {

    const chance: Chance.Chance = new Chance('pattern-core-us-zipcode');

    it('should be able to create pattern object', (): void => {

        const pattern: Pattern = createUSZipcodePattern();
        const validation: boolean = validatePatternSchema(pattern);

        expect(validation).to.be.true;
    });

    it('should be able to verify simple zipcode', (): void => {

        const pattern: Pattern = createUSZipcodePattern();
        const verifier: Verifier = Verifier.create(pattern);

        const result: VerifyResult = verifier.verify(chance.zip());

        expect(result).to.be.deep.equal({

            succeed: true,
            invalids: [],
        });
    });
});
