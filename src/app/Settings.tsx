import { action, observable } from "mobx"
import { IHeader, IOption, ISettings, PrimitiveTypes } from "../components/setting-view/models/ISettings";

const Settings: ISettings = observable({
    "headers": [
        {
            "name": "General",
            "description": "Common settings",
            "options": [
                {
                    "name": "Rule-1",
                    "description": "My cool description",
                    "value": "Value",
                    "type": "string"
                },
                {
                    "name": "Rule-2",
                    "description": "My cool description",
                    "value": 120,
                    "type": "number"
                },
                {
                    "name": "Rule-3",
                    "description": "My cool description",
                    "value": true,
                    "type": "boolean"
                },
                {
                    "name": "Rule-4",
                    "description": "My cool description",
                    "value": "Option-C",
                    "type": 'options',
                    "set": ['Option-A', 'Option-B', 'Option-C']
                }
            ]
        }
    ],
    "store": {}
})


const fn0 = (header: IHeader, option: IOption) => {
   Settings.headers = Settings.headers.map(e => {
        if(e.name === header.name) e.options = e.options.map(o => (o.name === option.name) ? option : o)
        return e;
   })
};
const fn1 = (key: string, value: PrimitiveTypes) => { if(value) Settings.store[key] = value }
const fn2 = (key: string, defaultValue: PrimitiveTypes) => {  return Settings.store[key] ? Settings.store[key] : defaultValue }

export const toOption = action(fn0);

export const toStore = action(fn1);
export const fromStore = action(fn2);


export default Settings;