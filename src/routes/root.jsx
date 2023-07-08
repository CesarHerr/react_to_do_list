import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <Navbar />
      <Outlet />      
    </>
  );
}

export default Root;
