import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import DetailPage from './components/DetailPage/DetailPage';
import FormPage from './components/FormPage/FormPage';
import OverviewPage from './components/OverviewPage/OverviewPage';
import FrontPage from './components/FrontPage/FrontPage';

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />              
        </Routes>
      </div>
    </Router>
  );
}
