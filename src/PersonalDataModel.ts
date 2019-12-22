import {action, computed} from 'mobx'
import DataField from './model/DataField'
import {nonEmpty} from './model/Validators'
import {PersonData} from "./PersonData";
import PersonDataService from "./PersonDataService";

const api = new PersonDataService("http://localhost:8000");

export class PersonalDataModel {
    public name = new DataField('name', 'Full name', nonEmpty);
    public email = new DataField('email', 'E-Mail', nonEmpty);
    public error = new DataField('error', 'error');

    @computed get valid() {
        return this.name.valid && this.email.valid
    }

    @action.bound
    public set(data: PersonData) {
        this.name.value = data.name;
        this.email.value = data.email;
    }

    @action
    public load() {
        api.getPersonalData().then(this.set, this.failure)
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
