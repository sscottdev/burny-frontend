import React from "react";
import ChatAnswer from "./Chat-Answer/ChatAnswer";
import styles from "./ChatAnswerList.module.css";
export default function ChatAnswerList(props) {

  return (
    <div className={styles.messagecontainer}>
      {props.list.map((answer) => 
        (<ChatAnswer key={answer.id} id={answer.id} answer={answer.val} goto={answer.goTo} onClick={props.onSelection} />)
      )}
    </div>
  );
}
