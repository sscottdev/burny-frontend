import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Homepage(props) {
  return (
    <div>
        <FontAwesomeIcon icon={faUser} size="2x" color='rgb(255, 197, 0)'/>
        <br></br>
        <FontAwesomeIcon icon={faBars} size="2x" />
        <h2>Test</h2>
        <button id={props.id} onClick={props.onClick} key={props.id}>Take Survey</button>
        
    </div>
  )
}