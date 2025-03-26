import { Route, Routes } from 'react-router';
import './App.css';
import DashboardLayout from './components/layout/DashboardLayout';
import { dashboardRoutes } from './lib/routes';
import HomePage from './pages/Home';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<DashboardLayout />}>
        {dashboardRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
