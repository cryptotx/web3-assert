import {Schema, ValidationError, Validator, ValidatorResult} from 'jsonschema';
import {schemas, ScheamsAssert, IValidator} from './schemas';
import * as _ from 'lodash';

/**
 * A validator for [JSON-schemas](http://json-schema.org/)
 */
export class Web3Assert extends Validator {
    /**
     * Instantiates a SchemaValidator instance
     */
    constructor() {
        super()
        for (const schema of Object.values(schemas)) {
            this.addSchema(schema, schema.id);
        }
    }

    getValidator(): ScheamsAssert {
        const validator = {}
        for (const key in schemas) {
            validator[key] = this.compile(schemas[key])
        }
        return validator as ScheamsAssert
    }

    compile(schema: Schema, subSchemas?: Schema[]): IValidator {
        const that = this
        if (subSchemas !== undefined) {
            _.map(subSchemas, that.addSchema.bind(that))
        }
        const result: IValidator = function (value: any): ValidatorResult {
            const data: ValidatorResult = that.validate(value, schema)
            result.errors = data.errors as ValidationError[]
            return data
        }
        return result
    }


    /**
     * Check whether an instance properly adheres to a JSON schema
     * @param instance JS object in question
     * @param schema Schema to check against
     * @returns Whether or not the instance adheres to the schema
     */
    public isValid(instance: any, schema: Schema): boolean {
        const isValid = this.validate(instance, schema).errors.length === 0;
        return isValid;
    }
}
