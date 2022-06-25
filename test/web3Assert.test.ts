import {Web3Assert} from "../src/index";
import {validateOrder} from "./schemas";
import {order721} from "./data/orders";
import {schemas} from "../src/schemas";
import {AssertInfo} from "../src/utils/assert";


if (!validateOrder(order721).valid) console.log(validateOrder.errors)

const web3Assert = new Web3Assert()
const assert = web3Assert.getValidator()
const oo1 = assert.addressSchema("")
console.log(oo1.valid)
const DOMAIN_DEFAULT = {
    name: 'ZeroEx',
    chainId: 1,
    verifyingContract: '0x0000000000000000000000000000000000000000',
    version: '1.0.0',
};
const eipAsset = assert.eip712DomainSchema(DOMAIN_DEFAULT)
if (!eipAsset.valid) console.log(eipAsset.errors)
// console.log(oo.valid,oo.errors)

// console.log(asset.isValid(DOMAIN_DEFAULT, schemas.eip712DomainSchema))
