import {action, computed} from 'mobx'
import DataField from './model/DataField'
import {nonEmpty} from './model/Validators'
import {PersonalDTO} from "./PersonalDTO";

function acceptJson(response: Response) {
    if (response.ok) return response.json();
    else throw new Error(response.statusText);
}

const empty = JSON.parse('{"name":"","email":""}');

export class PersonalDataModel {
    public name = new DataField('name', 'Full name', nonEmpty);
    public email = new DataField('email', 'E-Mail', nonEmpty);
    public error = new DataField('error', 'error');

    @computed get valid() {
        return this.name.valid && this.email.valid
    }

    @action.bound
    public set(data: PersonalDTO) {
        this.name.value = data.name;
        this.email.value = data.email;
    }

    @action
    public init() {
        this.set(empty);
        fetch('sample.json')
            .then(acceptJson)
            .then(this.set, this.failure)
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
