import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import SQL_DB from '../../app/Database';
import './TheoryView.css';

export default function TheoryView() {
    const { EXAMPLES } = SQL_DB;
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
                        rel="noreferrer"
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
            <div className="theory-view__chapter">
                <div className="theory-view__header-wrapper">
                    <h2 className="theory-view__header">Fundamentals</h2>
                </div>
                <h4 className="theory-view__sub-header">
                    Comments &amp; convention
                </h4>
                <p className="theory-view__text">
                    In SQL comments start with two hyphens and usually each
                    command ends with a semicolon. SQL is not case-sensitive
                    about keywords. The sample commands here follow the
                    convention of spelling them in upper-case because it makes
                    easier to distinguish them from database, table, and column
                    names.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX0}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">MANAGE A DATABASE</h4>
                <p className="theory-view__text">
                    Make sure you have admin privilege before creating any
                    database and be careful before dropping a database, deleting
                    a database will result in loss of complete information
                    stored in it.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX1}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">LIST ALL DATABASES</h4>
                <p className="theory-view__text">
                    Once a database is create or dropped, you can check his
                    presence or absence executing the following SQL command.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX2}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">USE A DATABASE</h4>
                <p className="theory-view__text">
                    The following command is used to designate an external
                    database as the current database, in other words, the
                    database to which the next SQL queries in the current
                    process will be sent. From now on all queries example will
                    use the default database so you can execute them directly in
                    the browser.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX3}
                </SyntaxHighlighter>
                <div className="theory-view__header-wrapper">
                    <h2 className="theory-view__header">Operations</h2>
                </div>
                <h4 className="theory-view__sub-header">SELECT</h4>
                <p className="theory-view__text">
                    The command SELECT takes all rows and columns from the
                    current database's table. The default activity is for the
                    interpreter to scroll the results on your screen.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX4}
                </SyntaxHighlighter>
                <p className="theory-view__text">
                    It can be used to select specific table's columns too.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX5}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">SELECT &amp; LIMIT</h4>
                <p className="theory-view__text">
                    Sometimes dataset can be huge. I mean, really huge, like
                    thousands and thousands of entries (well, that's not our
                    case), but you should be aware of LIMIT which can help to
                    return a specific amount of rows from a query without
                    crashing your computer.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX6}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">SELECT &amp; WHERE</h4>
                <p className="theory-view__text">
                    The WHERE clause is used to filter records and extract only
                    those records that fulfill a specified condition. The WHERE
                    clause is not only used in SELECT statement, it is also used
                    in UPDATE, DELETE statement
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX7}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX8}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX9}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">
                    SELECT &amp; ORDER BY
                </h4>
                <p className="theory-view__text">
                    The ORDER BY keyword is used to sort the result-set in
                    ascending or descending order, by default it's ascending. To
                    sort the records in descending order, use the DESC keyword.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX10}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX11}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX12}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">JOIN</h4>
                <p className="theory-view__text">
                    A JOIN clause is used to combine rows from two or more
                    tables, based on a related column between them.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX13}
                </SyntaxHighlighter>
                <div className="theory-view__header-wrapper">
                    <h2 className="theory-view__header">Tables</h2>
                </div>
                <p className="theory-view__text">
                    Tables are database objects that contain all the data in a
                    database. In tables, data is logically organized in a
                    row-and-column format similar to a spreadsheet. Each row
                    represents a unique record, and each column represents a
                    field in the record.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX14}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">CREATE</h4>
                <p className="theory-view__text">
                    The CREATE TABLE statement is used to create a new table in
                    a database, column parameters specify the names of the
                    columns of the table and the data types that the column can
                    hold (e.g. varchar, integer, date, etc.).
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX15}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">INSERT</h4>
                <p className="theory-view__text">
                    The INSERT INTO statement is used to insert new records in a
                    table. Would you believe it?
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX16}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">UPDATE</h4>
                <p className="theory-view__text">
                    The UPDATE statement is used to update records in a table.
                    If you do not specify WHERE clause all the SET fields will
                    be applied to the entire table.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX17}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX18}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">DELETE</h4>
                <p className="theory-view__text">
                    The DELETE statement is used to delete records in a table.
                    If you do not specify WHERE clause to match a specific entry
                    the entire table will be wiped out.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX19}
                </SyntaxHighlighter>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX20}
                </SyntaxHighlighter>
                <h4 className="theory-view__sub-header">DROP</h4>
                <p className="theory-view__text">
                    The DROP statement is used to remove a specific table with
                    all its records from the database.
                </p>
                <SyntaxHighlighter language="sql">
                    {EXAMPLES.EX21}
                </SyntaxHighlighter>
                <div className="theory-view__header-wrapper">
                    <h2 className="theory-view__header">What's next?</h2>
                </div>
                <p className="theory-view__text">
                    This was a brief summary of what you should know in order to
                    play with this application written in React. I invite you
                    not to stop here and deepen what is covered, to broaden your
                    knowledge about how databases work and to understand what is
                    behind it.{' '}
                </p>
                <ul className="theory-view__resources">
                    <li>
                        <a
                            className="theory-view__link"
                            href="https://sqlbolt.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            SQL Bolt
                        </a>{' '}
                        offers a series of interactive exercises designed to
                        help you quickly learn SQL right in your browser.
                    </li>
                    <li>
                        <a
                            className="theory-view__link"
                            href="https://www.codecademy.com/learn/learn-sql"
                            target="_blank"
                            rel="noreferrer"
                        >
                            CodeAcademy
                        </a>{' '}
                        offers a course about it, you’ll learn how to
                        communicate with relational databases through SQL.
                    </li>
                    <li>
                        <a
                            className="theory-view__link"
                            href="https://www.khanacademy.org/computing/computer-programming/sql"
                            target="_blank"
                            rel="noreferrer"
                        >
                            KhanAcademy
                        </a>{' '}
                        offers different lessons for beginners, you’ll learn
                        querying and managing data.
                    </li>
                </ul>
            </div>
        </div>
    );
}
