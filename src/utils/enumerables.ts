
interface StringValidator {
    isPass(s: string): boolean;
}

import * as _ from 'lodash';

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

/**
 *  装饰器测试
 * @param target 目标对象
 * @param key key
 * @param descriptor 装饰过的对象
 */
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
export function sortByProp(propName: string, pattern = '>') {
    let sortFunc: any;
    sortFunc = (obj1, obj2) => {
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

/**
 * 生成判断对象类型的高阶函数
 * @param type 对象类型
 */
export function isType(type: string) {
    return function(obj) {
        return Object.prototype.toString.call(obj) == `[object ${type}]`;
    };
}

/**
 * 获取元素在数组中的索引数组
 * @param arr 数组
 * @param num 数量
 * @param the 查看的元素
 */
export function indexArray(arr: any[], num: number, the: any) {
    const indexArr: any[] = [];
    let index = -1;
    for (let i = 0; i < num; i++) {
        index = _.indexOf(arr, the, index + 1);
        indexArr.push(index);
    }
    return indexArr;
}

/**
 * 查看数组中元素个数
 * @param {数组} array
 * @param {元素} the
 */
export function numberByArray(array: any[], the: any) {
    let c = _.cloneDeep(array);
    c = c.filter((element, index, array) => {
        return (element == the);
    });
    return c.length;
}

/**
 * 比较两个整形数组
 * @param a 数组a
 * @param b 数组b
 */
export function isEqual(a: number[],b: number[]): boolean{
    return _.isEqual(a.sort(),b.sort());
}
