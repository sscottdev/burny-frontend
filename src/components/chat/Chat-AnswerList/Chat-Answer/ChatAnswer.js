import React, {useContext} from 'react'
import MessageContext from '../../../../store/chat-context';
import main from './ChatAnswer.module.css'
import colors from '../../../../BrandColors.module.css'
let styles = {};
Object.assign(styles, main, colors);

export default function ChatAnswer(props) {

  const ctx = useContext(MessageContext)

  return (
    <button className={styles['blue-grad']} id={props.id} onClick={ctx.onSelection} data-goto={props.goto}> {props.answer} </button>
  )
}

