import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { FormPage } from './pages/FormPage';
import { InfosPage } from './pages/InfosPage';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/form-infos" element={<InfosPage />} />
      </Routes>
    </BrowserRouter>
  );
};
