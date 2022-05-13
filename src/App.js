
import Navbar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
      <div className="container d-flex justify-content-center">
         <div className="my-container row">
            <Navbar className = "col-1"/>
         </div>
      </div>
  );
}

export default App;
