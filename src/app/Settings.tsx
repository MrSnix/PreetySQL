import { action, observable } from 'mobx';
import {
    IHeader,
    IOption,
    ISettings,
    PrimitiveTypes,
} from '../components/setting-view/models/ISettings';

const Settings: ISettings = observable({
    headers: [
        {
            name: 'Display',
            description: 'Data viewer settings',
            options: [
                {
                    name: 'Theme',
                    value: 'rjv-default',
                    description:
                        'Style of color schema (light-only are displayed)',
                    type: 'options',
                    set: [
                        'rjv-default',
                        'apathy:inverted',
                        'bright:inverted',
                        'grayscale:inverted',
                        'shapeshifter:inverted',
                        'summerfruit:inverted',
                    ],
                },
                {
                    name: 'Icon Style',
                    description: 'Style of expand/collapse icons',
                    value: 'circle',
                    type: 'options',
                    set: ['circle', 'square', 'triangle'],
                },
                {
                    name: 'Indent Width',
                    description: 'Set the indent-width for nested objects',
                    value: 4,
                    type: 'number',
                },
                {
                    name: 'Node collapsed',
                    description:
                        'When enabled, all nodes will be collapsed by default',
                    value: false,
                    type: 'boolean',
                },
                {
                    name: 'Object size',
                    description:
                        'When enabled, objects and arrays are labeled with size',
                    value: true,
                    type: 'boolean',
                },
                {
                    name: 'Data Types',
                    description: 'When enabled, data type labels prefix values',
                    value: false,
                    type: 'boolean',
                },
            ],
        },
        {
            name: 'Database',
            description: 'Schema settings',
            options: [
                {
                    name: 'Use valueof()',
                    description:
                        'When enabled, convert all values with .valueOf() function before comparing',
                    value: false,
                    type: 'boolean',
                },
                {
                    name: 'DateTime Format',
                    description: 'How to handle DATE and DATETIME types',
                    value: 'sql',
                    type: 'options',
                    set: ['sql', 'javascript'],
                },
                {
                    name: 'Case Sensitive',
                    description:
                        'When enabled, table and column names are case sensitive and converted to lower-case',
                    value: true,
                    type: 'boolean',
                },
                {
                    name: 'Autocommit',
                    description:
                        'When enabled, every database operation is a transaction that is committed when performed',
                    value: true,
                    type: 'boolean',
                },
                {
                    name: 'Check for NaN',
                    description:
                        'When enabled, check for NaN and convert it to undefined',
                    value: false,
                    type: 'boolean',
                },
                {
                    name: 'Use cache',
                    description:
                        'When enabled, cache is used to improve output performance',
                    value: true,
                    type: 'boolean',
                },
                {
                    name: 'Do not count',
                    description:
                        'When enabled, stops the message that shows the count of the number of rows affected by a query',
                    value: false,
                    type: 'boolean',
                },
            ],
        },
    ],
    store: {},
});

const fn0 = (header: IHeader, option: IOption) => {
    Settings.headers = Settings.headers.map((e) => {
        if (e.name === header.name)
            e.options = e.options.map((o) =>
                o.name === option.name ? option : o
            );
        return e;
    });
};
const fn1 = (key: string, value: PrimitiveTypes) => {
    Settings.store[key] = value;
};
const fn2 = (key: string, defaultValue: PrimitiveTypes) => {
    return Settings.store[key] ? Settings.store[key] : defaultValue;
};
const fn3 = (header: string, option: string, defaultValue: PrimitiveTypes) => {
    let value = defaultValue;
    const h1 = Settings.headers.filter((e) => e.name === header);

    if (h1.length === 1) {
        const o1 = h1[0].options.filter((e) => e.name === option);

        if (o1.length === 1) value = o1[0].value;
    }

    return value;
};

export const toOption = action(fn0);
export const toStore = action(fn1);

export const fromStore = fn2;
export const fromOption = fn3;

export default Settings;
