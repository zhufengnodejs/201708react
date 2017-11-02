let output = '1234.4567899';
//1234456.7899
//1234.457
const rounded = Math.round(output * 1000) / 1000;
console.log(rounded);