import React, { useEffect } from 'react';
import alasql from 'alasql';
import { fromOption, fromStore, toStore } from '../../app/Settings';
import ReactJson from 'react-json-view';
import './SqlView.css';
import { Loader, Navigation2, XCircle } from 'react-feather';
import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

export default observer(function SqlView() {
    useEffect(() => setupDatabase(), []);
    return (
        <div className="sql-view">
            <OverlayScrollbarsComponent
                className="sql-view__display"
                options={{ scrollbars: { autoHide: 'scroll' } }}
            >
                {viewer()}
            </OverlayScrollbarsComponent>
            <div className="sql-view__ctr-box">
                {!fromStore('sql-isInit', false) && tooltip()}
                <div className="sql-view__ctr-group">
                    <p>user@local&gt;</p>
                    <input
                        type="text"
                        className="sql-view__input"
                        placeholder="SELECT * FROM products"
                        value={fromStore('sql-query', '')}
                        onChange={(e) => toStore('sql-query', e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') query();
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

const tooltip = () => {
    return (
        <div className="sql-view__tooltip">
            <div className="sql-view__tooltip-header">
                <h4 className="sql-view__tooltip-title">Welcome</h4>
                <div
                    className="sql-view__tooltip-close-btn"
                    onClick={() => toStore('sql-isInit', true)}
                >
                    <XCircle />
                </div>
            </div>
            <div className="sql-view__tooltip-paragraph">
                <h5 className="sql-view__tooltip-title">How to start</h5>
                <ol className="sql-view__tooltip-list">
                    <li>
                        Check the{' '}
                        <Link className={'sql-view__url'} to={'/theory'}>
                            theory
                        </Link>
                    </li>
                    <li>Learn about databases, tables and entries</li>
                    <li>Execute commands using the console</li>
                    <li>Have fun!</li>
                </ol>
            </div>
        </div>
    );
};

const viewer = () => {
    return (
        <ReactJson
            src={dataset()}
            name="Visualizer"
            theme={fromOption('Display', 'Theme', 'rjv-default') as any}
            displayDataTypes={
                fromOption('Display', 'Data Types', false) as boolean
            }
            iconStyle={fromOption('Display', 'Icon Style', 'circle') as any}
            indentWidth={fromOption('Display', 'Indent Width', 4) as number}
            collapsed={
                fromOption('Display', 'Node collapsed', false) as boolean
            }
            displayObjectSize={
                fromOption('Display', 'Object size', true) as boolean
            }
        />
    );
};

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

const query = async () => {
    toStore('sql-isLoading', true);
    // Retrieve query
    const query = fromStore('sql-query', '');
    // Remove input
    toStore('sql-query', '');
    // Execute if value is meaningful
    if (query) {
        try {
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
        <button className="sql-view__input-btn" onClick={query}>
            <Navigation2 />
        </button>
    );
};

const dataset = () => {
    return {
        data: fromStore('sql-data', {}),
    };
};
