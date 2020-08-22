import * as React from 'react'
import Form from "react-bootstrap/Form";
import Model from "../model/Model";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const DataForm = ({model}: { model: Model }) => (
    <Form>
        {model.fields.map(f => (
            <InputField field={f}/>
        ))}
        <SubmitButton model={model}/>
    </Form>
);

export default DataForm;
