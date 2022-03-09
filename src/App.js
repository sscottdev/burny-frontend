import './App.css';
import Chat from './components/chat/Chat';
import MessageContext from './store/chat-context';

function App() {

  return (
    <div className="App">
      <MessageContext.Provider value={{currentMessage: "root"}}>
         <Chat />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
