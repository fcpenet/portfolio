import styles from './routes.module.scss';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../main-page/main-page';
import DigitalResume from '../digital-resume/digital-resume';

export function MainRoutes() {
  return (
    <Routes>
      <Route path={'/'} element={<MainPage/>}/>
      <Route path={'/resume'} element={<DigitalResume/>}/>
    </Routes>
  );
}

export default MainRoutes;
