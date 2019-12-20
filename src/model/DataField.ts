import {action, computed, observable} from 'mobx'
import {Validator} from "./Validator";

export default class DataField {
    @observable public value: string = '';

    @computed get valid(): boolean {
        return !this.validator || !this.validator(this.value)
    }

    @computed get errorMessage(): string | undefined {
        return this.validator && this.validator(this.value)
    }

    constructor(public name: string,
                public label: string,
                private validator?: Validator) {
    }

    @action
    public clear() {
        this.value = ''
    }

    @action
    public updateValue(newValue: string) {
        this.value = newValue
    }
}
