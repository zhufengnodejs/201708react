import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import './4.transition.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);


export default class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: ['hello', 'world', 'click', 'me'] }
  }
  handleAdd() {
    this.setState({
      items: [
        ...this.state.items,
        prompt('Enter some text')
      ]
    });
  }
  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }
  render() {
    return (
      <div className='container'>
        <TransitionGroup className='todo-list'>
          {this.state.items.map((item, i) => (
            <Fade key={item}>
              <div>
                {`${item} `}
                <button onClick={() => this.handleRemove(i)}>
                  &times;
                </button>
              </div>
            </Fade>
          ))}
        </TransitionGroup>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}
