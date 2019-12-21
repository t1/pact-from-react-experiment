import {action, computed} from 'mobx'
import {DefaultApi} from "./api/apis";
import {UserData} from "./api/models";
import DataField from './model/DataField'
import {nonEmpty} from './model/Validators'

const api = new DefaultApi();

export class PersonalDataModel {
    public name = new DataField('name', 'Full name', nonEmpty);
    public email = new DataField('email', 'E-Mail', nonEmpty);
    public error = new DataField('error', 'error');

    @computed get valid() {
        return this.name.valid && this.email.valid
    }

    @action.bound
    public set(data: UserData) {
        this.name.value = data.name;
        this.email.value = data.email;
    }

    @action
    public load() {
        api.rootGet().then(this.set, this.failure)
    }

    @action.bound failure(error: string) {
        console.debug(error);
        this.error.value = error // doesn't work ?!?
    }


    @action
    public clearForm() {
        this.name.clear();
        this.email.clear()
    }

    public async submit() {
        // await request.post('...')
        this.clearForm()
    }
}
