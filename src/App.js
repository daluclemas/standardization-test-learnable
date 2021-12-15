import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import HumanResources from './components/humanresources/HumanResources';
import EmployeeDirectory from './components/employeedirectory/EmployeeDirectory';
import LogisticsAndFooter from './components/logistics and footer/LogisticsAndFooter';

function App() {
  return (
    <div className="App">

      <Header />

      <HumanResources />

      <EmployeeDirectory />

      <LogisticsAndFooter />
      
    </div>
  );
}

export default App;
