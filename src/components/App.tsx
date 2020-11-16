import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BaseView from '../components/base-view/BaseView';
import SampleView from '../components/sample-view/SampleView';
import SettingsView from '../components/setting-view/SettingsView';

// ---------

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BaseView view={SampleView} background="/assets/home.jpg" />
                </Route>
                <Route path="/theory/:more">
                    <BaseView view={SampleView} background="/assets/theory.jpg" nav />
                </Route>
                <Route path="/theory">
                    <BaseView view={SampleView} background="/assets/theory.jpg" />
                </Route>
                <Route path="/settings/:more">
                    <BaseView view={SettingsView} background="/assets/settings.jpg" nav dark />
                </Route>
                <Route path="/settings">
                    <BaseView view={SettingsView} background="/assets/settings.jpg" dark />
                </Route>
                <Route path="/author/:more">
                    <BaseView view={SampleView} background="/assets/author.jpg" nav dark />
                </Route>
                <Route path="/author">
                    <BaseView view={SampleView} background="/assets/author.jpg" dark />
                </Route>
            </Switch>
        </Router>
    );
}