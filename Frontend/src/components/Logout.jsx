import React from 'react';
import { useAuth } from '../context/AuthProvider.jsx';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Logout() {
  const { authUser, setAuthUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      // Clear stored auth (if any)
      localStorage.removeItem('Users');
      setAuthUser(null);
      toast.success("Logged out successfully!");
      navigate('/'); // Redirect to home
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Something went wrong during logout!");
    }
  };

  return (
    <div>
      <button
        onClick={handleLogout}
        className="px-2 py-1 bg-red-600 text-white rounded-md cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;