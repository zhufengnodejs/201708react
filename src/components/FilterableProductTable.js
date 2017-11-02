import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
export default class FilterableProductTable extends Component {
  constructor(){
    super();
    this.state = {
      filterText:'',//用来过滤的字段串
      inStockOnly:false//只显示有存货的商品
    };
  }
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}