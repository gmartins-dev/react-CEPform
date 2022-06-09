import { Router } from './router';
import FormCepProvider from './components/FormCepContext';
import './App.css';

const App = () => {
  return (
    <FormCepProvider>
      <Router />
    </FormCepProvider>
  );
};

export default App;
