import { Formik, Field, Form } from 'formik';
import './App.css';
import FormCep from './components/FormCep';
import FormCepProvider from './components/FormCepContext';

function App() {
  return (
    <FormCepProvider>
      <FormCep />
    </FormCepProvider>
  );
}

export default App;
