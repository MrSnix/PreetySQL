import React from 'react';
import './TheoryView.css';

export default function TheoryView() {
    return (
        <div className="theory-view">
            <div className="theory-view__chapter">
                <div className="theory-view__header-wrapper">
                    <h2 className="theory-view__header">Overview</h2>
                </div>
                <p className="theory-view__text">
                    Structured Query Language (SQL) is an ISO/IEC 9075 standard
                    language for creating and working with databases stored in a
                    set of tables. The implementation provided on this web-app
                    is based upon <b>AlaSQL</b> and its extensions to the
                    language. AlaSQL it's working towards a full database engine
                    complying with{' '}
                    <a
                        className="theory-view__link"
                        href="https://github.com/agershun/alasql/wiki/Supported-SQL-statements"
                        target="_blank"
                    >
                        most of the SQL-99 language
                    </a>
                    , spiced up with additional syntax for NoSQL (schema-less)
                    data and graph networks.
                </p>
                <p className="theory-view__text">
                    On this platform you have a ready-to-use database called{' '}
                    <b>dbo</b> which is selected by default and has some tables
                    already populated with entries but feel free to start from
                    scratch if you wish. Remember, AlaSQL stores data on browser
                    memory and{' '}
                    <b>changes are lost when you leave the website</b>, so be
                    careful!
                </p>
            </div>
        </div>
    );
}
