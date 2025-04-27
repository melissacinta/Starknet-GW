import { Account } from '@/components/dashboard/account';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
      <p className="text-lg">This is a dummy home page of This application.</p>
      <p className="text-lg">Below are link to pages on the application.</p>
      <ul className="mt-4 space-y-2">
        <li>
          <Link
            to="/dashboard"
            className="text-primary-bluegreen hover:underline"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/discover"
            className="text-primary-bluegreen hover:underline"
          >
            Discover
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/trade"
            className="text-primary-bluegreen hover:underline"
          >
            Trade
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/trade/event"
            className="text-primary-bluegreen hover:underline"
          >
            Trade Event
          </Link>
        </li>
        <li>
          <div className="text-primary-bluegreen hover:underline flex items-center">
            Account Modal <Account />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
