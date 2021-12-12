import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import HumanResources from './components/humanresources/HumanResources';
import EmployeeDirectory from './components/employeedirectory/EmployeeDirectory';

function App() {
  return (
    <div className="App">

      <Header />

      <HumanResources />

      <EmployeeDirectory />
      
    </div>
  );
}

export default App;
