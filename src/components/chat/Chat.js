import React, { useState } from "react";
import ChatMessage from "./Chat-Message/ChatMessage";
import ChatSummary from "./Chat-Summary/ChatSummary";

export default function Chat(props) {
  const [chatNode, setChatNode] = useState(props.data.qaSet);

  const onSelectionHandler = (event) => {
    console.log(event.target.id)
}

  return (
    <div>
      <ChatMessage message={chatNode} onSelection={onSelectionHandler}/>
    </div>
  );
}
