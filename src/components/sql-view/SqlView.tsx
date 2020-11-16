import React from 'react';
import alasql from 'alasql';
import { fromStore, toStore } from '../../app/Settings';
import ReactJson from 'react-json-view'
import { observer } from 'mobx-react';
import './SqlView.css';

export default observer(function SqlView() {
    return (
        <div className="sql-view">
            <div className="sql-view__display">
                <ReactJson src={getDataset()} name="Visualizer" displayDataTypes={false} iconStyle="circle"/>
            </div>
            <div className="sql-view__ctr-box">
                <div className="sql-view__ctr-group">
                    <p>user@local&gt;</p>
                    <input type="text" className="sql-view__input" placeholder="SELECT * FROM table" value={fromStore('sql-query', '')} onChange={e => toStore("sql-query", e.target.value)} onKeyPress={e => { if (e.key === 'Enter') execQuery() }} />
                    <button className="sql-view__input-btn" onClick={execQuery}>Send</button>
                </div>
            </div>
        </div>
    )
})

const execQuery = () => {
    // Retrieve query
    const query = fromStore('sql-query', '');
    // Remove input
    toStore("sql-query", "")
    // Execute if value is meaningful
    if (query) {
        try {
            toStore('sql-data', alasql(query))
        } catch (err) {
            if(err.name !== 'TypeError')
                toStore('sql-data', { error: err.name + ': ' + err.message })
            else
                toStore('sql-data', { error: 'Unable to decode input as SQL instruction' })
        }
    }
}

const getDataset = () => {
    return {
        data: fromStore("sql-data", {})
    }
};