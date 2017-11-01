function sum(a){
  console.log(arguments);
}
sum(1);
let newSum = sum.bind(null,'1');
newSum(2);
//{0:1,1:2}

