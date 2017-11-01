/**
 纯函数
 1. 永远不会试图修改输入的参数
 2. 相同的输入参数一定会产生相同的输出
 **/

function withdraw(account){
  account.balance -= 100;
}
function sum(num){
  return Math.random()+num;
}
