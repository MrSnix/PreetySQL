import React, { useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SQL_DB from '../app/Database';
import { toStore } from '../app/Settings';
import BaseView from '../components/base-view/BaseView';
import SettingsView from '../components/setting-view/SettingsView';
import AboutView from './about-view/AboutView';
import MissingView from './missing-view/MissingView';
import SqlView from './sql-view/SqlView';
import TheoryView from './theory-view/TheoryView';

// ---------

export default function App() {
    // It is called here to prevent init each time page is changed
    useEffect(() => {
        SQL_DB.INIT();
        toStore('sql-isInit', false);
    }, []);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <BaseView
                        view={SqlView}
                        name={'PreetySQL'}
                        description={'Client with in-memory database'}
                        background={'/assets/home.jpg'}
                    />
                </Route>
                <Route path="/theory">
                    <BaseView
                        view={TheoryView}
                        name={'Theory'}
                        description={'Structured Query Language'}
                        background={'/assets/theory.jpg'}
                    />
                </Route>
                <Route path="/settings">
                    <BaseView
                        view={SettingsView}
                        name={'Settings'}
                        description={'Your favourite preferences'}
                        background={'/assets/settings.jpg'}
                    />
                </Route>
                <Route path="/about">
                    <BaseView
                        view={AboutView}
                        name={'About'}
                        description={'Frequently Asked Questions'}
                        background={'/assets/about.jpg'}
                    />
                </Route>
                <Route component={MissingView} />
            </Switch>
        </Router>
    );
}
