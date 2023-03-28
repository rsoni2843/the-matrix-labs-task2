import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div id="sidebar-parent">
          <Sidebar />
        </div>

        <div id="main-parent">
          <Main />
        </div>
      </main>
    </div>
  );
}

export default App;
