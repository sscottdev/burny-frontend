import React from 'react'
import main from './ChatAnswer.module.css'
// import colors from '../../../../BrandColors.module.css'
// let styles = {};
// Object.assign(styles, main, colors);

export default function ChatAnswer(props) {
  return (
    <a className={main.btn} id={props.id} onClick={props.onClick} data-goto={props.goto}> {props.answer} </a>
  )
}

