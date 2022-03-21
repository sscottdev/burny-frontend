import React from 'react'
import QuestionStyle from './ChatQuestion.module.css'

export default function ChatQuestion(props) {
  return (
    <div className={QuestionStyle.question}>
        <img className={QuestionStyle.chatlogo} src='https://media.discordapp.net/attachments/939185200238305330/946815947946213426/Untitled-1.png' alt='burny chat logo'/>
        <div className={QuestionStyle.messagecontainer}>
            {props.question}
        </div>
    </div>
  )
}
