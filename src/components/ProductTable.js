import React,{Component} from 'react';
export default class ProductTable extends Component{
  render(){
    let rows = [];
    for(let i=0;i<this.props.products.length;i++){
      let product = this.props.products[i];
      rows.push(<tr key={i}><td>{product.name}</td>
        <td>{product.price}</td></tr>);
    }
    return (
      <table>
        <thead>
          <tr>
            <th>商品名称</th>
            <th>商品价格</th>
          </tr>
        </thead>
        <tbody>
        {
          rows
        }
        </tbody>
      </table>
    )
  }
}