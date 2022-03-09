import React from "react";
import ChatAnswer from "./Chat-Answer/ChatAnswer";

export default function ChatAnswerList(props) {

  return (
    <div>
      {props.list.map((answer) => 
        (<ChatAnswer key={answer.id} id={answer.id} answer={answer.val} goto={answer.goTo} onClick={props.onSelection} />)
      )}
    </div>
  );
}
