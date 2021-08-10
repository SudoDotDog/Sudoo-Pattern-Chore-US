/**
 * @author WMXPY
 * @namespace PatternChoreUS
 * @description Zipcode
 */

import { Pattern } from "@sudoo/pattern";

export type CrateUSZipcodePatternOptions = {

    readonly role?: string;
};

export const createUSZipcodePattern = (options: CrateUSZipcodePatternOptions = {}): Pattern => {

    return {

        type: 'number',
        integer: true,
        role: options.role ?? 'zipcode',
        maximum: 99999,
        minimum: 10000,
    };
};
