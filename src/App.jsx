import './App.css';
import { Createbook } from './Createbook';
import { GetBookData } from './components/GetBookData';
import { Navbar } from './components/Navbar/Navbar';


function App() {


  return (
    <div className="App">
      <Navbar />
      <Createbook />
      <GetBookData />
    </div>
  );
}

export default App;
