
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList/UserList';
import Nav from './components/Nav/Nav';
import AddUser from './components/AddUser/AddUser';
function App() {
  return (
    <div className="App">
   <Nav/>
    <UserList/>
    <AddUser/>
    </div>
  );
}

export default App;
