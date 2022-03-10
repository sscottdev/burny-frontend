import React from "react";
import Summary from './Chat-Summary.module.css';

export default function ChatSummary(props) {
  return (
    <div>
      <h2>Summary</h2>
      <div>
      <img src='https://cdn.discordapp.com/attachments/939185200238305330/946815947946213426/Untitled-1.png' alt='burny chat logo'/>
      <p>
          {props.summary}
      </p>
      </div>
    </div>
  );
}
