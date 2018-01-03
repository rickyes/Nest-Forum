
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

/**
 * 根据数组元素的属性排序数组
 * @param propName 属性
 * @param pattern 运算符
 */
export function sortByProp(propName, pattern = '>') {
    let sortFunc: any;
    sortFunc =  (obj1, obj2) => {
        if (eval(`${obj1[propName]} ${pattern} ${obj2[propName]}`)) {
            return 1;
        } else if (obj1[propName] === obj2[propName]) {
            return 0;
        } else {
            return -1;
        }
    };
    return sortFunc;
}