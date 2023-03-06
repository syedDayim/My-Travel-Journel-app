import Homepage from "./Homepage";
import Navbar from "./Navbar";
import data from "./JournelData"

function App() {
    return (
    <div className="App">
      <Navbar />
      <Homepage data={data}/>
    </div>
  );
}

export default App;
