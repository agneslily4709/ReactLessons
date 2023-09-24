import logo from './logo.svg';
import './App.css';
import Child1 from './Components/Child1';
import Child2 from './Components/Child2';
import CounterProvider from './Context/Counter';

function App() {
  return (
    <div className="App">
        <h1>App</h1>
        <CounterProvider>
                <Child1/>
        <Child2/>
        </CounterProvider>
    </div>
  );
}

export default App;
