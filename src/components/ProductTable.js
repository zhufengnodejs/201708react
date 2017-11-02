import React,{Component} from 'react';
export default class ProductTable extends Component{
  render(){
    let rows = [];//React元素 虚拟DOM
    let lastCategory;//保存上一个分类
    for(let i=0;i<this.props.products.length;i++){
      let product = this.props.products[i];//取出当前商品
      //如果有过滤条件，并且当前商品的名称不包含此过滤的关键字，过跳过这一个商品
      if(this.props.filterText&&product.name.indexOf(this.props.filterText)==-1)
        continue;
      //如果只显示有存货的，并且当前商品没有存货的话，则也跳过当前商品
      if(this.props.inStockOnly && !product.stocked)
        continue;
      if(!lastCategory || product.category!=lastCategory){
        rows.push(<tr key={'c'+i}><td colSpan={2} style={{fontWeight:'bold'}}>{product.category}</td></tr>);
        //把当前的分类当成上一个分类
        lastCategory = product.category;
      }
      //如果上述条件都满足的话，则把当前商品变成一个行并添加行数组里
      rows.push(<tr key={i}><td style={{color:product.stocked?'black':'red'}}>{product.name}</td>
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