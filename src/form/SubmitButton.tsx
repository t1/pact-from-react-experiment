import {observer} from "mobx-react-lite";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Model from "../model/Model";

const SubmitButton = observer(({model}: { model: Model }) => (
    <Button type="submit" disabled={!model.valid} onClick={() => model.submit()}>Submit</Button>
));

export default SubmitButton;
