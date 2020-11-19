import React, { ElementType } from 'react';
import './BaseView.css';

import { Home, Sliders, BookOpen, ArrowLeft, HelpCircle } from 'react-feather';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Location } from 'history';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

export default function BaseView(props: {
    name?: string;
    description?: string;
    view?: ElementType;
    nav?: boolean;
    background?: string;
    dark?: boolean;
}) {
    const { name, description, view: View, nav, background, dark } = props;
    const location = useLocation();

    return (
        <div className="base-view">
            <div className="base-view__content">
                <div
                    className="base-view__sidebar"
                    style={{
                        color: !dark ? '#000000' : '#FFFFFF',
                    }}
                >
                    <div className="base-view__header-wrapper">
                        <h1 className="base-view__header">
                            {name ? name : 'Title'}
                        </h1>
                        <h2 className="base-view__sub-header">
                            {description ? description : 'Subtitle'}
                        </h2>
                    </div>
                    <div
                        className="base-view__sidebar-background"
                        style={{
                            backgroundImage: 'url(' + background + ')',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                        }}
                    />
                    <div className="base-view__copyright">
                        <p>Developed with ❤️</p>
                    </div>
                </div>
                <div className="base-view__app-wrapper">
                    {nav && breadcrumbs(location)}

                    <OverlayScrollbarsComponent
                        className="base-view__app"
                        options={{ scrollbars: { autoHide: 'scroll' } }}
                    >
                        {View && <View />}
                    </OverlayScrollbarsComponent>
                    <div className="base-view__menu">
                        <ul>
                            <li>
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="base-view__menu-active"
                                >
                                    <Home />
                                    <h4 className="base-view__menu-tile">
                                        Home
                                    </h4>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/theory"
                                    activeClassName="base-view__menu-active"
                                >
                                    <BookOpen />
                                    <h4 className="base-view__menu-tile">
                                        Theory
                                    </h4>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/settings"
                                    activeClassName="base-view__menu-active"
                                >
                                    <Sliders />
                                    <h4 className="base-view__menu-tile">
                                        Settings
                                    </h4>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeClassName="base-view__menu-active"
                                >
                                    <HelpCircle />
                                    <h4 className="base-view__menu-tile">
                                        About
                                    </h4>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

const breadcrumbs = (location: Location<unknown>) => {
    const path = location.pathname;
    const items = path.split('/');
    const back = path.substring(0, path.lastIndexOf('/'));

    return (
        <div className="base-view__headline">
            <div className="base-view__headline-wrapper">
                <Link to={back}>
                    <ArrowLeft />
                </Link>
                <div className="base-view__breadcrumbs">
                    <ul>{items.map((e) => e && <li key={e}>{e}</li>)}</ul>
                </div>
            </div>
        </div>
    );
};
