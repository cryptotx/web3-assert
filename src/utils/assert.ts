import BigNumber from "bignumber.js";
import * as _ from 'lodash';

//bytes
const HEX_REGEX = /^0x[0-9A-F]*$/i

const BYTE32_HEX_REGEX = / ^ 0x（[A-Fa-f0-9] {64}）$ /

const ADDRESS_HEX_REGEX = / ^ 0x[0-9a-fA-F] {40} $ /

export type AssertInfo = { value: string, variableName?: string }
// export type assertTypeInfo =assertInfo & {type?:string}
export const web3BaseAssert = {
    isArray(info: AssertInfo): void {
        web3BaseAssert.assert(!Array.isArray(info.value), web3BaseAssert.message('Array', info))
    },
    isBigNumber(info: AssertInfo): void {
        const isBigNumber = BigNumber.isBigNumber(info.value)
        web3BaseAssert.assert(isBigNumber, web3BaseAssert.message('BigNumber', info))
    },
    isNumber(info: AssertInfo): void {
        web3BaseAssert.assert(Number.isFinite(info.value), web3BaseAssert.message('number', info))
    },
    isString(info: AssertInfo): void {
        web3BaseAssert.assert(_.isString(info.value), web3BaseAssert.message('string', info))
        // web3BaseAssert.assert(new String(info.value) instanceof String, web3BaseAssert.message('string', info))
    },
    isFunction(info: AssertInfo): void {
        web3BaseAssert.assert(_.isFunction(info.value), web3BaseAssert.message('function', info))
    },
    isHexString(info: AssertInfo): void {
        web3BaseAssert.assert(HEX_REGEX.test(info.value), web3BaseAssert.message('HexString', info))
    },
    isETHAddress(info: AssertInfo): void {
        web3BaseAssert.isString(info)
        web3BaseAssert.assert(ADDRESS_HEX_REGEX.test(info.value), web3BaseAssert.message('ETHAddress', info))
    },
    isByte32Hex(info: AssertInfo): void {
        web3BaseAssert.isString(info)
        web3BaseAssert.assert(BYTE32_HEX_REGEX.test(info.value), web3BaseAssert.message('isByte32Hex', info))
    },
    assert(condition: boolean, message: string): void {
        if (!condition) {
            throw new Error(message)
        }
    },
    message(type: string, info: AssertInfo): string {
        const {variableName, value} = info
        if (type && variableName) {
            return `Expected ${variableName} to be of type ${type}, encountered: ${value}`
        }

        if (type && !variableName) {
            return `Expected type ${type}, encountered: ${value}`
        }

        if (!type && variableName) {
            return `Expected ${variableName} encountered: ${value}`
        }
        return `Expected encountered: ${value}`

    }
}
