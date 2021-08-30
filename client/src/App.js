
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList/UserList';
import Nav from './components/Nav/Nav';

function App() {
  return (
    <div className="App">
   <Nav/>
    <UserList/>
    
    </div>
  );
}

export default App;
