/**
 * @author WMXPY
 * @namespace PatternChoreUS
 * @description Zipcode
 */

import { Pattern } from "@sudoo/pattern";

export type CrateUSZipcodePatternOptions = {

    readonly invalidMessage?: (value?: any) => string;
    readonly role?: string;
};

export const createUSZipcodePattern = (options: CrateUSZipcodePatternOptions = {}): Pattern => {

    return {

        type: 'custom',
        role: options.role ?? 'US-zipcode',
        validate: (value: any) => {

            const intValue: number = Number(value);

            if (Math.floor(intValue) !== intValue) {
                return false;
            }
            if (intValue < 10000) {
                return false;
            }
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            if (intValue > 99999) {
                return false;
            }
            return true;
        },
        invalidMessage: options.invalidMessage ?? ((value?: any) => {

            return `${value} is not a valid US zipcode`;
        }),
    };
};
