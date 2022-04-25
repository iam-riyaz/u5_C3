// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;

import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Home/>
      
    </div>
  );
}

export default App;
// <Routes>{/* Routes here */}</Routes>