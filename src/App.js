
import { useState } from 'react';

function App() {

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h2>React: useState</h2>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
        </div>
    );
}

export default App;
