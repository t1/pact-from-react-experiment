import {observer} from "mobx-react-lite";
import * as React from "react";
import Form from "react-bootstrap/Form";
import DataField from "../model/DataField";

const InputField = observer(({field}: { field: DataField }) => (
    <Form.Group controlId={field.name}>
        <Form.Label>{field.label}</Form.Label>
        <Form.Control type={field.type} value={field.value}
                      // className={field.valid ? "" : "is-invalid"}
                      onChange={event => field.updateValue(event.target.value)}
        />
        <Form.Text className="text-danger">{field.valid ? (
            <span>&nbsp;</span>) : field.errorMessage}</Form.Text>
    </Form.Group>
));

export default InputField;
