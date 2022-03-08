import './App.css';
import Chat from './components/chat/Chat';



const mockDataTree = {
  qaSet: {
    id: 'q1',
    q: "My first question",
    a: [
      {
        id: 'a1',
        val: "My first answer",
        qaSet: {
          id: 'q2',
          q: "My second question",
          a: [
            {
              id: 'a4',
              val: 'my fourth answer',
              summary: 'This is my first summary'
            },
            {
              id: 'a5',
              val: 'my 5th answer',
              summary: 'This is my 2nd summary'
            },
            {
              id: 'a6',
              val: 'my 6th answer',
              summary: 'This is my 3rd summary'
            }
          ]
        }
      },
      {
        id: 'a2',
        val: "My second answer",
        qaSet: {
          id: 'q3',
          q: "My 3rd question",
          a: [
            {
              id: 'a7',
              val: 'my 7th answer',
              summary: 'This is my 4th summary'
            },
            {
              id: 'a8',
              val: 'my 8th answer',
              summary: 'This is my 5th summary'
            }
          ]
        }
      },
      {
        id: 'a3',
        val: "My third answer",
        qaSet: {
          id: 'q3',
          q: "My 3rd question",
          a: [
            {
              id: 'a9',
              val: 'my 9th answer',
              summary: 'This is my 6th summary'
            },
            {
              id: 'a10',
              val: 'my 10th answer',
              summary: 'This is my 7th summary'
            }
          ]
        }
      }
    ]
  }
}

function App() {


  return (
    <div className="App">
      <Chat data={mockDataTree}/>
    </div>
  );
}

export default App;
