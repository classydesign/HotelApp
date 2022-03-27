import Card from "./Card";
import './App.css';
import Banner from "./Panel";
import List from "./List";
import News from "./News";

function App() {  
  return (
    <div className="App">
     <Banner/>
     <News/>
     <List/>
     <Card />     
    </div>
  );
}

export default App;
