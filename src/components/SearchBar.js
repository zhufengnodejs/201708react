import React,{Component} from 'react';
export default class SearchBar extends Component{
  render(){
    return (
      <div>
        <input type="text"
               onChange={this.props.handleFilterText}
               value={this.props.filterText}/><br/>
        <input type="checkbox"
               onChange={this.props.handleInStockOnly}
               checked={this.props.inStockOnly}/>只显示有现货的商品
      </div>
    )
  }
}