import './App.css';
import Table from './components/Table';
import Chart from './components/Chart';

function App() {
  return (
    <div className="app">
      <div className="tables">
        <Table desde={0} hasta={7} />
        <Table desde={8} hasta={16} />
      </div>
      <Chart />
    </div>
  );
}

export default App;
