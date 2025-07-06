import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <ControlledForm />
      <hr />
      <UncontrolledForm />
      <hr />
      <UserList />
    </div>
  );
}

export default App;