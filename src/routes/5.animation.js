import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './styles.css';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={1000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

class FadeInAndOut extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false }

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 5000)
  }
  render() {
    return (
      <Fade in={this.state.show}>
        <div className='greeting'>Hello world</div>
      </Fade>
    )
  }
}

ReactDOM.render(<FadeInAndOut />, document.getElementById('root'))