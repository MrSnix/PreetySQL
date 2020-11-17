export type PrimitiveTypes = string | number | boolean | object;

export interface IComponent {
    input?: JSX.Element;
    onSave: Function;
}

export interface IOption {
    name: string;
    description?: string;
    value: PrimitiveTypes;
    type: 'string' | 'number' | 'options' | 'boolean';
    set?: PrimitiveTypes[];
    isEditable?: boolean;
    isDisabled?: boolean;
}

export interface IHeader {
    name: string;
    description?: string;
    options: IOption[];
}

export interface ISettings {
    headers: IHeader[];
    store: any;
}
