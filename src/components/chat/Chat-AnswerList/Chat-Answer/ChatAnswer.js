import React from 'react'

export default function ChatAnswer(props) {
  return (
    <div onClick={props.onClick}> {props.answer} </div>
  )
}

