import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const name = '정대만!';
  const someStyle = {backgroundColor:"yellow",color:"white"};
  const yearStyle = {color:"red"};
  let list = [
    { no:1, area:"대전",visited: false},
    { no:2, area:"부산",visited: true},
    { no:3, area:"목포",visited: false}
  ]
  return (
    <div>
      <h1 style={someStyle}>안녕, {name} 1</h1>
      <h2>안녕, 라이켓! 2</h2>
      <div className="newClass"/>
      <p style = {yearStyle}>년 : {date.getFullYear()}</p>
      <p>월/일 : {date.getMonth() +1}/{date.getDate()}</p>
      <p>시간 : {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초</p>

    </div>
    
  );
}

export default App;
