import {Web3Assert} from "../src/index";
import schemas from "../src/schemas";
import {validateOrder} from "./schemas";
import {order721} from "./data/orders";

if(!validateOrder(order721).valid) console.log(validateOrder.errors)

const assert = new Web3Assert()
const DOMAIN_DEFAULT = {
    name: 'ZeroEx',
    chainId: 1,
    verifyingContract: '0x0000000000000000000000000000000000000000',
    version: '1.0.0',
};
// @ts-ignore
const eipAsset = assert.eip712DomainSchema(DOMAIN_DEFAULT)

// const oo = eipAsset(DOMAIN_DEFAULT)

console.log(eipAsset)
if (!eipAsset.valid) console.log(eipAsset.errors)
// console.log(oo.valid,oo.errors)

// console.log(asset.isValid(DOMAIN_DEFAULT, schemas.eip712DomainSchema))
