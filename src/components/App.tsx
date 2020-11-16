import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseView from '../components/base-view/BaseView';
import SampleView from '../components/sample-view/SampleView';
import SettingsView from '../components/setting-view/SettingsView';
import SqlView from './sql-view/SqlView';

// ---------

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BaseView view={SqlView} name={"AlaSQL"} description={"In-memory database on browser"} />
                </Route>
                <Route path="/theory">
                    <BaseView view={SampleView} />
                </Route>
                <Route path="/settings">
                    <BaseView view={SettingsView} />
                </Route>
                <Route path="/author">
                    <BaseView view={SampleView} />
                </Route>
            </Switch>
        </Router>
    );
}