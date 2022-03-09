import React from 'react'

export default function Sidemenu(props) {
  return (
    <div>
        <button id={props.id} onClick={props.onClick} key={props.id}>Settings</button>
        <br></br>
        <button id={props.id} onClick={props.onClick} key={props.id}>Report a bug</button>
        <br></br>
        <button id={props.id} onClick={props.onClick} key={props.id}>Help</button>
    </div>
  )
}
