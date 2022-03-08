import React, { useState } from "react";
import ChatMessage from "./Chat-Message/ChatMessage";
import ChatSummary from "./Chat-Summary/ChatSummary";
import messageService from "./MessageService";


export default function Chat(props) {
  // const [chatNode, setChatNode] = useState(messageService.getRoot());
  // const [chatNode, setChatNode] = useState(messageService.goTo("q2"));

  const [messages, setMessages] = useState([messageService.getRoot()]);

  const onSelectionHandler = (event) => {
    console.log(event.target.dataset.goto)
    setMessages(prevMessages => {
      return [...prevMessages, messageService.goTo(event.target.dataset.goto) ]
    })
}

  return (
    <div>
      {
        messages.map(message => {
          if(message.type === "question"){
            return <ChatMessage key={message.id} message={message} onSelection={onSelectionHandler}/>
          } else if(message.type === "summary"){
            return <ChatSummary key={message.id} summary={message.val}/>
          }
        })
      }
    </div>
  );
}
