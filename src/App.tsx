import { useState } from 'react';
import './App.css';
import ReadTheDocs from '@/components/ReadTheDocs';
import Header from '@/components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button type="button" onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
      <ReadTheDocs />
    </div>
  );
}

export default App;
