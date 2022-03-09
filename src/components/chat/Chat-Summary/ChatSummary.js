import React from "react";

export default function ChatSummary(props) {
  return (
    <div>
      <h2>Summary</h2>
      <div>
      <img src='https://via.placeholder.com/50' alt='burny chat logo'/>
      <p>
          {props.summary}
      </p>
      </div>
    </div>
  );
}
