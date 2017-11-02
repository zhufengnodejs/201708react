import React,{Component} from 'react';
export default class SearchBar extends Component{
  render(){
    return (
      <div>
        <input type="text" value={this.props.filterText}/><br/>
        <input type="checkbox" checked={this.props.inStockOnly}/>只显示有现货的商品
      </div>
    )
  }
}