import { Router } from "./router";
import "./App.css";
import { FormContextProvider } from "./context/FormContext";

const App = () => {
  return (
    <FormContextProvider>
      <Router />
    </FormContextProvider>
  );
};

export default App;
