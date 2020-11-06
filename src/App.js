import logo from './logo.svg';
import './App.css';

import MyCardComponent from './components/MyCardComponent';

function App() {
  return (
    <div >
      <MyCardComponent last_name="Doe" first_name="Jane" age={45} color="Black"/>
      <MyCardComponent last_name="Smith" first_name="John" age={88} color="Brown"/>
      <MyCardComponent last_name="Filmore" first_name="Millard" age={50} color="Brown"/>
      <MyCardComponent last_name="Smith" first_name="Maria" age={62} color="Brown"/>
    {/* numbers must be in the curly brackets to be ints */}
    </div>
  );
}

export default App;
