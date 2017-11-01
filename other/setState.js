let state = {name: 'zfpx'};
let newState = {age: 8, name: 'zfpx8'};
function setState(newState) {
  state = Object.assign({}, state, newState);
}
setState(newState);
setState({});
console.log(state);