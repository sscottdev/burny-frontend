import React from 'react'
import QuestionStyle from './ChatQuestion.module.css'

export default function ChatQuestion(props) {
  return (
    <div>
        <img src='https://media.discordapp.net/attachments/939185200238305330/946815947946213426/Untitled-1.png' alt='burny chat logo'/>
        <div>
            {props.question}
        </div>
    </div>
  )
}
