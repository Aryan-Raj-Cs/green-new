import Appcontainer from "./Appcontainer";
import "./App.css";
import ErrorBounderies from "./error/ErrorBounderies";
function App() {
  return (
    <ErrorBounderies>
      <div className="App">
        <Appcontainer />
      </div>
    </ErrorBounderies>
  );
}

export default App;
