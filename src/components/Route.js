import React, { useEffect } from "react";

const Route = ({ path, children }) => {
  
  useEffect(() => {
    const onLocationChange = () => {
      console.log('Location Change');
    }

    window.addEventListener('popstate', onLocationChange);

    // cleanup function
    return () => {
      window.removeEventListener('popstate', onLocationChange);
    }
  }, [])

  return window.location.pathname === path
      ? children
      : null;  
}

export default Route;
