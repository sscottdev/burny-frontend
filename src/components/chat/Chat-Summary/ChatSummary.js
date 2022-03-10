import React from "react";
import Summary from './Chat-Summary.module.css';

export default function ChatSummary(props) {
  return (
    <div className={Summary.container}>
      <div className={Summary.card}>
      <h2>Summary</h2>
      <p>
          {props.summary}
      </p>
    </div>
    </div>
  );
}
