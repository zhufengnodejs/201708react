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
  handleFilterText = (event)=>{//处理搜索框的值改变事件
    this.setState({
      filterText:event.target.value
    })
  }
  handleInStockOnly = (event)=>{//处理复选框的值改变事件
   this.setState({
     inStockOnly:event.target.checked
   });
  }
  render() {
    return (
      <div>
        <SearchBar
          handleFilterText = {this.handleFilterText}
          handleInStockOnly = {this.handleInStockOnly}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
}