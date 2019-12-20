import {observer} from 'mobx-react-lite'
import * as React from 'react'
import DataField from "./model/DataField";
import {PersonalDataModel} from "./PersonalDataModel";

export const PersonalDataForm = () => {
    const personalData = new PersonalDataModel();

    personalData.init();

    const InputField = observer(({field}: { field: DataField }) => (
        <div>
            <label htmlFor={field.name}>{field.label}</label>
            <input id={field.name} type='text' value={field.value} onChange={event => field.updateValue(event.target.value)}/>
            <div>{field.valid ? '' : field.errorMessage}</div>
        </div>
    ));

    const SubmitButton = observer(() => (
        <div>
            <input type='submit' disabled={!personalData.valid} onClick={() => personalData.submit()}/>
        </div>
    ));

    return (
        <div>
            <InputField field={personalData.name}/>
            <InputField field={personalData.email}/>
            <div>{personalData.error.value}</div>
            <SubmitButton/>
        </div>
    )
};