import React from 'react';
import AlaSQL from 'alasql';
import './SqlView.css';
import { fromStore, toStore } from '../../app/Settings';

export default function SqlView() {
    return (
        <div className="sql-view">
            <div className="sql-view__display">
                {display()}
            </div>
            <div className="sql-view__ctr-box">
                <div className="sql-view__ctr-group">
                    <p>user@local&gt;</p>
                    <input type="text" className="sql-view__input" placeholder="SELECT * FROM table" defaultValue={fromStore("sql-query", "")} onChange={e => toStore("sql-query", e.target.value)} />
                    <button className="sql-view__input-btn" onClick={execQuery}>Send</button>
                </div>
            </div>
        </div>
    )
}

const execQuery = () => {
    // Retrieve query
    const query = fromStore('sql-query', '');
    // Execute if value is meaningful
    if (query) {
        try {
            AlaSQL(query, null, ((data, err) => {
                toStore("sql-data", data);
                if(err) toStore("sql-err", err);
            }))
        } catch (e) {
            toStore("sql-err", e);
        }
    }
}

const display = (): JSX.Element => {
    return <p>
        {JSON.stringify(fromStore("sql-data", ''))}
    </p>
}