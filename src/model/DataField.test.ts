import {expect} from 'chai'
import DataField from './DataField'
import {nonEmpty} from './Validators'

describe('DataField', () => {
    it('should provide an initial empty value', () => {
        expect(new DataField('myField', 'My field').value).to.equal('')
    });

    // it('should be valid when no validator is configured', () => {
    //     expect(new DataField('myField', 'My field').valid).to.be.true
    // });
    //
    // it('should be valid if the validator succeeds', () => {
    //     expect(new DataField('myField', 'My field', nonEmpty).valid).to.be.true
    // });
    //
    // it('should be valid if the validator succeeds', () => {
    //     expect(new DataField('myField', 'My field', nonEmpty).valid).to.be.true
    // });
    //
    // it('should be invalid if the validator fails', () => {
    //     expect(new DataField('myField', 'My field', nonEmpty).valid).to.be.false
    // });

    it('should have an error message if the validator fails', () => {
        expect(new DataField('myField', 'My field', nonEmpty).errorMessage).to.equal('email too short')
    });

    it('should allow updating the field value', () => {
        const field = new DataField('myField', 'My field');
        field.updateValue('123');
        expect(field.value).to.equal('123')
    });
});
