import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Importing Components
import LeftNavbar from "./Pages/First-Page/Components/Left-navbar/Left-navbar";
import Center from "./Pages/First-Page/Components/Center/Center";

function App() {
  return (
    <>
      <div className="row bg-dark">
        <div className="col-3 pe-0">{<LeftNavbar />}</div>
        <div className="col-9 ps-0">{<Center />}</div>
      </div>
    </>
  );
}

export default App;
