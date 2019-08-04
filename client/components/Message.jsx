import React, { Component } from 'react'
import message from '../../search'

export default class Message extends Component {
    render() {
        return (
            <h1>
                {message.map(line =>
                    <div className="content-line" key={line}>
                        {line.split(" ").map(word =>
                            <div className="content-word" key={word}>
                                {
                                    word.split("").map((char, idx) => {
                                        let num = Math.floor(Math.random() * 4) + 1
                                        return idx === 0 ?
                                            <span className={`color color-${num}`} key={`${char + idx}`}>{char}</span>
                                            : <span className={`color color-${idx < 5 ? (idx + 1) : (idx - 4)}`} key={`${char + idx}`}>{char}</span>
                                    })
                                }
                            </div>)
                        }
                    </div>)
                }

            </h1>
        )
    }
}
