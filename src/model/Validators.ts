import {Validator} from "./Validator";

export const nonEmpty: Validator = (value: string) => {
    if (value.length <= 0) return 'too short';
    return undefined;
};
