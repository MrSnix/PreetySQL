import React from 'react';
import './AboutView.css';

export default function AboutView() {
    return (
        <div className="about-view">
            <div className="about-view__paragraph">
                <h3 className="about-view__title">Why ?</h3>
                <div className="about-view__content">
                    <p>
                        I love programming.
                        <br />
                        Logic is the brush I use to paint a part of tomorrow's
                        world.
                        <br />
                        This project was born for fun and I hope it can be an
                        inspiration
                        <br />
                        for those approaching web development.
                    </p>
                </div>
            </div>
            <div className="about-view__paragraph">
                <h3 className="about-view__title">Attributions</h3>
                <ul className="about-view__list">
                    <li>
                        <ul className="about-view__list">
                            <li>&#47;&#47; Technologies</li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://www.typescriptlang.org/"
                                >
                                    <b>Typescript</b>
                                </a>
                                : TypeScript extends JavaScript by adding types
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://reactjs.org/"
                                >
                                    <b>React.js</b>
                                </a>
                                : A JavaScript library for building user
                                interfaces
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://mobx.js.org"
                                >
                                    <b>Mobx.js</b>
                                </a>
                                : It makes state management simple and scalable
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://www.npmjs.com/package/alasql"
                                >
                                    <b>AlaSQL.js</b>
                                </a>
                                : An open source SQL database for JavaScript
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://create-react-app.dev"
                                >
                                    <b>create-react-app</b>
                                </a>
                                : Set up a modern web app by running one command
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="about-view__list">
                            <li>&#47;&#47; UI &#38; Components</li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://www.npmjs.com/package/react-json-view"
                                >
                                    <b>react-json-view</b>
                                </a>
                                : Component for displaying and editing arrays
                                and JSON objects
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://www.npmjs.com/package/react-syntax-highlighter"
                                >
                                    <b>react-syntax-highlighter</b>
                                </a>
                                : Syntax highlighting component for React
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://www.npmjs.com/package/overlayscrollbars-react"
                                >
                                    <b>react-overlayscrollbars</b>
                                </a>
                                : improve the experience of internal web page
                                scrolling
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://reactrouter.com/"
                                >
                                    <b>react-router</b>
                                </a>
                                : Declarative routing for React
                            </li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://feathericons.com/"
                                >
                                    <b>react-feather</b>
                                </a>
                                : Simply beautiful open source icons
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className="about-view__list">
                            <li>&#47;&#47; Art &#38; Visual</li>
                            <li>
                                -{' '}
                                <a
                                    className="about-view__link"
                                    href="https://www.freepik.com/stories"
                                >
                                    <b>Stories</b>
                                </a>
                                : An image collection designed by freepik
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="about-view__paragraph">
                <h3 className="about-view__title">Documentation</h3>
                <div className="about-view__text">
                    <ul className="about-view__list">
                        <li>
                            -{' '}
                            <a
                                className="about-view__link"
                                href="https://github.com/MrSnix/PreetySQL"
                            >
                                <b>Github</b>
                            </a>
                            : The PreetySQL official repository
                        </li>
                        <li>
                            -{' '}
                            <a
                                className="about-view__link"
                                href="https://github.com/MrSnix/PreetySQL/issues"
                            >
                                <b>Issues</b>
                            </a>
                            : Did you find an issue or a bug? Let me know about
                            it
                        </li>
                        <li>
                            -{' '}
                            <a
                                className="about-view__link"
                                href="mailto:baittiner.giuseppe.dev@gmail.com"
                            >
                                <b>Contacts</b>
                            </a>
                            : Do you want to contact me? Write me an email
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
