import React from 'react'

export default function ChatQuestion(props) {
  return (
    <div>
        <img src='https://via.placeholder.com/50' alt='burny chat logo'/>
        <div>
            {props.question}
        </div>
    </div>
  )
}
