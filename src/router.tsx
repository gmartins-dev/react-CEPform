import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import { FormPage } from './pages/FormPage/FormPage';
import { FormInfos } from './pages/FormInfos/FormInfos';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/form-infos" element={<FormInfos />} />
      </Routes>
    </BrowserRouter>
  );
};
