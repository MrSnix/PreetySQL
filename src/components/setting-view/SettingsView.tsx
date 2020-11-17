import React, { ElementType } from 'react';
import { Check, CornerDownRight, Edit3, X } from 'react-feather';
import { IComponent, IHeader, IOption } from './models/ISettings';
import Settings, { toOption, toStore, fromStore } from '../../app/Settings';
import './SettingsView.css';
import { observer } from 'mobx-react';

const headers = (e: IHeader) => {
    return (
        <div key={e.name} className="settings-view__header-container">
            <div className="settings-view__header">
                <h4 className="settings-view__header-title">{e.name}</h4>
                {e.description && (
                    <p className="settings-view__header-description">
                        {e.description}
                    </p>
                )}
            </div>
            <ul className="settings-view__options">
                {e.options.map((o) => option(e, o))}
            </ul>
        </div>
    );
};

const option = (e: IHeader, o: IOption) => {
    const __disabledComponent = (
        <li key={o.name} className="settings-view__option-item-disabled">
            <div className="settings-view__item-controller">
                <p className="settings-view__item-name">{o.name}</p>
                <p className="settings-view__item-value">{o.value}</p>
            </div>
            {o.description && (
                <p className="settings-view__item-description">
                    <CornerDownRight className="settings-view__item-icon" />
                    {o.description}
                </p>
            )}
        </li>
    );

    const __internalComponent = (
        <li key={o.name} className="settings-view__option-item">
            <div className="settings-view__item-controller">
                {controller(e, o)}
            </div>
            {o.description && (
                <p className="settings-view__item-description">
                    <CornerDownRight className="settings-view__item-icon" />
                    {o.description}
                </p>
            )}
        </li>
    );

    return !o.isDisabled ? __internalComponent : __disabledComponent;
};

const controller = (e: IHeader, o: IOption) => {
    const { input, onSave } = renderer(e, o);

    const __viewComponent = (
        <>
            <p className="settings-view__item-name">{o.name}</p>
            <p className="settings-view__item-value">
                {o.value}
                {input && (
                    <Edit3
                        className="settings-view__item-icon"
                        onClick={() => toOption(e, { ...o, isEditable: true })}
                    />
                )}
            </p>
        </>
    );

    const __editComponent = (
        <>
            <p className="settings-view__item-name">{o.name}</p>
            <div className="settings-view__item-renderer">
                {input}
                {o.type !== 'boolean' && o.type !== 'options' && (
                    <X
                        className="settings-view__item-icon"
                        onClick={() => toOption(e, { ...o, isEditable: false })}
                    />
                )}
                {o.type !== 'boolean' && o.type !== 'options' && (
                    <Check
                        className="settings-view__item-icon"
                        onClick={() => onSave && onSave()}
                    />
                )}
            </div>
        </>
    );

    return o.isEditable || o.type === 'boolean' || o.type === 'options'
        ? __editComponent
        : __viewComponent;
};

const renderer = (e: IHeader, o: IOption) => {
    const obj: IComponent = {
        onSave: () =>
            toOption(e, {
                ...o,
                value: fromStore(o.name, o.value),
                isEditable: false,
            }),
    };

    switch (o.type) {
        case 'boolean':
            obj.input = (
                <label className="settings-view__switch">
                    {' '}
                    <input
                        type="checkbox"
                        className="settings-view__checkbox"
                        defaultChecked={o.value as boolean}
                        onChange={() => toOption(e, { ...o, value: !o.value })}
                    />{' '}
                    <span className="settings-view__slider" />
                </label>
            );
            break;
        case 'number':
            obj.input = (
                <input
                    type="number"
                    className="settings-view__input"
                    defaultValue={o.value as number}
                    onChange={(ev) => toStore(o.name, ev.target.value)}
                />
            );
            break;
        case 'string':
            obj.input = (
                <input
                    type="text"
                    className="settings-view__input"
                    defaultValue={fromStore(o.name, o.value)}
                    onChange={(e) => toStore(o.name, e.target.value)}
                />
            );
            break;
        case 'options':
            obj.input = (
                <select
                    className="settings-view__input"
                    defaultValue={o.value as string}
                    onChange={(ev) =>
                        toOption(e, { ...o, value: ev.target.value })
                    }
                >
                    {' '}
                    {o.set?.map((e, idx) => (
                        <option key={idx + o.name} value={e as string}>
                            {e}
                        </option>
                    ))}{' '}
                </select>
            );
            break;
        default:
            throw new Error('Unable to provide a renderer');
    }

    return obj;
};

export default observer(function SettingsView(props: {
    name?: string;
    description?: string;
    view?: ElementType;
    nav?: boolean;
}) {
    return (
        <div className="settings-view">
            {' '}
            {Settings.headers.map((e) => headers(e))}
        </div>
    );
});
