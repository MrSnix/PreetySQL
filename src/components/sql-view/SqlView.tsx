import React, { useEffect } from 'react';
import alasql from 'alasql';
import { fromStore, toStore } from '../../app/Settings';
import ReactJson from 'react-json-view'
import { observer } from 'mobx-react';
import './SqlView.css';

export default observer(function SqlView() {

    useEffect(() => { initDb() }, [])

    return (
        <div className="sql-view">
            <div className="sql-view__display">
                <ReactJson src={getDataset()} name="Visualizer" displayDataTypes={false} iconStyle="circle" />
            </div>
            <div className="sql-view__ctr-box">
                <div className="sql-view__ctr-group">
                    <p>user@local&gt;</p>
                    <input type="text" className="sql-view__input" placeholder="SELECT * FROM products" value={fromStore('sql-query', '')} onChange={e => toStore("sql-query", e.target.value)} onKeyPress={e => { if (e.key === 'Enter') execQuery() }} />
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
            if (err.name !== 'TypeError')
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

const initDb = () => {
    // Generate tables
    alasql([
        `CREATE TABLE categories (
        category_id INT IDENTITY (1, 1) PRIMARY KEY,
        category_name VARCHAR (255) NOT NULL
    )`,
        `CREATE TABLE brands (
        brand_id INT IDENTITY (1, 1) PRIMARY KEY,
        brand_name VARCHAR (255) NOT NULL
    )`,
        `CREATE TABLE products (
        product_id INT IDENTITY (1, 1) PRIMARY KEY,
        product_name VARCHAR (255) NOT NULL,
        brand_id INT NOT NULL,
        category_id INT NOT NULL,
        model_year SMALLINT NOT NULL,
        list_price DECIMAL (10, 2) NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories (category_id),
        FOREIGN KEY (brand_id) REFERENCES brands (brand_id) 
    )`])
    // Populate tables
    alasql([
        `INSERT INTO brands(brand_id,brand_name) VALUES(1,'Electra')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(2,'Haro')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(3,'Heller')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(4,'Pure Cycles')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(5,'Ritchey')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(6,'Strider')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(7,'Sun Bicycles')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(8,'Surly')`,
        `INSERT INTO brands(brand_id,brand_name) VALUES(9,'Trek')`,
    ])
    alasql([
        `INSERT INTO categories(category_id,category_name) VALUES(1,'Children Bicycles')`,
        `INSERT INTO categories(category_id,category_name) VALUES(2,'Comfort Bicycles')`,
        `INSERT INTO categories(category_id,category_name) VALUES(3,'Cruisers Bicycles')`,
        `INSERT INTO categories(category_id,category_name) VALUES(4,'Cyclocross Bicycles')`,
        `INSERT INTO categories(category_id,category_name) VALUES(5,'Electric Bikes')`,
        `INSERT INTO categories(category_id,category_name) VALUES(6,'Mountain Bikes')`,
        `INSERT INTO categories(category_id,category_name) VALUES(7,'Road Bikes')`,
    ])
    alasql([
        `INSERT INTO products VALUES(1,'Trek 820 - 2016',9,6,2016,379.99)`,
        `INSERT INTO products VALUES(2,'Ritchey Timberwolf Frameset - 2016',5,6,2016,749.99)`,
        `INSERT INTO products VALUES(3,'Surly Wednesday Frameset - 2016',8,6,2016,999.99)`,
        `INSERT INTO products VALUES(4,'Trek Fuel EX 8 29 - 2016',9,6,2016,2899.99)`,
        `INSERT INTO products VALUES(5,'Heller Shagamaw Frame - 2016',3,6,2016,1320.99)`,
        `INSERT INTO products VALUES(6,'Surly Ice Cream Truck Frameset - 2016',8,6,2016,469.99)`,
        `INSERT INTO products VALUES(7,'Trek Slash 8 27.5 - 2016',9,6,2016,3999.99)`,
        `INSERT INTO products VALUES(8,'Trek Remedy 29 Carbon Frameset - 2016',9,6,2016,1799.99)`,
        `INSERT INTO products VALUES(9,'Trek Conduit+ - 2016',9,5,2016,2999.99)`,
        `INSERT INTO products VALUES(10,'Surly Straggler - 2016',8,4,2016,1549)`,
        `INSERT INTO products VALUES(11,'Surly Straggler 650b - 2016',8,4,2016,1680.99)`,
        `INSERT INTO products VALUES(12,'Electra Townie Original 21D - 2016',1,3,2016,549.99)`,
        `INSERT INTO products VALUES(13,'Electra Cruiser 1 (24-Inch) - 2016',1,3,2016,269.99)`,
        `INSERT INTO products VALUES(14,'Electra Girl''s Hawaii 1 (16-inch) - 2015/2016',1,3,2016,269.99)`,
        `INSERT INTO products VALUES(15,'Electra Moto 1 - 2016',1,3,2016,529.99)`,
        `INSERT INTO products VALUES(16,'Electra Townie Original 7D EQ - 2016',1,3,2016,599.99)`,
        `INSERT INTO products VALUES(17,'Pure Cycles Vine 8-Speed - 2016',4,3,2016,429)`,
        `INSERT INTO products VALUES(18,'Pure Cycles Western 3-Speed - Women''s - 2015/2016',4,3,2016,449)`,
        `INSERT INTO products VALUES(19,'Pure Cycles William 3-Speed - 2016',4,3,2016,449)`,
        `INSERT INTO products VALUES(20,'Electra Townie Original 7D EQ - Women''s - 2016',1,3,2016,599.99)`,
        `INSERT INTO products VALUES(21,'Electra Cruiser 1 (24-Inch) - 2016',1,1,2016,269.99)`,
        `INSERT INTO products VALUES(22,'Electra Girl''s Hawaii 1 (16-inch) - 2015/2016',1,1,2016,269.99)`,
        `INSERT INTO products VALUES(23,'Electra Girl''s Hawaii 1 (20-inch) - 2015/2016',1,1,2016,299.99)`,
        `INSERT INTO products VALUES(24,'Electra Townie Original 21D - 2016',1,2,2016,549.99)`,
        `INSERT INTO products VALUES(25,'Electra Townie Original 7D - 2015/2016',1,2,2016,499.99)`,
        `INSERT INTO products VALUES(26,'Electra Townie Original 7D EQ - 2016',1,2,2016,599.99)`,
        `INSERT INTO products VALUES(27,'Surly Big Dummy Frameset - 2017',8,6,2017,999.99)`,
        `INSERT INTO products VALUES(28,'Surly Karate Monkey 27.5+ Frameset - 2017',8,6,2017,2499.99)`,
        `INSERT INTO products VALUES(29,'Trek X-Caliber 8 - 2017',9,6,2017,999.99)`,
        `INSERT INTO products VALUES(30,'Surly Ice Cream Truck Frameset - 2017',8,6,2017,999.99)`,
        `INSERT INTO products VALUES(31,'Surly Wednesday - 2017',8,6,2017,1632.99)`,
        `INSERT INTO products VALUES(32,'Trek Farley Alloy Frameset - 2017',9,6,2017,469.99)`,
        `INSERT INTO products VALUES(33,'Surly Wednesday Frameset - 2017',8,6,2017,469.99)`,
        `INSERT INTO products VALUES(34,'Trek Session DH 27.5 Carbon Frameset - 2017',9,6,2017,469.99)`,
        `INSERT INTO products VALUES(35,'Sun Bicycles Spider 3i - 2017',7,6,2017,832.99)`])
}
