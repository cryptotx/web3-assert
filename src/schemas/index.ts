import * as addressSchema from './base/address_schema.json';
import * as callDataSchema from './base/call_data_schema.json';
import * as ecSignatureParameterSchema from './sign/ec_signature_parameter_schema.json';
import * as ecSignatureSchema from './sign/ec_signature_schema.json';
import * as eip712DomainSchema from './sign/eip712_domain_schema.json';
import * as eip712TypedDataSchema from './sign/eip712_typed_data_schema.json';
import * as hexSchema from './base/hex_schema.json';
import * as jsNumber from './base/js_number_schema.json';
import * as numberSchema from './base/number_schema.json';
import * as tokenSchema from './base/token_schema.json';
import * as txDataSchema from './block/tx_data_schema.json';
import * as wholeNumberSchema from './base/whole_number_schema.json';

export default {
    numberSchema,
    addressSchema,
    callDataSchema,
    hexSchema,
    ecSignatureParameterSchema,
    ecSignatureSchema,
    eip712DomainSchema,
    eip712TypedDataSchema,
    tokenSchema,
    jsNumber,
    txDataSchema,
    wholeNumberSchema,
};
