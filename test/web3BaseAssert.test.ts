import {web3BaseAssert} from "../src/utils/assert";

(async () => {
    web3BaseAssert.isETHAddress({
        value: "0xf8becacec90bfc361c0a2c720839e08405a72f6d",
        variableName: 'verifyingContract'
    })
})()
