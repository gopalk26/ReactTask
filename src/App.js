import "./App.css";

import MainContainer from "./Components/MainContainer";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <Sidebar />
        <MainContainer />
      </div>
    </div>
  );
}

export default App;
