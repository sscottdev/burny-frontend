import React from 'react'
import ChatAnswer from './Chat-Answer/ChatAnswer'

export default function ChatAnswerList() {


    const onClickHandler = () => {
        console.log("clicked")
    }

  return (
    <div>
        <ChatAnswer answer="first answer" onClick={onClickHandler}/>
        <ChatAnswer answer="second answer"  onClick={onClickHandler}/>
    </div>
  )
}
