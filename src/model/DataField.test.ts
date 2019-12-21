import {expect} from 'chai'
import DataField from './DataField'
import {nonEmpty} from './Validators'

describe('DataField', () => {
    it('should provide an initial empty value', () => {
        expect(new DataField('myField', 'My field').value).to.equal('')
    });

    it('should have an error message if the validator fails', () => {
        expect(new DataField('myField', 'My field', nonEmpty).errorMessage).to.equal('too short')
    });

    it('should allow updating the field value', () => {
        const field = new DataField('myField', 'My field');
        field.updateValue('123');
        expect(field.value).to.equal('123')
    });
});
