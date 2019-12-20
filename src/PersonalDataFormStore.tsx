import {action, computed} from 'mobx'
import DataField from './model/DataField'
import {nonEmpty} from './model/Validators'

export class PersonalDataFormStore {
    public fullName = new DataField('fullName', 'Full name', nonEmpty);
    public email = new DataField('email', 'E-Mail', nonEmpty);

    @computed
    get valid() {
        return this.fullName.valid && this.email.valid
    }

    @action
    public clearForm() {
        this.fullName.clear();
        this.email.clear()
    }

    public async submit() {
        // await request.post('...')
        this.clearForm()
    }
}
