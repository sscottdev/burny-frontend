import React from 'react'

export default function ChatAnswer(props) {
  return (
    <div id={props.id} onClick={props.onClick} data-goto={props.goto}> {props.answer} </div>
  )
}

