import './App.css';
import { HeaderComponent } from './components/Header';
import { CustomForm } from './components/CustomForm/CustomForm';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
        <CustomForm />
    </div>
  );
}

export default App;
