import React from 'react'
import ChatAnswerList from '../Chat-AnswerList/ChatAnswerList'
import ChatQuestion from '../Chat-Question/ChatQuestion'

export default function ChatMessage() {
  return (
    <div>
        <ChatQuestion question="My first question?" />
        <ChatAnswerList />
    </div>
  )
}
