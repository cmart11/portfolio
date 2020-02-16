import React, { Component } from 'react'
import message from '../../copy'

export default class Message extends Component {

  constructor(props) {
    super(props)
    this.counter = 0;
    this.updateRate = 10;
    this._x = 0;
    this._y = 0;
    this.x = 0;
    this.y = 0;

    this.inner = React.createRef();
    this.container = React.createRef();
    // Functions
    this.isTimeToUpdate = this.isTimeToUpdate.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
    this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this);
    this.update = this.update.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    this.updateTransformStyle = this.updateTransformStyle.bind(this);
    this.setOrigin = this.setOrigin.bind(this);
    this.show = this.show.bind(this);
  }

  componentDidMount() {
    this.setOrigin(this.container.current);
  }

  componentDidUpdate() {
    console.log('update')
  }

  updatePosition(event) {
    var e = event || window.event;
    // let { _x, _y, x, y } = this;
    // this.setState({
    // x: e.clientX - _x,
    // y: (e.clientY - _y) * -1
    // })

    this.x = e.clientX - this._x
    this.y = (e.clientY - this._y) * -1

  }
  setOrigin(event) {
    const e = event
    // this.setState({
    this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2)
    this._y = e.offsetTop + Math.floor(e.offsetHeight / 2)
    // })

  }
  show() { return '(' + this.state.x + ', ' + this.state.y + ')'; }

  isTimeToUpdate() {

    // this.setState({
    //   counter: counter++
    // })

    let { counter, updateRate } = this

    // setTimeout(() => {
    if (counter++ % updateRate === 0) {
      console.log('counter ::: ', counter)
      counter = 0

      return true
    } else {
      return false
    }
    // }, 500)

  }

  onMouseEnterHandler(event) {
    this.update(event)
  }

  onMouseLeaveHandler() {
    this.inner.current.style = '';
  }
  /**
   * 
   * onMouseMoveHandler fires too many times too quickly
   * this causes the cursor element to stutter when moving over the text
   * need to find a solution to limit or slow down update()
   * 
   * maybe use the mouse position and fire update() @ certain
   * intervals instead of relying on a counter?
   * 
   * it's not the counter that's the issue it's that update()
   * is being called way too many times as the mouse moves
   * 
   * maybe move the event handler to a diff element 
   */

  onMouseMoveHandler(event) {
    if (this.isTimeToUpdate()) {
      console.log('moved will updated')
      this.update(event)
    }
    // this.update(event)
  }

  update(event) {
    this.updatePosition(event)
    this.updateTransformStyle(
      (this.y / this.inner.current.offsetHeight / 2).toFixed(2),
      (this.x / this.inner.current.offsetWidth / 2).toFixed(2)
    )
  }

  updateTransformStyle(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    this.inner.current.style.transform = style;
    this.inner.current.style.webkitTransform = style;
    this.inner.current.style.mozTransform = style;
    this.inner.current.style.msTransform = style;
    this.inner.current.style.oTransform = style;
  };

  render() {
    return (
      <div
        ref={this.container}
        className="greeting"
        onMouseEnter={event => this.onMouseEnterHandler(event)}
        onMouseLeave={event => this.onMouseLeaveHandler(event)}
      >
        <div id="inner" ref={this.inner}>
          {message.map((line, index) => (
            <div className={`content-line ${index % 2 ? 'line-shift' : ''}`} key={line}>
              {line.split(' ').map(word => (
                <div className="content-word" key={word}>
                  {word.split('').map((char, index) => {
                    let num = Math.floor(Math.random() * 4) + 1
                    return index === 0 ? (
                      <span
                        className={`color color-${num} h1`}
                        key={`${char + index}`}
                        onMouseEnter={event => this.onMouseMoveHandler(event)}
                      >
                        {char}
                      </span>
                    ) : (
                        <span
                          className={`color color-${index < 5 ? index + 1 : index - 4} h1`}
                          key={`${char + index}`}
                          onMouseEnter={event => this.onMouseMoveHandler(event)}
                        >
                          {char}
                        </span>
                      )
                  })}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
