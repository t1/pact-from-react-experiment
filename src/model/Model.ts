import DataField from "./DataField";

interface Model {
    load(): Model;

    readonly fields: DataField[];

    readonly valid: boolean;

    submit(): void;
}

export default Model;
