//

import {Web3Assert} from "../src/index";
import {Schema} from "jsonschema";

const userSchema = {
    type: "object",
    properties: {
        username: {type: "string", nullable: true},
    },
};

const accountSchema = {
    type: "object",
    properties: {
        address: {type: "string"},
        config: {type: "string"},
        profileImgUrl: {type: "string"},
        user: {...userSchema, nullable: true},
    },
    required: ["address", "config", "profileImgUrl", "user"],
};

const feeSchema = {
    type: "object",
    properties: {
        account: accountSchema,
        basisPoints: {type: "string"},
    },
    required: ["account", "basisPoints"],
};

// type PartialOrderV2Type = Omit<OrderV2,"makerAssetBundle" | "takerAssetBundle" | "protocolData"> & {
//     makerAssetBundle: object;
//     takerAssetBundle: object;
//     protocolData: object;
// };

const orderV2Schema = {
    type: "object",
    properties: {
        createdDate: {type: "string"},
        closingDate: {type: "string", nullable: true},
        listingTime: {type: "number"},
        expirationTime: {type: "number"},
        orderHash: {type: "string", nullable: true},
        maker: accountSchema,
        taker: {...accountSchema, nullable: true},
        protocolData: {type: "object"},
        protocolAddress: {type: "string"},
        currentPrice: {type: "string"},
        makerFees: {type: "array", items: feeSchema},
        takerFees: {type: "array", items: feeSchema},
        side: {type: "string"},
        orderType: {type: "string"},
        cancelled: {type: "boolean"},
        finalized: {type: "boolean"},
        markedInvalid: {type: "boolean"},
        clientSignature: {type: "string", nullable: true},
        makerAssetBundle: {type: "object"},
        takerAssetBundle: {type: "object"},
    },
    required: [
        "createdDate",
        "closingDate",
        "listingTime",
        "expirationTime",
        "orderHash",
        "maker",
        "taker",
        "protocolData",
        "protocolAddress",
        "currentPrice",
        "makerFees",
        "takerFees",
        "side",
        "orderType",
        "cancelled",
        "finalized",
        "markedInvalid",
        "clientSignature"
    ],
};

const offerItemSchama = {
    type: "object",
    properties: {
        itemType: {
            "type": "number",
            "enum": [0, 1, 2, 3]
        },
        token: {type: "string"},
        identifierOrCriteria: {type: "string"},
        startAmount: {type: "string"},
        endAmount: {type: "string"},
    },
    required: ["itemType", "token", "identifierOrCriteria", "startAmount", "endAmount"]
}

const considerationItemSchama = {
    type: "object",
    properties: {
        itemType: {
            "type": "number",
            "enum": [0, 1, 2, 3]
        },
        token: {type: "string"},
        identifierOrCriteria: {type: "string"},
        startAmount: {type: "string"},
        endAmount: {type: "string"},
        recipient: {type: "string"}
    },
    required: ["itemType", "token", "identifierOrCriteria", "startAmount", "endAmount", "recipient"],
}
const orderComponentsSchama = {
    type: "object",
    properties: {
        offerer: {type: "string"},
        offer: {"type": "array", "items": offerItemSchama},
        consideration: {"type": "array", "items": considerationItemSchama},
        startTime: {type: "string"},
        endTime: {type: "string"},
        orderType: {type: "number", "enum": [0, 1, 2, 3]},
        zone: {type: "string"},
        zoneHash: {type: "string"},
        salt: {type: "string"},
        conduitKey: {type: "string"},
        counter: {type: "number"}
    },
    required: [
        "offerer",
        "offer",
        "consideration",
        "startTime",
        "endTime",
        "orderType",
        "zone",
        "zoneHash",
        "salt",
        "conduitKey",
        "counter"
    ]
}

const orderParametersSchama = {
    type: "object",
    properties: {
        offerer: {type: "string"},
        offer: {"type": "array", "items": offerItemSchama},
        consideration: {"type": "array", "items": considerationItemSchama},
        startTime: {type: "string"},
        endTime: {type: "string"},
        orderType: {type: "number", "enum": [0, 1, 2, 3]},
        zone: {type: "string"},
        zoneHash: {type: "string"},
        salt: {type: "string"},
        conduitKey: {type: "string"}
    },
    required: [
        "offerer",
        "offer",
        "consideration",
        "startTime",
        "endTime",
        "orderType",
        "zone",
        "zoneHash",
        "salt",
        "conduitKey"
    ]
}
const orderWithCounterSchema = {
    type: "object",
    properties: {
        parameters: {...orderComponentsSchama, nullable: true},
        signature: {type: "string", nullable: true}
    },
    required: [
        "parameters",
        "signature",
    ],
};

const orderSchema = {
    type: "object",
    properties: {
        parameters: {...orderParametersSchama, nullable: true},
        signature: {type: "string", nullable: true}
    },
    required: [
        "parameters",
        "signature",
    ],
};

const assert = new Web3Assert()
export const validateOrderV2 = assert.compile(orderV2Schema as Schema)
export const validateOrderWithCounter = assert.compile(orderWithCounterSchema as Schema)
export const validateOrder = assert.compile(orderSchema as Schema)
//
