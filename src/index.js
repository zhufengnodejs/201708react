import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from "./components/FilterableProductTable";

let products = require('./products');

ReactDOM.render(<FilterableProductTable/>, document.querySelector('#root'));
