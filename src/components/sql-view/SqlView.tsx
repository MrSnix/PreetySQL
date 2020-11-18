import React, { useEffect } from 'react';
import alasql from 'alasql';
import { fromOption, fromStore, toStore } from '../../app/Settings';
import ReactJson from 'react-json-view';
import { observer } from 'mobx-react';
import './SqlView.css';
import { Loader, Navigation2 } from 'react-feather';

export default observer(function SqlView() {
    useEffect(() => setupDatabase(), []);

    return (
        <div className="sql-view">
            <div className="sql-view__display">
                <ReactJson
                    src={dataset()}
                    name="Visualizer"
                    theme={fromOption('Display', 'Theme', 'rjv-default') as any}
                    displayDataTypes={
                        fromOption('Display', 'Data Types', false) as boolean
                    }
                    iconStyle={
                        fromOption('Display', 'Icon Style', 'circle') as any
                    }
                    indentWidth={
                        fromOption('Display', 'Indent Width', 4) as number
                    }
                    collapsed={
                        fromOption(
                            'Display',
                            'Node collapsed',
                            false
                        ) as boolean
                    }
                    displayObjectSize={
                        fromOption('Display', 'Object size', true) as boolean
                    }
                />{' '}
            </div>
            <div className="sql-view__ctr-box">
                <div className="sql-view__ctr-group">
                    <p>user@local&gt;</p>
                    <input
                        type="text"
                        className="sql-view__input"
                        placeholder="SELECT * FROM products"
                        value={fromStore('sql-query', '')}
                        onChange={(e) => toStore('sql-query', e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') execQuery();
                        }}
                    />
                    {fromStore('sql-isLoading', false)
                        ? spinner()
                        : navigation()}
                </div>
            </div>
        </div>
    );
});

const setupDatabase = () => {
    alasql.options.valueof = fromOption(
        'Database',
        'Use valueof()',
        false
    ) as boolean;
    alasql.options.datetimeformat = fromOption(
        'Database',
        'DateTime Format',
        'sql'
    ) as string;
    alasql.options.casesensitive = fromOption(
        'Database',
        'Case Sensitive',
        true
    ) as boolean;
    alasql.options.autocommit = fromOption(
        'Database',
        'Autocommit',
        true
    ) as boolean;
    alasql.options.nan = fromOption(
        'Database',
        'Check for NaN',
        false
    ) as boolean;
    alasql.options.cache = fromOption('Database', 'Use cache', true) as boolean;
    alasql.options.nocount = fromOption(
        'Database',
        'Do not count',
        false
    ) as boolean;
};

const execQuery = async () => {
    toStore('sql-isLoading', true);
    // Retrieve query
    const query = fromStore('sql-query', '');
    // Remove input
    toStore('sql-query', '');
    // Execute if value is meaningful
    if (query) {
        try {
            await new Promise((r) => setTimeout(r, 3000));
            toStore('sql-data', alasql(query));
        } catch (err) {
            if (err.name !== 'TypeError')
                toStore('sql-data', { error: err.name + ': ' + err.message });
            else
                toStore('sql-data', {
                    error: 'Unable to decode input as SQL instruction',
                });
        }
    }
    toStore('sql-isLoading', false);
};

const spinner = () => {
    return (
        <div className="sql-view__input-btn">
            <Loader className="sql-view__loader" />
        </div>
    );
};

const navigation = () => {
    return (
        <button className="sql-view__input-btn" onClick={execQuery}>
            <Navigation2 />
        </button>
    );
};

const dataset = () => {
    return {
        data: fromStore('sql-data', {}),
    };
};
