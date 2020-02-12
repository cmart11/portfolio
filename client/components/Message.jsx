import React, { Component } from 'react'
import message from '../../copy'

export default class Message extends Component {
  render() {
    return (
      <div className="greeting">
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
                    >
                      {char}
                    </span>
                  ) : (
                      <span
                        className={`color color-${index < 5 ? index + 1 : index - 4} h1`}
                        key={`${char + index}`}
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
    )
  }
}
