import React, { useState } from "react";
import ChatMessage from "./Chat-Message/ChatMessage";
import ChatSummary from "./Chat-Summary/ChatSummary";
import messageService from "./MessageService";


export default function Chat(props) {
  // const [chatNode, setChatNode] = useState(messageService.getRoot());
  const [chatNode, setChatNode] = useState(messageService.goTo("q2"));
  const [messages, setMessages] = useState([]);

  const onSelectionHandler = (event) => {
    console.log(event.target.id)
}

  return (
    <div>
      <ChatMessage message={chatNode} onSelection={onSelectionHandler}/>
    </div>
  );
}
