
interface StringValidator {
    isPass(s: string): boolean;

}

const lettersRegexp = /^[A-Za-z]+$/;
const numberRegexp = /^[0-9]+$/;

export class LettersOnLyValidator implements StringValidator {
    isPass(s: string) {
        return lettersRegexp.test(s);
    }
}

export class ZipCodeValidator implements StringValidator {
    isPass(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export class Validate {
    static id(id: any) {
        if (numberRegexp.test(id)) {
            return Number(id);
        }
        return -1;
    }
}

export function decorateArmour(target, key, descriptor) {
    const method = descriptor.value;
    const moreDef = 100;
    let ret;
    descriptor.value = (...args) => {
        args[0] = typeof args[0] === 'string' ? Number(args[0]) : args[0];
        args[0] += moreDef;
        ret = method.apply(target, args);
        return ret;
    };
    return descriptor;
}