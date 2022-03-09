import React from 'react'
import ChatAnswerList from '../Chat-AnswerList/ChatAnswerList'
import ChatQuestion from '../Chat-Question/ChatQuestion'

export default function ChatMessage(props) {

   
  return (
    <div>
        <ChatQuestion question={props.message.val} />
        <ChatAnswerList list={props.message.answers} />
    </div>
  )
}
