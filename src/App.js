import { DatePicker, Card } from 'antd';
import './App.scss';

function App() {

  const test = (date,dateString) => {
    console.log(date, dateString)
  }
  
  return (
    <div className="app">
      <h1>phasmofobia</h1>
      <h2>guia</h2>
      <DatePicker onChange={test} />
    </div>
  );
}

export default App;
